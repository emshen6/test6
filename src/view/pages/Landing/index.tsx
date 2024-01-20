import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';
import { Footer } from '../../components/Footer/index.tsx';
import { useGetProductsQuery } from '../../../core/api/product';
import { FactoryImage } from '../../../assets/image/FactoryImage';
import { Header } from '../../components/Header';
import { Benefits } from '../../components/Benefits/index.tsx';
import { About } from '../../components/About';
import { CatalogPart } from '../../components/CatalogPart';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    const { data } = useGetProductsQuery();
    const titles = ['a', 'b', 'c', 'd'];
    const descriptions = ['a', 'b', 'c', 'd'];

    console.log(data);
    return (
        <div className={cx(styles.landing)}>
            <Header />
            <div className={'container block'}></div>
            <Benefits titles={titles} descriptions={descriptions} />
            <About />
            <CatalogPart />
            <Footer />
        </div>
    );
};
