const isImgExt = (value) => /\.(svg|png|jpg|jpeg|gif)/.test(value)

function ObsidianImage({ node }) {
  console.log("XXXX")
  if(isImgExt(node.url)) {
    const multipleSizes = require(`../data/${node.url}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`);
    return (
      <div>
        <img srcSet={multipleSizes.srcSet} src={multipleSizes.src} />
      </div>
    );
  }
}

export default ObsidianImage;
