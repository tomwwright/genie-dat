const struct = require("awestruct");
const t = struct.types;

const DebugString = struct([t.skip(2), ["value", t.dynstring(t.uint16)]]);

module.exports = DebugString;
