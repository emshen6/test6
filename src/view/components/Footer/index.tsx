import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { ru } from './ru';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';
import { ContentWrapper } from '../ContentWrapper/index.tsx';

const cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <div className={cx(styles.footer)}>
            <ContentWrapper>
                <Icon icon={ICON.LOGO} width={175} height={55} color={'white'} />
                <div>{ru.contacts}</div>
                <div>{ru.feedback}</div>
                <div>{ru.pricelist}</div>
                <span>
                    <Icon icon={ICON.INSTAGRAM} width={24} height={24} color={'white'} />
                    <div>zavodspetsmash</div>
                </span>
                <span>
                    <div>azspm@mail.ru</div>
                </span>
                <span>
                    <div>(85592)9-90-29, 5-13-35</div>
                </span>
            </ContentWrapper>
        </div>
    );
};
