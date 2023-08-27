const tinify = require('tinify')
const dotenv = require('dotenv')

const localConfigFilePath = './.env.local'
const configs = dotenv.config({ path: localConfigFilePath }).parsed
const imagePath = process.argv[2]
const defaultMaximumImageWidthForBlogPost = 960
const defaultWidthToPreventLoss = defaultMaximumImageWidthForBlogPost * 2

tinify.key = configs.TINIFY_API_KEY

console.log(`🚴🚴🚴 Minifying ${imagePath} ... 🚴🚴🚴`)
tinify
  .fromFile(imagePath)
  .resize({ method: 'scale', width: defaultWidthToPreventLoss })
  .toFile(imagePath, function () {
    console.log(`👏👏👏 Minified ${imagePath} 👏👏👏`)
  })
