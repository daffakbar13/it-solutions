import { createPath } from 'src/helpers'

export const othersPaths = {
  home: createPath({
    name: 'Home',
    path: '/',
  }),
  notfound: createPath({
    name: '404 Not Found',
    path: '/not-found-404',
  }),
}
