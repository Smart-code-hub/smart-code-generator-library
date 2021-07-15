const fss = require("fs-extra");
const { UpdateEntities, ZipAFolder } = require("smart-code-core-utility");
const { GenerateReactProject } = require("./Handlers/FrontEnd/ReactHandler");
const { GenerateNodeApiProject } = require("./Handlers/Backend/NodeHandler");
const { copyFolder } = require("smart-code-core-utility");
const { series } = require("async");
const { exec } = require("child_process");

const GenerateProject = async (
  metaData,
  uid,
  entities,
  processFiles,
  resourceUrl,
  dirNamme
) => {
  // Update Entities First`
  UpdateEntities(entities);
  if (!processFiles) return { Message: "Done" };
  //Attach Project related folders in root directory
  const Appdir = dirNamme + `/${resourceUrl}`; // main app directory

  if (metaData.serverLessType == "ReactFirebase") {
    const reactFolder = `${resourceUrl}/webStarter`;
    const reactdir = dirNamme + `/${reactFolder}`;
    await exec(`cd  ${reactdir}
        
                npx create-react-app ${reactFolder}

                cd ${reactFolder}

                npm i axios bootstrap font-awesome react-bootstrap react-redux redux redux-saga react-router-dom redux-localstorage-simple voca firebase
    `);
    await GenerateReactProject(
      reactdir,
      entities,
      processFiles,
      true,
      metaData.serverLessType
    );
    const zip = await GenerateZipOfResourses(Appdir, resourceUrl);
    return { zip };
  }

  if (metaData.frontEndType == "React") {
    const reactFolder = `${resourceUrl}/webStarter`;
    const reactdir = dirNamme + `/${reactFolder}`;
    await copyFolder(
      __dirname + "/StaticApps/FrontEnd/React/reactstarter",
      reactdir
    );
    await GenerateReactProject(reactdir, entities, processFiles);
  }

  if (metaData.backEndType == "Node") {
    const apiFolder = `${resourceUrl}/apiStarter`;
    const apidir = dirNamme + `/${apiFolder}`;
    await copyFolder(
      __dirname + "/StaticApps/Backend/Node/ExpressjsStarter",
      apidir
    );
    await GenerateNodeApiProject(apidir, entities, processFiles);
  }
  const zip = await GenerateZipOfResourses(Appdir, resourceUrl);
  return { zip };
};
async function GenerateZipOfResourses(dir, folder) {
  await ZipAFolder.zip(dir, `${dir}.zip`);
  fss.removeSync(dir);
  return `${folder}.zip`;
}

module.exports = { GenerateProject };
