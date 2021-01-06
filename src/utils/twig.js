const twig = require('twig')

twig.extendFilter('json', (input, [indent = 2, ..._]) => {
    console.log('herererereerer', input)
    return JSON.stringify(input, null, indent)
})

module.exports = twig