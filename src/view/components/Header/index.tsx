import React from 'react';
import classNames from 'classnames';
import { ru } from './i18n/ru.ts';
import styles from './index.module.scss';
import { ICON } from '../UI/Icon/IconType.tsx';
import Icon from '../UI/Icon';
import { ContentWrapper } from '../ContentWrapper';

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
    return (
        <ContentWrapper>
            <input type={'text'} placeholder={ru.searchPlaceholder} className={cx(styles.input)} />
            <Icon icon={ICON.LOGO} width={175} height={55} color={'black'} />
        </ContentWrapper>
    );
};
