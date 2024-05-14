import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { LoadingIcon } from './Icons';
import type { Product } from './dataService';
import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.
// You should add types to Product component and when is needed.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.✅
// Once all the data is successfully loaded, hide the loading icon.✅
// Render each product object as a <Product/> component, passing in the necessary props.✅
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product ✅
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.✅
//  - The total shown for each product should be calculated based on the ordered quantity and the price ✅
//  - The total in the order summary should be calculated ✅
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Product = ( { productProp, quantityProp = 0, totalProp = 0, setTotal } : {productProp: Product, quantityProp: number, totalProp:number, setTotal: Function} ) => {

  const [quantity, setQuantity] = useState(quantityProp);
  const [product, setProduct] = useState(productProp)
  const [localTotal, setLocalTotal] = useState(0);

  const addProduct = () => {
    if(product.availableCount >= quantity){
      setQuantity(quantity + 1);
    }
  }

  const removeProduct = () => {
    if(quantity > 0){
      setQuantity(quantity - 1);
    }
  }

  useEffect(()=> {
    setLocalTotal(quantity * product.price);
    setTotal((quantity * product.price) + totalProp);
  }, [quantity, product.price, totalProp, setTotal])

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.availableCount}</td>
      <td>${product.price}</td>
      <td>{quantity}</td>   
      <td>${localTotal}</td>
      <td>
        <button className={styles.actionButton} onClick={addProduct} disabled={quantity >= product.availableCount ? true : false}>+</button>
        <button className={styles.actionButton} onClick={removeProduct} disabled={quantity <= 0 ? true : false}>-</button>
      </td>
    </tr>    
  );
}


const Checkout = () => {

  const [products, setProducts] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  // const [discount, setDiscount] = useState(0)
  
  useEffect(() =>{
    getProducts().then((products) => {
      setProducts(products)
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    });
    
    return () => {
      setProducts([]);
    }
  }, [])

  // useEffect(() => {
  //   if(total > 1000){
  //     calculateDiscount()
  //   }
  // },[total, calculateDiscount])
  
 


  return (
    <div>
      <header className={styles.header}>        
        <h1>Electro World</h1>        
      </header>
      <main>
        {isLoading && <LoadingIcon /> }      
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              product => <Product productProp={product} key={product.id} quantityProp={0} totalProp={total} setTotal={setTotal}/>
            )}
          </tbody>
        </table>
        <h2>Order summary</h2>
       {/* {discount > 0 && <p>Discount: ${discount}</p>} */}
        <p>Total: ${total}</p>       
      </main>
    </div>
  );
};

export default Checkout;