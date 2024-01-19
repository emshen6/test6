export interface IImage {
    id: string;
}

export interface IProduct {
    name: string;
    type_of_product_id: number;
    description: string;
    id: number;
    images: IImage[];
}
