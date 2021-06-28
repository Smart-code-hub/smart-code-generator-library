const {
  GenerateApiRelatedFolders,
} = require("smart-code-core-utility");

const {
  createApiResources,
} = require("smart-javascript-api-generator-library");
 const GenerateNodeApiProject = async (
  apidir,
  entities,
  processFiles
) => {

  GenerateApiRelatedFolders(apidir);
  await createApiResources(entities, processFiles, apidir);
};

module.exports = {
    GenerateNodeApiProject
}