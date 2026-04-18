import React from "react";
import "./card.css"

type CardProps = React.PropsWithChildren<{
    // React.ReactNode excepts any values in children props (JSX, string, number,null)
    children: React.ReactNode;
}>;

export default function Card({children}: CardProps){
    return (
        <div className="card" >
            {children}
        </div>
    )
}