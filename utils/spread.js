var arr = [1, 2, 3];

var arr2 = [4, 5, 6, ...arr];

console.log(arr2);

var obj = { name: 'B42', strenght: 9 };
export var obj2 = { age: '40', class: '12', ...obj }

console.log(obj2);

const { age, ...restAllObj2 } = obj2;

console.log(age);
console.log(restAllObj2);


// array
function sampleFunc(a, ...restAll) { // rest
  console.log('#############')
  console.log(a);
  console.log(restAll);
  console.log('#############')
}

// sampleFunc(arr2); // single arguement --> sampleFunc([4, 5, 6, 1, 2, 3]);

// sampleFunc(...arr2); // multiple arguments --> sampleFunc(4, 5, 6, 1, 2, 3);


function displayInfo(info) {
  console.log('############');
  console.log(info);
  console.log('##############')
}

export function displayData({ name, ...restAllProps }) {
  console.log('############');
  console.log(name);
  console.log(restAllProps);
  console.log('##############')
}


// displayInfo(...obj2); ** wrong ** // no spreading obj in calling/invoking function

displayInfo(obj2); // spreading with {  } same displayInfo(obj2);

displayData(obj2);
