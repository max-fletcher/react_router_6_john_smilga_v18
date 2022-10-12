import {Link, useParams} from 'react-router-dom'
import products from '../data';

const SingleProduct = () => {

  // using the useParams hook to get capture the route params.
  // IMPORTANT*
  // The route params name defined in the path='' within 'Route' tag has to match the name we are using in destructured variable here.
  // In App.js, the route is <Route path="products/:productId" element={<SingleProduct />} /> so the destructured variable name has to be productId.
  const { productId } = useParams();
  console.log(productId);
  const product = products.find((product) => { return product.id === productId })
  console.log(product);

  return (
    <>
      <section className='section product'>
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <Link to='/products'>Back To Products</Link>
      </section>
    </>
  );
};

export default SingleProduct;
