import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { useGetProductTypesQuery } from '../../../core/api/product';

const cx = classNames.bind(styles);

interface IMenuProps {
    curTypeId: number | null;
    setCurTypeId: React.Dispatch<React.SetStateAction<number | null>>;
}
export const Menu: React.FC<IMenuProps> = (props) => {
    const { data } = useGetProductTypesQuery();

    useEffect(() => {
        if (data) {
            props.setCurTypeId(data[0].id);
        }
    }, [data]);

    return (
        <div className={'grid gap-7'}>
            {data?.map((x) => (
                <div
                    key={x.id}
                    onClick={() => props.setCurTypeId(x.id)}
                    className={cx(props.curTypeId === x.id ? styles.textUnderlined : styles.text)}
                >
                    {x.name}
                </div>
            ))}
        </div>
    );
};
