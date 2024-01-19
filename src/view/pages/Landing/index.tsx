import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import Icon from '../../components/UI/Icon';
import { ICON } from '../../components/UI/Icon/IconType.tsx';

const cx = classNames.bind(styles);

export const Landing: React.FC = () => {
    return (
        <div className={cx(styles.landing)}>
            <Icon icon={ICON.LOGO} width={175} style={{ display: 'block' }} color={'black'} />
            <Icon icon={ICON.CLOSE_SMALL} width={24} style={{ display: 'block' }} color={'black'} />
        </div>
    );
};
