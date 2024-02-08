const nodeResolve = require("@rollup/plugin-node-resolve");
const path = require("path");

const rootPath = path.join(__dirname, "../");

module.exports = {
    input: `${rootPath}/tmp/ts/client/player/main.js`,
    output: {
        format: "module",
        file: `${rootPath}/tmp/rlp/player_bundle.js`
    },
    plugins: [ nodeResolve() ]
};