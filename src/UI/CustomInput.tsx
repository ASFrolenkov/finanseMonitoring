import React from 'react'

interface ICustomInputProps {
    type: string,
    placeholder?: string,
    className?: string,
    required?: boolean,
    onChange?: any,
    value?: string,
    children?: JSX.Element | ''
}

const CustomInput = ({type, placeholder, className, required, onChange, value, children}: ICustomInputProps) => {

    const interiorPlaceholder = type === 'text' ? 'Введите логин' : 'Введите пароль'

    return (
        <div>
            <input 
                type={type} 
                placeholder={placeholder ? placeholder : interiorPlaceholder}
                className={className}
                required={required}
                value={value}
                onChange={onChange}/>  

            <div className='p-2 h-10'>
                {children}
            </div>   
        </div>
        
    )
}

export default CustomInput