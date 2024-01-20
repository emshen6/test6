import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductType } from './types.ts';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://213.109.204.240:8000/api/v1/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `product/`,
        }),
        getProductTypes: builder.query<IProductType[], void>({
            query: () => `type_of_product/`,
        }),
        getProductsByType: builder.query<IProduct[], string | number>({
            query: (id) => `product_by_type/${id.toString()}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductTypesQuery, useGetProductsByTypeQuery } = productApi;
