import { MenuTypes } from './menus.types'

export interface PathDetails {
  readonly name: string
  readonly path: string
  readonly parent?: MenuTypes
  readonly displayOnMenu?: boolean
}

export interface PathTypes {
  [x: string]: PathDetails
}
