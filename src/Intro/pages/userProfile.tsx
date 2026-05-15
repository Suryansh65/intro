import {useParams} from 'react-router-dom';

const users:{id:number, name:string}[] = [
    {id:1, name:'Suryansh'},
    {id:2, name:'Rahul'},
    {id:3, name:'Aman'}
];

export default function UserProfile(){
    const {id} = useParams();
    const user = users.find(user => user.id === Number(id));
    // check for user 
    if(!user){
        return <h2>User Not Found</h2>
    }
    return (
        <div>
            <h1>{user.name} Profile</h1>
        </div>
    )
}