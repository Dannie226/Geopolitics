const { createTmpFolder, compileTypescript, bundlePlayer, movePlayerBuild, bundleModerator, moveModeratorBuild, bundleServer, moveServerBuild, cleanTmpFolder } = require("./build_functions");

createTmpFolder();

compileTypescript();

bundlePlayer();
bundleModerator();
bundleServer();

movePlayerBuild();
moveModeratorBuild();
moveServerBuild();

cleanTmpFolder();