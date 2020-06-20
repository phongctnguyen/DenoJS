// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import * as path from "../path/mod.ts";
/**
 * Copy bytes from one Uint8Array to another.  Bytes from `src` which don't fit
 * into `dst` will not be copied.
 *
 * @param src Source byte array
 * @param dst Destination byte array
 * @param off Offset into `dst` at which to begin writing values from `src`.
 * @return number of bytes copied
 */
export function copyBytes(src, dst, off = 0) {
    off = Math.max(0, Math.min(off, dst.byteLength));
    const dstBytesAvailable = dst.byteLength - off;
    if (src.byteLength > dstBytesAvailable) {
        src = src.subarray(0, dstBytesAvailable);
    }
    dst.set(src, off);
    return src.byteLength;
}
export function charCode(s) {
    return s.charCodeAt(0);
}
/** Create or open a temporal file at specified directory with prefix and
 *  postfix
 * */
export async function tempFile(dir, opts = { prefix: "", postfix: "" }) {
    const r = Math.floor(Math.random() * 1000000);
    const filepath = path.resolve(`${dir}/${opts.prefix || ""}${r}${opts.postfix || ""}`);
    await Deno.mkdir(path.dirname(filepath), { recursive: true });
    const file = await Deno.open(filepath, {
        create: true,
        read: true,
        write: true,
        append: true,
    });
    return { file, filepath };
}
//# sourceMappingURL=file:///mnt/d/Udemy%20Learning/Deno/3.%20Deno%20Modules%20&%20Tooling/deno_dir/gen/https/deno.land/std/io/util.ts.js.map