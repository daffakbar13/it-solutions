import { createPath } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Shop'

export const shopPaths = {
  shopMenu1: createPath({
    name: 'Shop Menu 1',
    path: '/shop-menu-1',
    displayOnMenu: true,
    parent,
  }),
  shopMenu2: createPath({
    name: 'Shop Menu 2',
    path: '/shop-menu-2',
    displayOnMenu: true,
    parent,
  }),
  shopMenu3: createPath({
    name: 'Shop Menu 3',
    path: '/shop-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
