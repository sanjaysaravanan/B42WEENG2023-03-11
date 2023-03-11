var arr = [1, 2, 3];

var arr2 = [4, 5, 6, ...arr];

console.log(arr2);

var obj = { name: 'B42', strenght: 9 };
var obj2 = { age: '40', class: '12', ...obj };

// breaking down / unpacking 

var [a, , c] = arr2; // var [a, , c] = [4, 5, 6]

console.log(a, c);

var { name, age } = obj2; // var { name, age } = { age: '40', class: '12', name: 'B42', strenght: 9 };
console.log(age);
console.log(name);


var sampleFunc = (a, b) => {
  console.log(a);
  console.log(b);
}

sampleFunc(...[999, 20, 90, 70]); // sampleFunc(999, 20, 90, 70);

var sampleObj = (a, ...b) => {
  console.log(a);
  console.log(b);
}

sampleObj(...[100, 200, 4000]); // 100, [200, 4000]

sampleObj([100, 200, 4000]); // [100, 200, 4000], []
