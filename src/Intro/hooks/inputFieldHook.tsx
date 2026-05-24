import {useState,type ChangeEvent} from 'react';

export default function useInputFieldHook<T>(initialValue:T){
    const [value,setValue] = useState<T>(initialValue);

    function changeHandler(e: ChangeEvent<HTMLInputElement>){
        setValue(e.target.value as unknown as T);
    }
    const inputProps = {
        value: value,
        onChange: changeHandler
    }
    return inputProps;

}