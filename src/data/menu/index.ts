import { createMenu, createSubMenu } from 'src/helpers'

export const menu = [
  createMenu('Demos', [
    createSubMenu('Demos Menu 1', '/menu1'),
    createSubMenu('Demos Menu 2', '/menu2'),
    createSubMenu('Demos Menu 3', '/menu3'),
  ]),
  createMenu('Pages', [
    createSubMenu('Pages Menu 1', '/menu1'),
    createSubMenu('Pages Menu 2', '/menu2'),
    createSubMenu('Pages Menu 3', '/menu3'),
  ]),
  createMenu('Features', [
    createSubMenu('Features Menu 1', '/menu1'),
    createSubMenu('Features Menu 2', '/menu2'),
    createSubMenu('Features Menu 3', '/menu3'),
  ]),
  createMenu('Blog', [
    createSubMenu('Blog Menu 1', '/menu1'),
    createSubMenu('Blog Menu 2', '/menu2'),
    createSubMenu('Blog Menu 3', '/menu3'),
  ]),
  createMenu('Portfolio', [
    createSubMenu('Portfolio Menu 1', '/menu1'),
    createSubMenu('Portfolio Menu 2', '/menu2'),
    createSubMenu('Portfolio Menu 3', '/menu3'),
  ]),
  createMenu('Shop', [
    createSubMenu('Shop Menu 1', '/menu1'),
    createSubMenu('Shop Menu 2', '/menu2'),
    createSubMenu('Shop Menu 3', '/menu3'),
  ]),
]
