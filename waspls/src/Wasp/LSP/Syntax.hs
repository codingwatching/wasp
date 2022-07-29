module Wasp.LSP.Syntax
  ( -- * Syntax

    -- | Module with utilities for working with/looking for patterns in CSTs
    positionToOffset,
    toOffset,
    isAtExprPlace,
    -- | Printing
    showNeighborhood,
  )
where

import Control.Monad ((>=>))
import Control.Syntax.Traverse
import Data.List (intercalate, unfoldr)
import qualified Language.LSP.Types as J
import qualified Wasp.Backend.ConcreteSyntax as S

positionToOffset :: String -> J.Position -> Int
positionToOffset str (J.Position l c) =
  let linesBefore = take (fromIntegral l) (lines str)
   in -- We add 1 to the length of each line to make sure to count the newline
      sum (map ((+ 1) . length) linesBefore) + fromIntegral c

-- | Move to the node containing the offset.
--
-- This tries to prefer non-trivia tokens where possible. If the offset falls
-- exactly between two tokens, it choses the left-most non-trivia token.
toOffset :: Int -> Traversal -> Traversal
toOffset targetOffset start = go $ bottom start
  where
    go :: Traversal -> Traversal
    go at
      | offsetAt at == targetOffset = at
      | offsetAfter at > targetOffset = at
      | offsetAfter at == targetOffset && not (S.syntaxKindIsTrivia (kindAt at)) =
        at
      | otherwise = case at & next of
        Nothing -> at -- Syntax tree stored in the traversal isn't wide enough
        Just after -> go after

-- | Check whether a position in a CST is somewhere an expression belongs. These
-- locations (as of now) are:
--
-- - Parent is DictEntry, has a DictKey left siblings
-- - Parent is Decl, has DeclType and DeclName left siblings
-- - Parent is a List
-- - Parent is a Tuple
isAtExprPlace :: Traversal -> Bool
isAtExprPlace t =
  (parentIs S.DictEntry && hasLeft S.DictKey)
    || parentIs S.List
    || (parentIs S.Decl && hasLeft S.DeclType && hasLeft S.DeclName)
    || parentIs S.Tuple
  where
    parentIs k = Just k == parentKind t
    hasLeft k = k `elem` map S.snodeKind (leftSiblings t)

-- | Show the nodes around the current position
--
-- Used for debug purposes
showNeighborhood :: Traversal -> String
showNeighborhood t =
  let parentStr = case t & up of
        Nothing -> "<ROOT>"
        Just parent -> showNode "" parent
      leftSiblingLines = map (showNode "  ") $ reverse $ unfoldr (left >=> return . dupe) t
      currentStr = showNode "  " t ++ " <--"
      childrenLines = map (showNode "    ") $ concat $ down t >>= return . unfoldr (right >=> return . dupe)
      rightSiblingLines = map (showNode "  ") $ unfoldr (right >=> return . dupe) t
   in intercalate "\n" $ parentStr : leftSiblingLines ++ [currentStr] ++ childrenLines ++ rightSiblingLines
  where
    showNode indent node = indent ++ show (kindAt node) ++ "@" ++ show (offsetAt node) ++ ".." ++ show (offsetAfter node)
    dupe x = (x, x)