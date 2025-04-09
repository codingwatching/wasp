module Wasp.Generator.SdkGenerator.Auth.LocalAuthG
  ( genLocalAuth,
  )
where

import Data.Aeson (object, (.=))
import StrongPath (relfile)
import qualified StrongPath as SP
import qualified Wasp.AppSpec.App.Auth as AS.Auth
import Wasp.Generator.AuthProviders (localAuthProvider)
import Wasp.Generator.AuthProviders.Local (serverLoginUrl, serverSignupUrl)
import Wasp.Generator.FileDraft (FileDraft)
import Wasp.Generator.Monad (Generator)
import Wasp.Generator.SdkGenerator.Common as C
import Wasp.Util ((<++>))

genLocalAuth :: AS.Auth.Auth -> Generator [FileDraft]
genLocalAuth auth
  | AS.Auth.isUsernameAndPasswordAuthEnabled auth =
      sequence
        [ genIndex
        ]
        <++> genActions
  | otherwise = return []

genIndex :: Generator FileDraft
genIndex = return $ C.mkTmplFd [relfile|auth/username/index.ts|]

genActions :: Generator [FileDraft]
genActions =
  sequence
    [ genLoginAction,
      genSignupAction
    ]

-- | Generates file with signup function to be used by Wasp developer.
genSignupAction :: Generator FileDraft
genSignupAction = return $ C.mkTmplFdWithData (SP.castRel [relfile|auth/username/actions/signup.ts|]) tmplData
  where
    tmplData = object ["signupPath" .= serverSignupUrl localAuthProvider]

-- | Generates file with login function to be used by Wasp developer.
genLoginAction :: Generator FileDraft
genLoginAction = return $ C.mkTmplFdWithData (SP.castRel [relfile|auth/username/actions/login.ts|]) tmplData
  where
    tmplData = object ["loginPath" .= serverLoginUrl localAuthProvider]
