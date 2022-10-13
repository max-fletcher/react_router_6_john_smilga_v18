import {Routes, Route} from 'react-router-dom'
import SharedLayout from './layouts/SharedLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import ProtectedRoute from './pages/ProtectedRoute' // importing a protected route component to wrap dashboard
import { useState } from 'react'

function App() {

  const [user, setUser] = useState()

  return <>
    {/* Including any elements inside BrowserRouter but outside router will cause the elements to render on every page */}
    {/* <nav>Navbar</nav> */}
    {/* about, product and error is nested inside '/' path. Entering any one of these(say '/about') will cause the contents of the component
        (contents inside <About />) to be rendered inside the <Home /> component where the <Outlet /> is defined */}
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />} />
      {/* <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} /> */}
        <Route path="about" element={<About />} />

        {/* WITHOUT NESTING */}
        {/* <Route path="products" element={<Products />} /> */}
        {/* Dynamic route. Will use the useParams hook from react-router-dom inside the 'SingleProduct' component */}
        {/* <Route path="products/:productId" element={<SingleProduct />} /> */}

        {/* WITH NESTING */}
        <Route path="products">
          <Route index element={<Products />} />
          {/* Dynamic route. Will use the useParams hook from react-router-dom inside the 'SingleProduct' component */}
          <Route path=":productId" element={<SingleProduct />} />
        </Route>

        {/* Sending 'setUser' into Login and 'user' to into Dashboard as props */}
        <Route path="login" element={<Login setUser={setUser} />} />
        {/* Protecting the dashboard route with the ProtectedRoute component */}
          <Route path="dashboard" 
                element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
          } />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    {/* <footer>Footer</footer> */}
  </>
}

export default App;
