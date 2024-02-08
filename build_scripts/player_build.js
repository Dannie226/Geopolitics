const { createTmpFolder, compileTypescript, bundlePlayer, movePlayerBuild, cleanTmpFolder } = require("./build_functions");

createTmpFolder();

compileTypescript();

bundlePlayer();
movePlayerBuild();

cleanTmpFolder();