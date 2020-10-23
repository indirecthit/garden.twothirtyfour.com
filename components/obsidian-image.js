const isImgExt = (value) => /\.(svg|png|jpg|jpeg|gif)/.test(value)

function ObsidianImage({ node }) {
// See https://webpack.js.org/guides/dependency-management/#require-with-expression
// This helps Webpack understand what should be imported at compile time
  const requireContext = require.context('../data/?resize&sizes[]=300&sizes[]=600&sizes[]=1000', true, /\.(svg|png|jpg|jpeg|gif)$/)
  if(isImgExt(node.url)) {
    const multipleSizes = requireContext(`./${node.url}`);
    return (
      <img srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
    );
  }
}

export default ObsidianImage;
