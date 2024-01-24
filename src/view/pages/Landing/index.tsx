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
    return (
        <div className={cx(styles.landing)}>
            <div className={styles.wrapper}>
                <div>
                    <Header />
                    <FactoryImage />
                </div>
                <Benefits />
                <About />
                <CatalogPart />
                <Footer />
            </div>
        </div>
    );
};
