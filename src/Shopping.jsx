import { useEffect, useState } from 'react';
import Item from './Item';
import './Shopping.css'; // Import the CSS file

function Shopping() {
  const [products, setProducts] = useState([]);

  const defaultProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Shoe Model ${i + 1}`,
    category: 'Sneakers',
    price: (30 + i * 2).toFixed(2),
    status: i % 3 === 0 ? 'Limited' : i % 5 === 0 ? 'Out of Stock' : 'In Stock',
    image: `/products/Picture${i + 1}.png`,
    imName: `Picture${i + 1}`
  }));

  useEffect(() => {
    setProducts(defaultProducts);
  }, []);

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div className="shopping-container">
      <h2 className="shopping-title">Our Exclusive Shoe Collection</h2>
      <div className="shopping-grid">
        {products.map((product) => (
          <div key={product.id} className="shopping-card">
            <Item
              name={product.name}
              category={product.category}
              price={`$${product.price}`}
              status={product.status}
              image={product.image}
              imName={product.imName}
            />
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
