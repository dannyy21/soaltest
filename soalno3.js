const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

const result = QUERY.reduce((acc, curr) => {
  const count = INPUT.filter((word) => word === curr).length;
  acc.push(count);
  return acc;
}, []);

console.log(result);