import {Outlet} from 'react-router-dom'

const Home = () => {
   return (
      <>
         <h2> Products </h2>
         <Outlet /> {/* Yield the contents of any page that are nested inside SharedLayout */}
      </>
   );
};

export default Home;
