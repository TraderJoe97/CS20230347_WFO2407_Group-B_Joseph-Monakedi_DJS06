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