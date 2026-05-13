/*
The useContext API is a built-in React Hook that allows you to share data (state) across your entire component tree without having to pass props down manually through every level
. It is the primary solution to a common problem called prop drilling, where data is passed through components that don't even need it just to reach a deeply nested child*/

/*
The Three Steps to Use Context
To implement the Context API in your application, you must follow three main steps:
Create the Context: Use React.createContext() to create a context object. It acts like a "warehouse" or "store" for your data
.
Provide the Context: Wrap your component tree (usually in App.js or a top-level component) with the Provider component and pass the data into the value prop
.
Consume the Context: Inside any nested component, use the useContext hook to "grab" the data from the warehouse
*/

// Example: We might want to store global theme

import { createContext, useContext, type ReactNode, useState } from "react";
import "./start.css";

//creating a context
const ThemeContext = createContext('light');

export default function MyApp(){
    const [theme,setTheme] = useState('dark');
    return (
    <ThemeContext value={theme}>
        <Form/>
        {/* Button for changing the theme */}
        {/* <button onClick={()=> setTheme(theme === 'light' ? 'dark': 'light')}>Toggle Themes</button> */}

        {/* checkbox for changing the theme */}
        <label>
            <input type="checkbox" onChange={()=> setTheme(theme === 'light' ? 'dark':'light')} />
            Toggle Theme
        </label>
    </ThemeContext>
    )
}

function Form(){
    return (
        <Panel title={"Welcome"} >
            <Button>Sign Up</Button>
            <Button>Log In</Button>
        </Panel>
    )
}

function Panel({title,children}:{title:string,children:ReactNode}){
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({children}:{children:ReactNode}){
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return(
        <button className={className} >
            {children}
        </button>
    )
}