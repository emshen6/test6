import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { Search } from './Search';
import { ICON } from '../UI/Icon/IconType.tsx';
import Icon from '../UI/Icon';
import { ContentWrapper } from '../ContentWrapper';

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
    return (
        <ContentWrapper>
            <div className="flex justify-between py-6">
                <Link to={`/`}>
                    <Icon icon={ICON.LOGO} width={175} height={55} color={'black'} />
                </Link>
                <div className="grid grid-flow-col items-center gap-10">
                    <Search />
                    <div className="grid grid-flow-col gap-5">
                        <Link to={'/catalog'}>
                            <div className={cx(styles.small_button)}>
                                <Icon icon={ICON.CATALOG} width={30} height={30} color={'black'} />
                            </div>
                        </Link>
                        <Link to={'/cart'}>
                            <div className={cx(styles.smallButton)}>
                                <Icon icon={ICON.CART} width={30} height={30} color={'black'} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </ContentWrapper>
    );
};
