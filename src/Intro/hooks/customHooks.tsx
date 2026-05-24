// import useStatusOnline from './useStatusOnlineHook';
import useInputFieldHook from './inputFieldHook';


export default function StatusBar(){
    // const isOnline = useStatusOnline();
    const FirstName = useInputFieldHook("");
    const lastName = useInputFieldHook("");

    return (
        <>
        <label>
            First Name;
            <input {...FirstName} />
        </label>
        <label>
            Last Name:
            <input {...lastName} />
        </label>
        <p><b>Good Morning, {FirstName.value} {lastName.value}</b></p>
        </>
    )
    // return <h1>{isOnline ? 'Online' : 'Disconnected'}</h1>
}