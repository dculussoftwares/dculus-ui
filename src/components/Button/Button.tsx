import classnames from 'classnames';
import React from "react";

interface ButtonProps {
    buttonType: 'primary' | 'secondary',
    icon?: JSX.Element,
    name: string
}

const Button = ({ buttonType = 'primary', icon, name }: ButtonProps) => {
    const primaryBtn = buttonType == 'primary';
    const secondaryBtn = buttonType == 'secondary';
    return (
        <div>

            <button className={classnames('btn', { 'btn-primary': primaryBtn }, { "btn-secondary": secondaryBtn })}>
                {icon}
                <span className={classnames("xs:block", { "ml-1": icon })}> {name}</span>
            </button>
            <button className='btn-red'>Ommm</button>
        </div>
    );
};

export default Button;
