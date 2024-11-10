// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// logs each name and each corresponding province to the console
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`)
});

// Creates a new array of provices in all uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// creates a new array containing the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// alphabetically sorts the provinces array
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// filters out provinces containing "Cape" logs the number of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

// creates a boolean array using map and some to determine if a name contains the letter 'S'
const containsS = names.map(name => name.split('').some(char => char === 'S'));
console.log(containsS);

// maps the names array into an object mapping names to their respective provinces
const nameProvinceMap = names.reduce((map, name, index) => {
  map[name] = provinces[index];
  return map;
}, {});
console.log(nameProvinceMap);

//Advanced excercises
console.log(
  // product names
  products.map(product => product.product),'\n',

  // filtres out products with names longer than 5 characters
  products.map(product => product.product).filter(product => product.length <= 5),'\n',

  // filters out products without prices
  // converts string prices to numbers
  // calculates the total price using reduce
  products.filter(product => product.price !== '').map(product => parseInt(product.price)).reduce((total, price) => total + price, 0),'\n',

  // Concatenate product names into a single string
  products.map(product => product.product).reduce((acc, product) => acc + product, ''),'\n',

  // Identifies the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
  products.reduce((acc, product) => {
    const price = parseInt(product.price);
    if ( price > acc.highest) {
      acc.highest = price  
    }
    if ( price < acc.lowest) {
      acc.lowest = price
    }
    return acc;
  },
  {highest: 0, lowest: Infinity}),'\n',

  // creates product object with keys 'name' and 'cost', maintaining their original values using object.entries and reduce
  products.map(product => 
  Object.entries(product).reduce((acc, [key, value]) => {
    if (key === 'product') {
      acc['name'] = value; // Rename 'product' to 'name'
    } else if (key === 'price') {
      acc['cost'] = value; // Rename 'price' to 'cost'
    }
    return acc;
  }, {})),'\n',
);