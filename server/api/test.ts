export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // const { age } = await readBody(event);

  // api call with private key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_obxiTCjYV7hlWBsghIhP1Jc8N0gYwIF8VDL3768n')

  return data

  // return {
  //   message: `Hello ${name}, You are ${age} years old.`,
  // };
});
