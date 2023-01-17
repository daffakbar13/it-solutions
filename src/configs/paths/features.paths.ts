import { createPath } from 'src/helpers'
import { MenuTypes } from 'src/shared'

const parent: MenuTypes = 'Features'

export const featuresPaths = {
  featuresMenu1: createPath({
    name: 'Features Menu 1',
    path: '/features-menu-1',
    displayOnMenu: true,
    parent,
  }),
  featuresMenu2: createPath({
    name: 'Features Menu 2',
    path: '/features-menu-2',
    displayOnMenu: true,
    parent,
  }),
  featuresMenu3: createPath({
    name: 'Features Menu 3',
    path: '/features-menu-3',
    displayOnMenu: true,
    parent,
  }),
}
