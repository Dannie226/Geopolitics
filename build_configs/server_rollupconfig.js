const nodeResolve = require("@rollup/plugin-node-resolve");
const path = require("path");

const rootPath = path.join(__dirname, "../");

module.exports = {
    input: `${rootPath}/tmp/ts/server/main.js`,
    output: {
        format: "cjs",
        file: `${rootPath}/tmp/rlp/server_bundle.js`
    },
    plugins: [ nodeResolve() ]
};