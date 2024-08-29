const products = [
      {id:1, name:'Xiami phone',price:100000},
      {id:2, name:'redmi10 phone',price:100000},
      {id:3, name:'iphone ',price:100000},
      {id:4, name:'samsung',price:100000},
      {id:5, name:'lenovo phone',price:100000},
      {id:6, name:'ipad',price:100000},
      {id:7, name:'itel',price:100000}
      
  ];
  
  function matchedProducts(products, search){
    const matched=[];
    for(const product of products)
    {
      if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
      }
    }
    return matched;
  }
  
  const result = matchedProducts(products,'phone');
  console.log(result);