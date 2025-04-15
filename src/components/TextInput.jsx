import React from 'react'

export default function TextInput({
        label,
        name,
        value,
        onChange,
        placeholder = '',
        type = 'text',
        className = '',
        ...props
    }) {
        
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label &&
                <label htmlFor={name} className='text-sm font-medium text-gray-700'>
                    {label}
                </label>
            }
            <input
                id = {name}
                name = {name}
                type = {type}
                value = {value}
                onChange = {onChange}
                placeholder = {placeholder}
                className='border border-gray-300 rounded-lg 
                    px-4 py-2 text-sm 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition'
                {...props}
            />
        </div>
    )
}
