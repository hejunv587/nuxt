// types.ts
export type About = {
  name: string;
  desc: string;
};
export type Product = {
  id: number;
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
  about: About[];
  services: string[];
  whychoose: string[];
  note: string[];
};

export type ProductReview = {
  id: number;
  username: string;
  score: number;
  content: string;
  create_time: Date;
  images:  Array<{
    name: string;
    type: string;
    src: string;
    thumbnail: string;
  }>;
};
