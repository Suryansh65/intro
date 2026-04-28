// PURE Function: Pure Function are those that gives same output on same set of inupts, no matter how many times you call it.
/*
    In React all react components are PURE, we should not change variable, objects or anything while rendering component.

*/
/* This is a PURE method as every time if num = 2 then it will always return 4*/
const double = (num:number)=>{
    return 2 * num;
}

/*This will give output different way with same inputs which can cause bugs so prevent this, use props instead of variables*/
// let guest = 0;
// function Cup(){
//     guest = guest + 1;
//     return <h2>Tea cup guest #{guest}</h2>
// }

//⚠️ Check for Type safety -> How to give type for single props
function Cup({guest}: {guest:number}){
    return <h2>Tea cup guest #{guest}</h2>
}

export default function PureAndImpure(){
    return (
        <>
            {double(2)}
            <Cup  guest={1} />
            <Cup  guest={2} />
            <Cup  guest={3} />
        </>
    )
}