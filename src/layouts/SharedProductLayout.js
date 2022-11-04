import {Outlet} from 'react-router-dom'

const SharedProductLayout = () => {
   return (
      <>
         <h2> Products </h2>
         <Outlet /> {/* Yield the contents of any page that are nested inside SharedLayout */}
      </>
   );
};

export default SharedProductLayout;
