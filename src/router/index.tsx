import { createBrowserRouter } from 'react-router-dom';
import { Landing } from '../../../../Desktop/factory/src/view/pages/Landing';
import { Catalog } from '../../../../Desktop/factory/src/view/pages/Catalog';
import { ProductDetails } from '../../../../Desktop/factory/src/view/pages/ProductDetails';
import {Cart} from "../../../../Desktop/factory/src/view/pages/Cart";
import {ResultOfSearch} from "../../../../Desktop/factory/src/view/pages/SearchResult";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/catalog',
        element: <Catalog />,
    },
    {
        path: '/catalog/*',
        element: <ProductDetails />,
    },
    {
        path: '/cart',
        element: <Cart />,
    },

    {
        path: '/search/*',
        element: <ResultOfSearch />,
    },
]);
