var visit = require('unist-util-visit')

module.exports = attacher

function attacher() {
  return transformer

  function transformer(tree, file) {
    visit(tree, 'heading', visitor) // Look for all text nodes in the tree

    function visitor(node) {
      const depth = node.depth + 1;
			if (depth > 6) {
				node.depth = 6;
			} else if (depth <= 0) {
				node.depth = 1;
			} else {
				node.depth = depth;
      }
      return node;
    }
  }
}