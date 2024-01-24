import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { constants } from '../../../../../core/constants';

const cx = classNames.bind(styles);

interface ICatalogItemProps {
    id: number;
    title: string;
    imageId: string;
}
export const CardInCart: React.FC<ICatalogItemProps> = (props) => {
    const name = props.title.length > 30 ? props.title.slice(0, 30).trim() + '...' : props.title;

    return (
        <Link to={`/catalog/${props.id}`}>
            <div className={cx(styles.cartItem)}>
                <img
                    className={styles.image}
                    src={`${constants.imageUrl}${props.imageId}`}
                    alt={props.imageId.toString()}
                />
                <div className={'m-8 flex w-full text-4xl'}>{name}</div>
                <div className={styles.amount}>
                    <div className={styles.countSwitch}>
                        <button className={styles.btnSwitch}>+</button>
                        <button>10</button>
                        <button className={styles.btnSwitch}>-</button>
                    </div>
                </div>
                <div className={styles.delBtn}>
                    <button className={'h-[45px] w-[45px] rounded border-2'}>×</button>
                </div>
            </div>
        </Link>
    );
};
