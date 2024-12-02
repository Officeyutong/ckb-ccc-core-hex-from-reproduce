const { hexFrom } = require("@ckb-ccc/core");


console.log(hexFrom([]))
console.log(hexFrom(new Uint8Array([])))

let a = BigInt(hexFrom([]))
