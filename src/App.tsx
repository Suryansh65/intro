import MyButton from "./Intro/intro";
// No need to give .tsx extension -> react will handle automatically
import Hooks from "./Intro/hooks";

function App(){
  return (
    <div>
      <MyButton />
      <MyButton />
      /*Both button will preserve their state independently and do not affect each other states.*/
      <MyProfile />
      <ListItems />
      <Hooks />
    </div>
  )
}

export default App;

// export -> Named export , allow multiple components to export also use {} while importing the components, can also rename while importing, must use exact name of the component while importing

// import {MyButton as btn} from './Intro/intro'

// export default -> Default export -> only one allowed, can be import with any Name
// import Anyname from './intro';

// JSX -> Javascript XML : It let's you write HTML like syntax inside JS. Behind the scene a tool called Babel compiles it into regular JS before the browser runs it.

/*
Key JSX rule to Remember:
1. Use className instead of class
<div className="container">

2. Self-close tags that have no children
<MyButton />
<img src="photo.png" />

3. Use curly braces {} for JavaScript expressions
<h1>{userName}</h1>

4. Must return a single parent element 
return (
  <div> {one parent wrap everything}
  <h1>Hello</h1>
  <p>world</p>
  </div>
)

*/

const user = {
  name: 'John Doe',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imagSize: 90,
}

export function MyProfile(){
  return(
    <div>
      <h1>{user.name}</h1>
      <img 
      src={user.imageUrl}
      className="avatar"
      alt={'Photo of' + user.name}
      style={{
        width: user.imagSize,
        height:user.imagSize
      }}
      
      />
    </div>
  )
}

/*using for loop to display items */
const products = [
  {title: 'Cabbage',id:1},
  {title: 'Garlic',id:2},
  {title: 'Apple',id:3},
]

export function ListItems(){
  const listItems = products.map(product =>
    <li key={product.id} >
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  )
}