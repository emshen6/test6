import React from 'react';
import styles from './index.module.scss';


export const SendfForm: React.FC = () => {
    return (
        <div className={styles.formCont}>
            <div className={styles.temp}>
                <form className={styles.clientForm} action="" method="post">
                    <input className={styles.inp} type="fio" required={true} placeholder={' ФИО*'} />
                    <input className={styles.inp} type="phone" required={true} placeholder={' Номер телефона*'} />
                    <input className={styles.inp} type="text" required={true} placeholder={' Почта*'} />
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
