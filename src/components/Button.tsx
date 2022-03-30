import React from "react";
import classnames from 'classnames';

interface ButtonProps {
    buttonType: 'primary' | 'secondary'
}

const Button = ({ buttonType = 'primary' }: ButtonProps) => {
    const primaryBtn = buttonType == 'primary';
    const secondaryBtn = buttonType == 'secondary';
    return (
        <div>
            <button className={classnames("btn", "border-slate-200", { "bg-indigo-500": primaryBtn },
                { "bg-white": secondaryBtn }, { "hover:bg-indigo-600": primaryBtn }, { "text-white": primaryBtn },
                { "text-black": secondaryBtn }, { "border-slate-200": secondaryBtn },
                { "hover:border-slate-300": secondaryBtn })}>
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="xs:block ml-2">Add view</span>
            </button>
        </div>
    );
};

export default Button;
