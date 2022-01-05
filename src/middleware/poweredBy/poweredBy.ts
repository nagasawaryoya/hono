import { Context } from '../../hono'

export const poweredBy = () => {
  return async (c: Context, next: Function) => {
    await next()
    // await c.res.headers.append('X-Powered-By', 'Hono')
    c.res.headers.append('X-Powered-By', 'Hono')
  }
}