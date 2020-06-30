import React from 'react';
import Product from './Product';
import productsData from '../vschoolProducts';

function App(){
  const productComponents = productsData.map(item => <Product 
    key = {item.id}
    product = {item} />)
  // Instead of using individual properties, you can map the product itelf. 
  // However, remember to change props.properties to props.products.properties in Product function
  // const productComponents = productsData.map(item => {
  //   return(
  //     <Product 
  //       key = {item.id}
  //       name = {item.name}  
  //     />
  //   )
  // })
  return(
    <div>
      {productComponents} 
    </div>
  );
}

export default App;