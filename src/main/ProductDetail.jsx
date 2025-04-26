
import { useParams } from 'react-router-dom';

const ProductDetail = ({products}) => {
    const id = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if(!product) return <p>Product not found</p>
  return (
    <div className='productDetail'>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />

    </div>
  )
}

export default ProductDetail
