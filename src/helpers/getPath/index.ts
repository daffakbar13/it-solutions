import { paths } from 'src/configs'

export default function getPath(key: keyof typeof paths) {
  return paths[key].path
}
