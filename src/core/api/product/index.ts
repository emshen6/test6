import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './types.ts';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://213.109.204.240:8000/api/v1/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => `product/`,
        }),
    }),
});

export const { useGetProductsQuery } = productApi;
