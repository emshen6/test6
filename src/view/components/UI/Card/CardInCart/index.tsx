import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { constants } from '../../../../../core/constants';

const cx = classNames.bind(styles);

interface ICartItemProps {
    id: number;
    name: string;
    imageId: string;
    amount: number;
}
export const CardInCart: React.FC<ICartItemProps> = (props) => {
    const name = props.name.length > 30 ? props.name.slice(0, 30).trim() + '...' : props.name;

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
                        <button>{props.amount}</button>
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
