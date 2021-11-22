import NextAuth from 'next-auth'
import { UserSession } from '.'

declare module 'next-auth' {
  interface Session {
    user: UserSession & { id: string }
  }
}
