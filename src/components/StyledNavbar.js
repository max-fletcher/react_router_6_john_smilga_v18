import {NavLink} from 'react-router-dom'

const Navbar = () => {
   return (
      <>
         {/* There are plenty of other properties for the Link tag as follows. 
            1. 'replace' will erase the last link that was in history. So if you use the 'replace'
               on the 'home' link, then traverse in this order: Book1->Book2->Home, then from home, if you press the back button on the browser, it 
               won't go to Book2. Instead, it will go to Book1.
            2. 'reloadDocument' forces the entire page to refresh, which is not the typical behaviour for react since it only replaces the
               contents/components that needs to be replaced.
         */}

         {/*   <Link to='/'>Home</Link>
               <Link to="/about">About</Link>
               <Link to="/products">Products</Link>
         */}

         {/* Navlink has everything that Link has but it has additional properties like className, style and children. className and style can be used
            to style the navLink. For Link tag to do the same, it has to be wrapped in another tag and the outer tag can be styled not the Link tag 
            itself.
         */}

         {/* An object called isActive is always available to all NavLink tags. You can destructure it and use it to apply custom classes or styles. */}

         {/* 
            IMPORTANT*
            When you apply classes or styles based on isActive object, you HAVE to MAKE SURE it is destructured inside the callback params or you won't
            be able to access it.
         */}
         <nav className='navbar'>
            {/* style={({isActive})=> { return {color: isActive ? 'red' : 'yellow' }}} */}
            {/* Applying 'link' to inactive tags. Also applying active class to tags that are active. */}
            <NavLink to="/" className={(({isActive}) => (isActive ? 'link active' : 'link'))}>Home</NavLink>
            <NavLink to="/about" className={(({isActive}) => (isActive ? 'link active' : 'link'))}>About</NavLink>
            <NavLink to="/products" className={(({isActive}) => (isActive ? 'link active' : 'link'))}>Products</NavLink>
            <NavLink to="/login" className={(({isActive}) => (isActive ? 'link active' : 'link'))}>Login</NavLink>
         </nav>
      </>
   )
}

export default Navbar