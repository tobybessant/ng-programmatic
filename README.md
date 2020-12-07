# [ng-programmatic](https://www.npmjs.com/package/ng-programmatic)

Fully typed programmatic interface for configuring and running Angular CLI commands. Primarily designed for use with taskrunners
such as [Gulp](https://gulpjs.com/), but could easily be used anywhere.

Currently supports:

- `ng build`
- `ng lint`

# Install

```bash
$ npm i ng-programmatic
```

# Usage

```ts
import { Ng } from "ng-programmatic";

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
