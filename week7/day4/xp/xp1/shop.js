const products = require('./products');


function findProductByName(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

  if (product) {
    console.log(`Product Details:
    Name: ${product.name}
    Price: $${product.price}
    Category: ${product.category}`);
  } else {
    console.log(`Product with name "${productName}" not found.`);
  }
}

findProductByName('Laptop');     
findProductByName('Shoes');      
findProductByName('Smartphone'); 
findProductByName('Tablet');     
