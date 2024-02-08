const { createTmpFolder, compileTypescript, bundlePlayer, movePlayerBuild, bundleModerator, moveModeratorBuild, cleanTmpFolder } = require("./build_functions");

createTmpFolder();

compileTypescript();

bundlePlayer();
bundleModerator();

movePlayerBuild();
moveModeratorBuild();

cleanTmpFolder();