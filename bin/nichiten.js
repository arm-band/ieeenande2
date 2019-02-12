const _         = require('../gulp/plugin')
const dir       = require('../gulp/dir')

const cssData = _.fs.readFileSync(`${dir.assets.lightbox}/css/lightbox.css`)
_.fs.writeFileSync(`${dir.src.scss}/${dir.src.assets}/lightbox.scss`, cssData)