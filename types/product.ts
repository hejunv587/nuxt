// types.ts
export type Product = {
    id: string;
    name: string;
    images: Array<{
      name: string;
      type: string;
      src: string;
      thumbnail: string;
    }>;
    description: string;
    overview: string;
    functions: string[];
    advantages: string[];
    technical_parameters: string[];
    about: string;
    services: string[];
    whychoose: string[];
    note: string[];
  };
  