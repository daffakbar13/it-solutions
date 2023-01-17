import { createPath } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Pages'

export const pagesPaths = {
  pagesMenu1: createPath({
    name: 'Pages Menu 1',
    path: '/pages-menu-1',
    displayOnMenu: true,
    parent,
  }),
  pagesMenu2: createPath({
    name: 'Pages Menu 2',
    path: '/pages-menu-2',
    displayOnMenu: true,
    parent,
  }),
  pagesMenu3: createPath({
    name: 'Pages Menu 3',
    path: '/pages-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
