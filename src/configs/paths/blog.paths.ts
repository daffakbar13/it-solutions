import { createPath } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Blog'

export const blogPaths = {
  blogMenu1: createPath({
    name: 'Blog Menu 1',
    path: '/blog-menu-1',
    displayOnMenu: true,
    parent,
  }),
  blogMenu2: createPath({
    name: 'Blog Menu 2',
    path: '/blog-menu-2',
    displayOnMenu: true,
    parent,
  }),

  blogMenu3: createPath({
    name: 'Blog Menu 3',
    path: '/blog-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
