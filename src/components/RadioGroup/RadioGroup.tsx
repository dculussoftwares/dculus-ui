import React from 'react'


interface IRadioProps {
    options: string[],
    defaultValue: string,
}

const RadioGroup = ({ options, defaultValue }: IRadioProps) => {
    const onChangeValue = (event) => {
        console.log(event.target.value);
    };
    return (
        <div className="radio-group" onChange={onChangeValue}>
            {options && options.map((option, index) => {
                return <label key={index} className="radio-child">
                    <input className='radio-child-input mr-2 mt-2 mb-2' type="radio" value={option} name="radio" />{option}</label>
            })}
        </div>
    )
}

export default RadioGroup