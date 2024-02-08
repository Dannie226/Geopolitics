const { createTmpFolder, compileTypescript, bundleModerator, moveModeratorBuild, cleanTmpFolder } = require("./build_functions");

createTmpFolder();

compileTypescript();

bundleModerator();
moveModeratorBuild();

cleanTmpFolder();