console.log('Start');

// Microtask queue example with Promises
Promise.resolve().then(() => {
  console.log('Microtask 1');
  return Promise.resolve('Microtask 1.1');
}).then((value) => {
  console.log(value); // Output: Microtask 1.1
});

Promise.resolve().then(() => {
  console.log('Microtask 2');
});

console.log('End');

// Macrotask with setTimeout
setTimeout(() => {
  console.log('Timeout macrotask');
}, 0);
