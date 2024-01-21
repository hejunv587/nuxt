export default defineEventHandler(async (event) => {
  const uri = `http://service.cnfxfine.com/category`;

  const res = await $fetch(uri);
  console.log("category res", res);
  const category = res.data;
  return category;
});
