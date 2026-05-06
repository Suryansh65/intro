import type { ReactNode } from 'react';


type ButtonProps = {
    handleClick: ()=> void;
    children: ReactNode
}

type ToolbarProps = {
    onPlayMovie: ()=> void;
    onUploadImage: ()=> void;
}

export default function Button({handleClick, children}:ButtonProps){
    return (
        <button onClick={handleClick} >
            {children}
        </button>
    );
}

// Using props in event handler
export function AlertButton({message,children}: {message:string,children:ReactNode}){
    return (
        <button onClick={()=>alert(message)}>
            {children}
        </button>
    )
}

/*
PITFALL: Do not use {handleClick())} it will automatically call that function on each render, so always pass the function as prop: {handleClick}
or use arrow function: {() => alert('Hello world')}
*/

/*Passing eventHandler as a propts*/

export function Toolbar({onPlayMovie, onUploadImage}:ToolbarProps){
    return (
        <div>
            <Button handleClick={onPlayMovie} >
                Play Movie
            </Button>

            <Button handleClick={onUploadImage} >
                Upload Image
            </Button>
        </div>
    )
}