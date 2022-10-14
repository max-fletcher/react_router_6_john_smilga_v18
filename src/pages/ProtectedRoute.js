import { Navigate } from 'react-router-dom'

// A ProtedtedRoute component acts like a middleware(like in laravel). By default, it receives a 'children' as props that has to be returned 
// if the necessary conditions pass, else, it should use Navigate(from react-router-dom) to route to another component.
const ProtectedRoute = (props) => {
   if(!props.user){
      return <Navigate to="/" />
   }
   return props.children // pass to next component inside protected route
}

// Another way of doing things using prop destructuring
// const ProtectedRoute = ({ user, children }) => {
//    if(!user){
//       return <Navigate to="/" />
//    }
//    return children // pass to next component inside protected route
// }

export default ProtectedRoute