import type { ReactNode } from 'react';
import { useContext } from 'react';
import {ThemeContext} from "./useContext/themeContext";


type ButtonProps = {
    handleClick: ()=> void;
    children: ReactNode
}

type ToolbarProps = {
    onPlayMovie: ()=> void;
    onUploadImage: ()=> void;
}

export default function Button({handleClick, children}:ButtonProps){
    const theme = useContext(ThemeContext);
    /*useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().*/
    return (
        <button onClick={handleClick} className={`btn-${theme}`} >
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