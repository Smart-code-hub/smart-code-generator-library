const {
  GeneratereactRelatedFolders,
} = require("smart-code-core-utility");
const {
  createWebReactResourses,
} = require("smart-javascript-react-generator-library");

const GenerateReactProject = async (
  reactdir,
  entities,
  processFiles,
  isServerLess = false,
  serverLessType = null
) => {
  GeneratereactRelatedFolders(reactdir + "/src");
  await createWebReactResourses(entities, processFiles,
     reactdir + "/src",isServerLess,serverLessType);
};
module.exports = {
  GenerateReactProject,
};
