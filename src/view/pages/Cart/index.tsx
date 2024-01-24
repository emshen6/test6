// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { ru } from './i18n/ru.ts';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Title } from '../../components/UI/Text/Title';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CardInCart } from '../../components/UI/Card/CardInCart';
import { SendfForm } from '../../components/UI/Card/SendForm';
import { store } from '../../../core/store/index.ts';
import { ICartProduct } from '../../../core/api/cart/types.ts';

export const Cart: React.FC = () => {
    const data = store.getState().cart;

    return (
        <>
            <Header />
            <ContentWrapper>
                <div className={'mb-36 mt-5 grid grid-cols-12 gap-14'}>
                    <Title name={ru.title} />
                </div>
                <div className={'flex flex-wrap gap-7'}>
                    {data?.map((x: ICartProduct) => (
                        <CardInCart key={x?.id} id={x?.id} title={x?.title} imageId={x?.imageId.toString()} />
                    ))}
                </div>
            </ContentWrapper>
            <SendfForm fio={''} phone={''} company={''} email={''} desc={''} />

            <Footer />
        </>
    );
};
