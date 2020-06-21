import { join } from "https://deno.land/std/path/mod.ts";

const readFile = async () => {
  const path = join('files', 'hello.txt');
  const data = await Deno.readTextFileSync(path)
  console.log(data);
}

await readFile();

await Deno.writeTextFileSync("test.txt", "Hello world\n");