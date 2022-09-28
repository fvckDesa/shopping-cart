export function parseShopData(data) {
  return data?.items.map(({ productId, productName, productAsset }) => ({
    id: productId,
    name: productName,
    image: productAsset.preview,
  }));
}
