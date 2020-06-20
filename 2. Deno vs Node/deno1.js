import "https://deno.land/std/examples/chat/server.ts"

export function denode(input) {
  if (input.toLowerCase() === 'node') {
    return input.split("").sort().join("");
  }
  return input
}