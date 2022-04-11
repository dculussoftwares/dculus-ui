import classnames from 'classnames';
import React from "react";

interface ButtonProps {
    buttonType: 'primary' | 'secondary',
    icon?: JSX.Element,
    name:string
}

const Button = ({ buttonType = 'primary', icon,name }: ButtonProps) => {
    const primaryBtn = buttonType == 'primary';
    const secondaryBtn = buttonType == 'secondary';
    return (
        <div>
            <button className={classnames("btn", 'primary', { "bg-indigo-500": primaryBtn },
                { "bg-white": secondaryBtn }, { "hover:bg-indigo-600": primaryBtn }, { "text-white": primaryBtn },
                { "text-black": secondaryBtn }, { "border-slate-200": secondaryBtn },
                { "hover:border-slate-300": secondaryBtn })}>

                {icon}
                <span className={classnames("xs:block", { "ml-2": icon })}>Add view</span>
            </button>

            <button className={classnames('btn',{'btn-primary':primaryBtn})}>
                {icon}
                <span className={classnames("xs:block", { "ml-2": icon })}> {name}</span>
            </button>

        </div>
    );
};

export default Button;
