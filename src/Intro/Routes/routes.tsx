import {Link, Route, Routes} from 'react-router-dom';
import MyApp from '../useContext/start';

/*
First we need to install React Router DOM by running: npm install react-router-dom
Then we can create a Routes component that will define our routes. We will use the Route component from react-router-dom to define our routes

2- Second Step is to wrap our App component with the BrowserRouter component in our main.tsx file. This will enable routing in our application. We will import BrowserRouter from react-router-dom and wrap our App component with it.


*/

function MyRoutes(){
    return (
        <div>
            <nav>
                {/*Use Link instead of <a> to prevent page reloads*/}
                <Link to="/">Home</Link>
                <Link to="/about">About </Link>
            </nav>
                {/* Define our routes */}
                <Routes>
                    <Route path="/" element={<MyApp />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
        </div>
    )
}

export default MyRoutes;