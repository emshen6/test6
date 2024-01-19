import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { ru } from './ru';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';

const cx = classNames.bind(styles);

export const Footer = () => {
    return (
        <div className={cx(styles.footer)}>
            <Icon icon={ICON.LOGO} width={175} height={55} color={'white'} />
            <div>{ru.contacts}</div>
            <div>{ru.feedback}</div>
            <div>{ru.pricelist}</div>
            <span className="flex items-stretch justify-between gap-3 px-5">
                <Icon icon={ICON.INSTAGRAM} width={175} height={55} color={'white'} />
                <div className="self-start text-left text-base leading-6 text-white">zavodspetsmash</div>
            </span>
            <span className="mt-4 flex items-stretch justify-between gap-3 px-5">
                <div className="self-start text-left text-base leading-6 text-white">azspm@mail.ru</div>
            </span>
            <span className="mt-4 flex items-stretch justify-between gap-3 px-5">
                <div className="grow self-start whitespace-nowrap text-left text-base leading-6 text-white">
                    (85592)9-90-29, 5-13-35
                </div>
            </span>
        </div>
    );
};
