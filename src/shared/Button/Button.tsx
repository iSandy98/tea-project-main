import React from 'react';
import Text from './Text';

const Button = ({ type="button", onClick, imageStart, text, imageEnd, height, className, width }) => {
    return (
        <>
            <button type={type} onClick={onClick} className={` bg-[#2B322B]  ${height} ${width} rounded-[10px] items-center flex ${className}`}>
                    <div className={`flex gap-3 items-center ${ imageStart && 'ml-4'} `}> 
                        {
                            imageStart &&  <img className='w-[10px] h-[10px]' src={imageStart} alt="point" />
                        }               

                        <Text text={text} />
                    </div>

                    {
                        imageEnd && <img className='mr-4' src={imageEnd} alt="arrow_up" />
                    }
            </button>
        </>
    );
};

export default Button;