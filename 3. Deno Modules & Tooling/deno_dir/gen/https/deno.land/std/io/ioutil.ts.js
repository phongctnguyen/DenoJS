import { assert } from "../_util/assert.ts";
const DEFAULT_BUFFER_SIZE = 32 * 1024;
/** copy N size at the most.
 *  If read size is lesser than N, then returns nread
 * */
export async function copyN(r, dest, size) {
    let bytesRead = 0;
    let buf = new Uint8Array(DEFAULT_BUFFER_SIZE);
    while (bytesRead < size) {
        if (size - bytesRead < DEFAULT_BUFFER_SIZE) {
            buf = new Uint8Array(size - bytesRead);
        }
        const result = await r.read(buf);
        const nread = result ?? 0;
        bytesRead += nread;
        if (nread > 0) {
            let n = 0;
            while (n < nread) {
                n += await dest.write(buf.slice(n, nread));
            }
            assert(n === nread, "could not write");
        }
        if (result === null) {
            break;
        }
    }
    return bytesRead;
}
/** Read big endian 16bit short from BufReader */
export async function readShort(buf) {
    const high = await buf.readByte();
    if (high === null)
        return null;
    const low = await buf.readByte();
    if (low === null)
        throw new Deno.errors.UnexpectedEof();
    return (high << 8) | low;
}
/** Read big endian 32bit integer from BufReader */
export async function readInt(buf) {
    const high = await readShort(buf);
    if (high === null)
        return null;
    const low = await readShort(buf);
    if (low === null)
        throw new Deno.errors.UnexpectedEof();
    return (high << 16) | low;
}
const MAX_SAFE_INTEGER = BigInt(Number.MAX_SAFE_INTEGER);
/** Read big endian 64bit long from BufReader */
export async function readLong(buf) {
    const high = await readInt(buf);
    if (high === null)
        return null;
    const low = await readInt(buf);
    if (low === null)
        throw new Deno.errors.UnexpectedEof();
    const big = (BigInt(high) << 32n) | BigInt(low);
    // We probably should provide a similar API that returns BigInt values.
    if (big > MAX_SAFE_INTEGER) {
        throw new RangeError("Long value too big to be represented as a JavaScript number.");
    }
    return Number(big);
}
/** Slice number into 64bit big endian byte array */
export function sliceLongToBytes(d, dest = new Array(8)) {
    let big = BigInt(d);
    for (let i = 0; i < 8; i++) {
        dest[7 - i] = Number(big & 0xffn);
        big >>= 8n;
    }
    return dest;
}
//# sourceMappingURL=file:///mnt/d/Udemy%20Learning/Deno/3.%20Deno%20Modules%20&%20Tooling/deno_dir/gen/https/deno.land/std/io/ioutil.ts.js.map