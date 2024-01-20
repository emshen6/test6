import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { ContentWrapper } from '../ContentWrapper';

const cx = classNames.bind(styles);

interface IBenefitsProps {
    titles: string[];
    descriptions: string[];
}

export const Benefits: React.FC<IBenefitsProps> = (props) => {
    return (
        <div>
            <ContentWrapper>
                <div className="grid grid-cols-2 grid-rows-2">
                    <div>
                        <div className="max-w-full rounded-[5px] bg-lightGray">
                            <div className="text-3xl font-medium leading-10 text-black">{props.titles[0]}</div>
                            <div className="mt-28 text-justify text-xl leading-7 text-black">
                                {props.descriptions[0]}
                            </div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="max-h-full rounded-[5px] bg-lightGray">
                                <div>{props.titles[1]}</div>
                                <div>{props.descriptions[1]}</div>
                            </div>
                            <div className="max-h-full rounded-[5px] bg-lightGray">
                                <div>{props.titles[2]}</div>
                                <div>{props.descriptions[2]}</div>
                            </div>
                        </div>
                    </div>

                    <div className="row-span-2 rounded-[5px] bg-lightGray">
                        <div>{props.titles[3]}</div>
                        <div>{props.descriptions[3]}</div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};
