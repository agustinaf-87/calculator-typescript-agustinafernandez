# calculator-ts-agustina-fernandez
This library allows you to perfom simple math calculations such as:
addition, substraction, multiplication and division
## Installation 
`npm install calculator-ts-agustina-fernandez`

## Usage
`import {Calculator} from "calculator-ts-agustina-fernandez"`

`let calculator = New Calculator(); `



***
# How to Create and Publish an NPM Package
## Basic SetUp
*Create a Npm user     
*Install Node    
*Initialize a Git Repository    

## Steps
    
* Init your Package:    
`npm init -y` 
* Create a .gitignore file, and ignore node modules and lib folder:   
`node_modules`    
`/lib`    
* Add Typescript as a DevDependency    
`npm install --save-dev typescript`    
* Create a tsconfig.json file:    
`{`    
  `"compilerOptions":{`    
    `"target": "es5",`    
    `"module": "commonjs",`    
    `"declaration": true,`    
    `"outDir": "./lib",`    
   ` "strict": true`    
  `},`    
  `"include": ["src"],`    
  `"exclude": ["node_modules", "**/__tests__/*"]`    
`}`    
* Add your code:    
Example:     
`export const Greeter = (name: string) => "Hello ${name}"; `    
* In the package.json file add the following:    
`"build" : "tsc"`    
*  Run the build command:    
`npm run build`
* Whitelist the lib folder in the package.json:    
`“files”: [“lib/**/*”]`   
* Add a tslint.json file:    
`{`    
  `"extends": ["tslint:recommended",`      `"tslint-config-prettier"]`
`}`     
* Add a .prettierrc file:     
`{`    
  `"printWidth": 120,`    
  `"trailingComma": "all",`    
  `"singleQuote": true`    
`}`    
* Add the lint- and format scripts to package.json:    
`"format": "prettier --write \"src/**/*.ts\" \"src/**/*.js\"",`   
`"lint": "tslint -p tsconfig.json"` 
* Run npm run lint and npm run format:   
`npm run lint`    
`npm run format`    
* Add npm scripts:     
`"prepare" : "npm run build"`    
`"prepublishOnly" : "npm test && npm run lint" `       
`"preversion" : "npm run lint"`    
`"version" : "npm run format && git add -A src"`    
`"postversion" : "git push && git push --tags"`    
* Make sure your package.json have the following:    
`"main": "lib/index.js",`    
`"types": "lib/index.d.ts",`    
* Commit and push your code to git 
* Publish your package to NPM:     
 `npm login`       
 `npm publish`    
 * View your package on NPM!


