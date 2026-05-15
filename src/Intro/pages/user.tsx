import {Link} from 'react-router-dom';

const users:{id:number, name:string}[] = [
  { id: 1, name: 'Suryansh' },
  { id: 2, name: 'Rahul' },
  { id: 3, name: 'Aman' }
];

export default function Users(){
    return (
        <div>
            <h1>Users List</h1>
            {users.map(user =>{
                return (
                <div key={user.id} >
                    <Link to={`/users/${user.id}`} >{user.name}</Link>
                </div>

            
            )
            })}
        </div>
    )
}