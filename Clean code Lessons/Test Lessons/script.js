function lCat(cat) {
    return cat.startsWith("S") || cat.startsWith("J") ;
    
  }
  
  const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
  
  const filtered = cats.filter(lCat);
  
  console.log(filtered);
  // [ "Leopard", "Lion" ]