import { server, setupServer } from 'msw/node'
import { handlers } from './handler'

export const server = setupServer(...handlers)