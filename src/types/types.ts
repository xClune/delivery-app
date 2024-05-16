export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number}[]
};

export type OrderType = {
    id: string;
    userEmail: string;
    price: number;
    products: CartItemType[];
    status: string;
    createdAt: Date;
    intent_id?: string;
}

export type CartItemType = {
    id: string;
    title: string;
    img?: string
    price: number;
    optionsTitle?: string;
    quantity: number;
};

export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
  };

// set up action types for cart
export type ActionTypes = {
    addToCart: (item: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
}