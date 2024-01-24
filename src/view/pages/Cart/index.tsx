// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { ru } from './i18n/ru.ts';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Title } from '../../components/UI/Text/Title';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { CardInCart } from '../../components/UI/Card/CardInCart';
import { SendfForm } from '../../components/UI/Card/SendForm';

export const Cart: React.FC = () => {
    return (
        <>
            <Header />
            <ContentWrapper>
                <div className={'mb-36 mt-5 grid grid-cols-12 gap-14'}>
                    <Title name={ru.title} />
                </div>
                <div className="flex flex-wrap gap-7">
                    <CardInCart id={10} title={'123dsasdkasdf;lddasdl;k'} imageId={'17'} />
                    <CardInCart id={11} title={''} imageId={'16'} />
                    <CardInCart id={10} title={''} imageId={'17'} />
                </div>
            </ContentWrapper>
            <SendfForm fio={''} phone={''} company={''} email={''} desc={''} />

            <Footer />
        </>
    );
};
