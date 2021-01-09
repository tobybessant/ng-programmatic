# [ng-programmatic](https://www.npmjs.com/package/ng-programmatic)

![Azure DevOps builds](https://img.shields.io/azure-devops/build/tobybessant/25ef4e67-35f0-45f9-a969-e4f0fadecea8/1?label=Build)
![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/tobybessant/ng-programmatic/1?label=Coverage)
![npm](https://img.shields.io/npm/v/ng-programmatic?label=NPM)

Fully typed programmatic interface for configuring and running Angular CLI commands. Primarily designed for use with taskrunners
such as [Gulp](https://gulpjs.com/), but could easily be used anywhere.

Currently supports:

- `ng build`
- `ng lint`
- `ng test`
- `ng serve`

# Install

```bash
$ npm i ng-programmatic
```

# Usage

```ts
import { Ng, NgBuild } from "ng-programmatic";

// --- Assign args via constructor.
const ngBuild: NgBuild = Ng.Build({ aot: true });

// --- Assign args in bulk, will clear any existing args by default.
ngBuild.setArgs({
  baseHref: "./",
  configuration: "production"
});

// --- Assign args in bulk, with optional merge parameter to keep any existing arguments set.
ngBuild.setArgs({ aot: false }, true);

// --- Assign args individually.
ngBuild
  .setArg("aot", false)
  .setArg("baseHref", "src/")
  .setArg("configuration", "development");

// --- Get current command string.
console.log(ngBuild.toString());
// => `ng build --aot=false --baseHref=src/ --configuration=development`

// --- Run the command.
ngBuild.run().then((result) => {});
```
