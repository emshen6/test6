import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { ru } from './i18n/ru.ts';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';
import { ContentWrapper } from '../ContentWrapper/index.tsx';

const cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <div className={cx(styles.footer)}>
            <ContentWrapper>
                <div className="grid grid-cols-2 gap-96">
                    <div className="ml-5 mt-10">
                        <Icon icon={ICON.LOGO} width={175} height={55} color={'white'} />
                    </div>
                    <div className="gap-50 mb-20 mt-10 grid grid-cols-2 text-white">
                        <div>
                            <div className={cx(styles.footerLabel)}>{ru.contacts}</div>
                            <div className={cx(styles.footerLabel)}>{ru.feedback}</div>
                            <div className={cx(styles.footerLabel)}>{ru.pricelist}</div>
                        </div>
                        <div>
                            <div className={cx(styles.footerLabel)}>
                                <Icon icon={ICON.INSTAGRAM} width={24} height={24} color={'white'} />
                                <div>{ru.instagram}</div>
                            </div>
                            <span>
                                <div className={cx(styles.footerLabel)}>
                                    <Icon icon={ICON.ENVELOPE} width={24} height={24} color={'white'} />
                                    {ru.mail}
                                </div>
                            </span>
                            <span>
                                <div className={cx(styles.footerLabel)}>
                                    <Icon icon={ICON.PHONE} width={24} height={24} color={'white'} />
                                    {ru.phone}
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};
