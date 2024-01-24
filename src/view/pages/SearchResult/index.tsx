import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { ru } from './i18n/ru.ts';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Title } from '../../components/UI/Text/Title';
import { Header } from '../../components/Header';
import {useGetProductsByTypeQuery, useGetSearchProductsQuery} from '../../../core/api/product';
import styles from '../../components/CatalogPart/index.module.scss';
import { CatalogItem } from '../../components/UI/Card/CatalogItem';
import { Footer } from '../../components/Footer';
import { IProduct } from '../../../core/api/product/types.ts';
import {Menu} from "../../components/Menu";

const cx = classNames.bind(styles);

export const ResultOfSearch = () => {
    const [curTypeId, setCurTypeId] = useState<number | null>(null);
    const { data: typesData } = useGetProductsByTypeQuery(curTypeId ?? 0);

    const location = useLocation();
    const navigate = useNavigate();
    const searchString = location.pathname.split('/')[2];
    const { data: productData } = useGetSearchProductsQuery(searchString);

    return (
        <>
            <Header />
            <ContentWrapper>
                <div className={'mb-28 mt-5 grid grid-cols-12 gap-14'}>
                    <div className={'col-span-full'}>
                        <Title name={ru.title} />
                        <div className={'flex flex-wrap gap-6'}>
                            {productData?.map((x: IProduct) => (
                                <CatalogItem key={x?.id} id={x?.id} title={x?.name} imageId={x?.images[0]?.id} />
                            ))}
                        </div>
                        <div className={cx(styles.scrollable, styles.hideScrollBar)}>
                            <div className={cx(styles.cardsWrapper)}>
                                {/*
                                {typesData?.slice(0, 7)?.map((product) => (*/}
                                {/*    <Link key={product.id} to={`/catalog/${product.id}`}>*/}
                                {/*        <CatalogItem*/}
                                {/*            id={product.id}*/}
                                {/*            key={product?.id}*/}
                                {/*            title={product?.name}*/}
                                {/*            imageId={product?.images[0]?.id}*/}
                                {/*        />*/}
                                {/*    </Link>*/}
                                {/* ))}
                                 */}
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
            <Footer />
        </>
    );
};
