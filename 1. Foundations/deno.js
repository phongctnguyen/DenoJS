const food = Deno.args[0];

if (food === 'love') {
  console.log('Hello Deno');
} else {
  console.log("Bye Deno")
}

console.log(Deno.args[0]);
console.log(Deno.args[1]);

setTimeout(() => {
  console.table(Deno.metrics());
}, 1000);

console.table(Deno.metrics());