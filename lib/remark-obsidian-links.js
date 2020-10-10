/**
 * Looks for all internal Obsidian markdown links and replaces them with a link
 */
const { getPageSlug } = require("./api");
var visit = require('unist-util-visit')

module.exports = attacher

function attacher() {
  return transformer

  function transformer(tree, file) {
    visit(tree, 'text', visitor) // Look for all text nodes in the tree

    function visitor(node, index, parent) {
      var startBlock = '[['
      var value = node.value;
      if(value.indexOf(startBlock) < 0 ) return; //If they contain [[, there is at least one link in here

      var filenames = value.matchAll(/\[\[([^\]]+)\]\]/g)
      var lastPosition = 0
      var children = []
      for (const element of filenames) {
        children.push({type: 'text', value: value.slice(lastPosition, element.index)})
        children.push({
          type: 'link',
          title: null,
          url: `/pages/${getPageSlug(element[1])}`, // TODO: Remove the hardcoded /pages URL
          children: [{type: 'text', value: element[1]}]
        })
        lastPosition = element.index + element[0].length
      }
      if(lastPosition < value.length) {
        children.push({type: 'text', value: value.slice(lastPosition, value.length)})
      }
      parent.children = children
    }
  }
}