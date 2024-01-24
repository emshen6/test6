import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { constants } from '../../../../../core/constants';

interface ClientData {
    fio: string;
    phone: string;
    company: string;
    email: string;
    desc: string;
}
export const SendfForm: React.FC<ClientData> = (props) => {
    return (
        <div className={styles.formCont}>
            <div className={styles.temp}>
                <form className={styles.clientForm} action="" method="post">
                    <input className={styles.inp} type="fio" required={true} placeholder={' ФИО*'} />
                    <input className={styles.inp} type="phone" required={true} placeholder={' Номер телефона*'}/>
                    <input className={styles.inp} type="text" required={true} placeholder={' Почта*'}/>
                    <textarea
                        className={'m-[15px] h-[150px] resize-none border-[1px]'}
                        placeholder={' Комментарии к заказу'}
                    />
                    <button className={styles.btnSend}>Отправить</button>
                </form>
            </div>
        </div>
    );
};
