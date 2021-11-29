type price = {
  cost: string;
  volume: string;
};

interface Product {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  price?: number;
}

export interface Cheesecake extends Product {}

export interface Coffee extends Product {
  prices: Array<price>;
}
