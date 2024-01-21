/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  array=[]
  total=[]
  for(let i=0;i<transactions.length;i++){
    let current=transactions[i]
    if(!(total[current.category])){
      total[current.category]=current.price
    }else{
      total[current.category]+=current.price
    }
  }
  for(const category in total){
    array.push({category:category,totalSpent:total[category]})
  }
  return array
}

console.log(calculateTotalSpentByCategory(
  [
    { itemName: "Item1", category: "Groceries", price: 20, timestamp: 1234567890 },
    { itemName: "Item2", category: "Electronics", price: 150, timestamp: 1234567891 },
    { itemName: "Item3", category: "Groceries", price: 30, timestamp: 1234567892 },
    { itemName: "Item4", category: "Electronics", price: 80, timestamp: 1234567893 },
    { itemName: "Item5", category: "Clothing", price: 50, timestamp: 1234567894 },
  ]
))
module.exports = calculateTotalSpentByCategory;
