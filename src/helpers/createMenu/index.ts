import { createSubMenu } from '../createSubMenu'

export const createMenu = (title: string, subMenu: ReturnType<typeof createSubMenu>[]) => ({
  title,
  subMenu,
})
