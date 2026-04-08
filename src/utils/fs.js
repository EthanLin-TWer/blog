const fs = require('fs')

const saveToFile = (content, outputPath) => {
  fs.writeFileSync(outputPath, content)
}

module.exports = { saveToFile }
