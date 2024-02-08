
const nodeResolve = require("@rollup/plugin-node-resolve");
const path = require("path");

const rootPath = path.join(__dirname, "../");

module.exports = {
    input: `${rootPath}/tmp/ts/client/moderator/main.js`,
    output: {
        format: "module",
        file: `${rootPath}/tmp/rlp/moderator_bundle.js`
    },
    plugins: [ nodeResolve() ]
};