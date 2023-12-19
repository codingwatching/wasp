import { createAction } from './core'
import { CreateTask, UpdateTask } from 'wasp/server/actions'

export const updateTask = createAction<UpdateTask>('operations/update-task', [
  'Task',
])

export const createTask = createAction<CreateTask>('operations/create-task', [
  'Task',
])

export const deleteTasks = createAction<CreateTask>('operations/delete-tasks', [
  'Task',
])