const visit = require('unist-util-visit-parents')

const isImgExt = (value) => /\.(svg|png|jpg|jpeg|gif)/.test(value)

module.exports = images

function images() {
  return transform
}

function transform(tree) {
  visit(tree, 'text', ontext)
}

function ontext(node, parents) {
  const value = String(node.value).trim()

  if (value.startsWith('![[') && isImgExt(value)) {
    let interactive = false
    let length = parents.length
    const siblings = parents[length - 1].children
    var filename = value.match(/!\[\[([A-Za-z 0-9]+\.(svg|png|jpg|jpeg|gif))\]\]/)

    let next = {
      type: 'obsidianimage',
      url: filename[1],
      title: null,
      alt: null,
      position: node.position
    }

    siblings[siblings.indexOf(node)] = next
  }
}
