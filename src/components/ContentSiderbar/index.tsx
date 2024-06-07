import { User } from '@/interface/User'
import React, { ReactNode } from 'react'

export const ContentSiderbar = ({ key, text, children }: { key: string, text:string, children: any }) => {
    return (
        <div key={`sub${key}`} >
            <span>{text}</span>
            {children && children.map((child:{key:Number,label:ReactNode}, childIndex:Number) => (
                <div key={`sub${key}-child${childIndex}`}>
                    {child.label}
                </div>
            ))}
        </div>
    )
}

