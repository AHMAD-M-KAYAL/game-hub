// imagaasd/media/dasljbadfkadkasdassfnlnasbassfuib
// imagaasd/media/   dasljbadfkadkasdassfnlnasbassfuib
const getNewPhotoSize = (url: string) => {
  if (url == null) return "";
  const indexEdit = "media/";
  const startEditUrl = url.indexOf(indexEdit) + indexEdit.length;
  // 8
  return url.slice(0, startEditUrl) + "crop/600/400/" + url.slice(startEditUrl);
};
export default getNewPhotoSize;
