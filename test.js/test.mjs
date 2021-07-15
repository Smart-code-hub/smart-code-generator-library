import { series } from "async";
import { exec } from "child_process";
import { cwd } from "process";

await series([
  () =>
    exec(`cd  ${cwd()}/${"test.js/some"}
    
    npx create-react-app ${"test"}
    `, (e, s) => {
    
    }),
 
]);
