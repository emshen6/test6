import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { ru } from './i18n/ru.ts';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

export const Search: React.FC = () => {
    const navigate = useNavigate();
    const handleKeyPress = (event: { target: { value: string }; key: string }) => {
        if (event.key === 'Enter') {
            const searchString = event.target.value.toString().trim();

            if (searchString.length < 1) {
                return;
            }
            navigate('/search/' + searchString);
        }
    };

    return (
        <input
            onKeyPress={handleKeyPress}
            type={'text'}
            placeholder={ru.searchPlaceholder}
            className={cx(styles.input)}
        />
    );
};
