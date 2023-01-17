import { createPath } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Demos'

export const demosPaths = {
  demosMenu1: createPath({
    name: 'Demos Menu 1',
    path: '/demos-menu-1',
    displayOnMenu: true,
    parent,
  }),
  demosMenu2: createPath({
    name: 'Demos Menu 2',
    path: '/demos-menu-2',
    displayOnMenu: true,
    parent,
  }),
  demosMenu3: createPath({
    name: 'Demos Menu 3',
    path: '/demos-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
