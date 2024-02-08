const rollup = require("@rollup/wasm-node");
const terser = require("terser");
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

const rootPath = path.join(__dirname, "../");
const pathToNodeModules = path.join(rootPath, "./node_modules/.bin/");
const configsPath = path.join(rootPath, "./build_configs/");

function createFolder(path) {
    if(fs.existsSync(`${rootPath}/${path}`))
        return;
    fs.mkdirSync(`${rootPath}/${path}`);
}

function createTmpFolder() {
    createFolder("tmp");
}

function cleanTmpFolder() {
    fs.rmSync(`${rootPath}/tmp`, {
        recursive: true
    });
}

function compileTypescript() {

    createFolder("tmp/ts");

    const commandString = `${pathToNodeModules}/tsc -p ${configsPath}/tsconfig.json`
    execSync(commandString);
}

function bundlePlayer() {
    createFolder("tmp/rlp");

    const commandString = `${pathToNodeModules}/rollup -c ${configsPath}/player_rollupconfig.js`;
    execSync(commandString);
}

function movePlayerBuild() {
    const buildFile = fs.readFileSync(`${rootPath}/tmp/rlp/player_bundle.js`, "utf-8");

    fs.writeFileSync(`${rootPath}/scripts/player_tab.js`, buildFile, "utf-8");
}

function bundleModerator() {
    createFolder("tmp/rlp");

    const commandString = `${pathToNodeModules}/rollup -c ${configsPath}/moderator_rollupconfig.js`;
    execSync(commandString);
}

function moveModeratorBuild() {
    const buildFile = fs.readFileSync(`${rootPath}/tmp/rlp/moderator_bundle.js`, "utf-8");

    fs.writeFileSync(`${rootPath}/scripts/moderator_tab.js`, buildFile, "utf-8");
}

function bundleServer() {
    createFolder("tmp/rlp");

    const commandString = `${pathToNodeModules}/rollup -c ${configsPath}/server_rollupconfig.js`;
    execSync(commandString);
}

function moveServerBuild() {
    const buildFile = fs.readFileSync(`${rootPath}/tmp/rlp/server_bundle.js`, "utf-8");

    fs.writeFileSync(`${rootPath}/index.js`, buildFile, "utf-8");
}

module.exports = {
    createTmpFolder,
    cleanTmpFolder,

    compileTypescript,

    bundlePlayer,
    movePlayerBuild,

    bundleModerator,
    moveModeratorBuild,

    bundleServer,
    moveServerBuild
};