import { useState } from 'react';
import { ru } from './i18n/ru.ts';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Menu } from '../../components/Menu';
import { Title } from '../../components/UI/Text/Title';
import { Header } from '../../components/Header';
import { useGetProductsByTypeQuery, useGetProductsQuery } from '../../../core/api/product';
import { CatalogFullItem } from '../../components/CatalogFullItem/index.tsx';

export const ProductDetails = () => {
    const [curTypeId, setCurTypeId] = useState<number | null>(null);
    const { data } = useGetProductsByTypeQuery(curTypeId ?? 0);

    const [selectedId, setSelectedId] = useState<number | null>(null);
    const { product } = useGetProductsQuery(selectedId ?? 0);

    return (
        <>
            <Header />
            <ContentWrapper>
                <div className={'mt-5 grid grid-cols-12 gap-14'}>
                    <div className={'col-span-3 mt-20'}>
                        <Menu curTypeId={curTypeId} setCurTypeId={setCurTypeId} />
                    </div>
                    <div className={'col-span-9'}>
                        <Title name={ru.title} />
                        <div className={'flex flex-wrap gap-7'}>
                            <CatalogFullItem
                                productName={product.name}
                                description={product.description}
                                img={product.images[0].id}
                            />
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </>
    );
};
