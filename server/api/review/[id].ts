export default defineEventHandler(async (event) => {
    console.log("event.context.params", event.context.params);
    const { id } = event.context.params;
  
    //   const { currencyKey } = useRuntimeConfig();
  
    const uri = `http://service.cnfxfine.com/review/${id}`;
  
    // const filteredProducts = products.filter((product) => product.id === id);
  
    // return filteredProducts[0];
    const res = await $fetch(uri, { method: 'GET' });
    const reviews = res.data;
    return reviews;
  });
  