export default defineEventHandler(async (event) => {
  const uri = `http://service.cnfxfine.com/product`;

  const res = await $fetch(uri, { method: "GET" });
  const products = res.data;
  return products;
});
