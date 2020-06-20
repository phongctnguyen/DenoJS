// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { assertEquals } from "../testing/asserts.ts";
/** Example of how to do basic tests */
Deno.test("t1", function () {
    assertEquals("hello", "hello");
});
Deno.test("t2", function () {
    assertEquals("world", "world");
});
/** A more complicated test that runs a subprocess. */
Deno.test("catSmoke", async function () {
    const p = Deno.run({
        cmd: [
            Deno.execPath(),
            "run",
            "--allow-read",
            "examples/cat.ts",
            "README.md",
        ],
        stdout: "null",
        stderr: "null",
    });
    const s = await p.status();
    assertEquals(s.code, 0);
    p.close();
});
//# sourceMappingURL=file:///mnt/d/Udemy%20Learning/Deno/3.%20Deno%20Modules%20&%20Tooling/deno_dir/gen/https/deno.land/std/examples/test.ts.js.map