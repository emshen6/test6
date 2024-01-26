import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';
import { ru } from './i18n/ru';
import { submitForm } from '../../../../../core/api/form';
import { IFormData } from '../../../../../core/api/form';
import { AppDispatch, RootState } from '../../../../../core/store';
import 'react-toastify/dist/ReactToastify.css';
import { ICartProduct } from '../../../../../core/api/cart/types';

export const SendfForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.cart);

    const [formData, setFormData] = useState<IFormData>({
        fio: '',
        phone: '',
        company: '',
        email: '',
        description_by_customer: '',
        request_product: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cartProducts =
            data?.map((x: ICartProduct) => ({
                product_id: x?.id,
                count: x?.amount,
            })) || [];

        setFormData((prevData) => ({
            ...prevData,
            request_product: cartProducts,
        }));

        try {
            toast.promise(dispatch(submitForm(formData)), {
                pending: ru.pendingMsg,
                success: ru.successMsg,
                error: ru.errorMsg,
            });
        } catch (error) {
            toast.error(ru.errorMsg);
        }
    };

    return (
        <div className={styles.formCont}>
            <div className={styles.temp}>
                <form className={styles.clientForm} action="" method="post" onSubmit={handleSubmit}>
                    <input
                        className={styles.inp}
                        type="text"
                        name="fio"
                        value={formData.fio}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.fio}
                    />
                    <input
                        className={styles.inp}
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.phone}
                    />
                    <input
                        className={styles.inp}
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.company}
                    />
                    <input
                        className={styles.inp}
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.email}
                    />
                    <input
                        className={styles.inp}
                        type="text"
                        name="description_by_customer"
                        value={formData.description_by_customer}
                        onChange={handleChange}
                        required={true}
                        placeholder={ru.comment}
                    />
                    <button className={styles.btnSend} type="submit">
                        {ru.send}
                    </button>
                    <ToastContainer position="bottom-right" />
                </form>
            </div>
        </div>
    );
};
