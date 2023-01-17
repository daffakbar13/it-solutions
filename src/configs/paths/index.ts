import { blogPaths } from './blog.paths'
import { demosPaths } from './demos.paths'
import { featuresPaths } from './features.paths'
import { othersPaths } from './others.paths'
import { pagesPaths } from './pages.paths'
import { portfolioPaths } from './portfolio.paths'
import { shopPaths } from './shop.paths'

const paths = {
  ...demosPaths,
  ...pagesPaths,
  ...featuresPaths,
  ...blogPaths,
  ...portfolioPaths,
  ...shopPaths,
  ...othersPaths,
}

export default paths
