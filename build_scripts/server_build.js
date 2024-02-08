const { createTmpFolder, compileTypescript, bundleServer, moveServerBuild, cleanTmpFolder } = require("./build_functions");

createTmpFolder();

compileTypescript();

bundleServer();
moveServerBuild();

cleanTmpFolder();