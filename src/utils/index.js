const MAX_CHAR_COMPACT_DESCRIPTION = 80;

export function parseShopData(data) {
  return data?.items.map(
    ({ productId, productName, productAsset, brandNames, priceWithTax }) => ({
      id: productId,
      name: productName,
      image: productAsset.preview,
      brand: brandNames[0],
      price: formatPrice(priceWithTax.min),
    })
  );
}

export function formatProductDescription(description, isCompact) {
  if (!description) return "";
  const validDescription = description.replace(/<(\/)?p>/g, "");
  return isCompact
    ? validDescription.slice(0, MAX_CHAR_COMPACT_DESCRIPTION) + "..."
    : validDescription;
}

export function formatPrice(price) {
  return Math.ceil(+String(price).replace(/([0-9]{2})$/, ".$1"));
}
