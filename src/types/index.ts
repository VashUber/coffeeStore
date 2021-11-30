type price = {
  cost: number;
  volume: string;
};

export interface Product {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  type: string;
  prices: Array<price>;
}

export interface CartItem {
  id: string;
  idCart: string;
  title: string;
  imgUrl: string;
  type: string;
  finalPrice: number;
  volume?: string;
}
