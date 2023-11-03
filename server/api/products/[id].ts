
const products = [
  {
    id: "M3",
    name: "FXTUL M3 is a handheld motorcycle diagnostic tool",
    images: [
      {
        name: "m3 picture 1",
        type: "image",
        src: `/images/m3/M3_1.jpg`,
        thumbnail: `/images/m3/M3_1TH.jpg`,
      },
      {
        name: "m3 picture 2",
        type: "image",
        src: `/images/m3/M3_2.jpg`,
        thumbnail: `/images/m3/M3_2TH.jpg`,
      },
      {
        name: "m3 picture 3",
        type: "image",
        src: `/images/m3/M3_3.jpg`,
        thumbnail: `/images/m3/M3_3TH.jpg`,
      },
      {
        name: "m3 picture 4",
        type: "image",
        src: `/images/m3/M3_4.jpg`,
        thumbnail: `/images/m3/M3_4TH.jpg`,
      },
      {
        name: "m3 picture 5",
        type: "image",
        src: `/images/m3/M3_5.jpg`,
        thumbnail: `/images/m3/M3_5TH.jpg`,
      },
    ],
    description:
      "FXTUL M3 is a handheld motorcycle diagnostic tool for mainstream motorcycle brands and can help technicians diagnose problems faster and make repairs.",
    overview:
      "FXTUL M3 is a handheld motorcycle diagnostic tool for mainstream motorcycle brands and can help technicians diagnose problems faster and make repairs. This tool has functions such as voltage detection, multi-language selection, and unit switching. It has a clear interface and is easy to operate. It is a good helper for motorcycle maintenance.",
    functions: [
      "Support engine / ABS / Tire pressure / Anti-theft and other systems",
      "Read system information",
      "Read fault code",
      "Clear fault code",
      "Read data stream",
      "Read freeze frame data",
      "Actuator test",
      "Action test",
      "Service function (including idle speed regulation/throttle position learning, etc.)",
    ],
    advantages: [
      "No internet connection or setup required",
      "Lightweight one-handed operation",
      "Small enough to take it anywhere",
      "It has an easy-to-view screen and is easy to operate",
      "Multi-brand compatibility: support the diagnosis of Asian, European, and American multi-brand motorcycles",
      "Support a variety of diagnostic tests such as reading fault codes and voltage detection, etc.",
      "Support ECU reset",
      "High data accuracy",
      "With real-time data",
      "Cost Effective: Just $56 saves a lot of money and time on repairs. If you are a repair shop mechanic, you will also experience higher customer satisfaction and increased income.",
    ],
    technical_parameters: [
      "Voltage: DC10-15V",
      'Display: 2.8 "color screen',
      "Machine size: 16.5*8.5*2.5CM",
    ],
    about:
      'Connect the device to the computer and wait for the device to be recognized by the computer. After the recognition is successful, a new drive symbol will appear on the computer. Open this and replace the “DIAGNOSE" folder in the drive with the downloaded “DIAGNOSE" upgrade folder, and then power on again. The updated files can be obtained by contacting customer service or the official website.',
    services: [
      "Free software upgrade",
      "3 years warranty",
      "24-hour customer service",
      "Support custom 8 motorcycle models and OEM: If you have a large demand, you can tell us the motorcycle models you need to add, and we will customize the diagnostic instrument for you. At the same time, we also support OEM service, please contact customer service for details or contact us by email: sales@fxtul.com",
    ],
    whychoose: [
      "Leading brand of motorcycle tools",
      "FXTUL official store direct sales, 100% original products",
      "Technical team and factory with ten years of experience in motorcycle maintenance",
      "All products support a 3-year warranty",
      "Support OEM, wholesale and direct sales",
    ],
    note: [
      "Please follow the instructions after M3 connects the motorcycle.",
      "This USB cable is powered by 5V. It is only used when the PC is connected to the product for upgrading. It cannot be connected to a quick charger higher than 5V.",
    ],
  },
];

export default defineEventHandler(async (event) => {
  console.log("event.context.params", event.context.params);
  const { id } = event.context.params;

  //   const { currencyKey } = useRuntimeConfig();

  //   const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const filteredProducts = products.filter((product) => product.id === id);

  return filteredProducts[0];
});
