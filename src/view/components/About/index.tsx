import React from 'react';
import classNames from 'classnames';
import { ru } from './i18n/ru.ts';
import styles from './index.module.scss';
import { ContentWrapper } from '../ContentWrapper';

const cx = classNames.bind(styles);

export const About: React.FC = () => {
    return (
        <ContentWrapper>
            <div className={cx(styles.wrapper)}>
                <div className={cx(styles.title)}>{ru.title}</div>
                <div className={cx(styles.description)}>{ru.description}</div>
            </div>
        </ContentWrapper>
    );
};
