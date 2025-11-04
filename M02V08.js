//*Grouping & Aggregating Data


const sales = [
  {
    item: "Laptop",
    category: "Electronics",
    quantity: 2,
    price: 75000
  },
  {
    item: "Shirt",
    category: "Clothing",
    quantity: 5,
    price: 1200
  },
  {
    item: "Book",
    category: "Stationery",
    quantity: 3,
    price: 350
  }
];

//TODO initiate empty object
//TODO init obj category
//TODO calculate the revenue

const totalSalesByCategory = sales.reduce((table, sale) => {
  console.log(table, ":", sale);
  const { category, quantity, price } = sale;

 
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0
    };
  }

  
  table[category].totalRevenue += quantity * price;
  table[category].itemCount += quantity;

  return table;
}, {});

console.log(totalSalesByCategory);