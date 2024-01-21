export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
  
    //   const { currencyKey } = useRuntimeConfig();
  
    const uri = `http://service.cnfxfine.com/upload/geturl/${id}`;
  
    // const filteredProducts = products.filter((product) => product.id === id);
  
    // return filteredProducts[0];
    const res = await $fetch(uri, { method: "GET" });
    const url = res.data;
    return url;
  });
  