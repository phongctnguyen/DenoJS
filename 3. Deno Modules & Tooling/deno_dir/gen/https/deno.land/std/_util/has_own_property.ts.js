// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
/**
 * Determines whether an object has a property with the specified name.
 * Avoid calling prototype builtin `hasOwnProperty` for two reasons:
 *
 * 1. `hasOwnProperty` is defined on the object as something else:
 *
 *      const options = {
 *        ending: 'utf8',
 *        hasOwnProperty: 'foo'
 *      };
 *      options.hasOwnProperty('ending') // throws a TypeError
 *
 * 2. The object doesn't inherit from `Object.prototype`:
 *
 *       const options = Object.create(null);
 *       options.ending = 'utf8';
 *       options.hasOwnProperty('ending'); // throws a TypeError
 *
 * @param obj A Object.
 * @param v A property name.
 * @see https://eslint.org/docs/rules/no-prototype-builtins
 */
export function hasOwnProperty(obj, v) {
    if (obj == null) {
        return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, v);
}
//# sourceMappingURL=file:///mnt/d/Udemy%20Learning/Deno/3.%20Deno%20Modules%20&%20Tooling/deno_dir/gen/https/deno.land/std/_util/has_own_property.ts.js.map