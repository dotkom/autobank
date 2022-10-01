import React from 'react'

type textProps = {
    textType?: 'title' | 'subtitle' | 'body' | 'md' | 'sm'
    children: JSX.Element | JSX.Element[] | string
    className?: string
}

const Text = ({ textType, children, className }: textProps) => {
    const textTypeClass = () => {
        switch (textType) {
            case 'title':
                return 'text-4xl font-light'
            case 'subtitle':
                return 'text-2xl'
            case 'body':
                return 'text-lg'
            case 'md':
                return 'text-md'
            case 'sm':
                return 'text-sm'
            default:
                return 'text-md'
        }
    }
    return <p className={`${textTypeClass()} ${className}`}>{children}</p> //include global styles to the className here
}

export default Text
