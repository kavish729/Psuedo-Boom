import React,{useState} from "react";

const Product = ({product,setData,data}) => {
  // Note: this id should come from api
  const [count, setCount] = useState(1);
  const handleDelete = (id) => {
    let removeItem = data.filter((el) => {
      return el.id !== id;
    })
    setData(removeItem)
  }
  return (
    <div data-cy={`product-${product.id}`} className="productdiv">
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count + 1)}>+</button>
        <span data-cy="product-count">
          {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count - 1)}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>handleDelete(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default Product;
