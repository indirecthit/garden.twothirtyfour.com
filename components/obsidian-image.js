const isImgExt = (value) => /\.(svg|png|jpg|jpeg|gif)/.test(value)

// See https://webpack.js.org/guides/dependency-management/#require-with-expression
// This helps Webpack understand what should be imported at compile time
const requireContext = require.context('../data', true, /\.(svg|png|jpg|jpeg|gif)$/)

function ObsidianImage({ node }) {
  if(isImgExt(node.url)) {
    const multipleSizes = requireContext(`../data/${node.url}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`);
    return (
      <div>
        <img srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
      </div>
    );
  }
}

export default ObsidianImage;
