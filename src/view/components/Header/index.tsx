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
            <div className="flex justify-between">
                <Icon icon={ICON.LOGO} width={175} height={55} color={'black'} />
                <div className="m-5 gap-10">
                    <input type={'text'} placeholder={ru.searchPlaceholder} className={cx(styles.input)} />
                    <div className="gap-5">
                        <button className={cx(styles.smallButton)}>
                            <Icon icon={ICON.CATALOG} width={30} height={30} color={'black'} />
                        </button>
                        <button className={cx(styles.smallButton)}>
                            <Icon icon={ICON.CART} width={30} height={30} color={'black'} />
                        </button>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};
