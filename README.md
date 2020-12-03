# ng-programmatic

Run Angular CLI commands with a configuration-as-code approach. Primarily designed for use with taskrunners
such as [Gulp](https://gulpjs.com/), but could easily be used anywhere.

# Usage

```ts
// --- Assign args via constructor.
const ngBuild: NgBuild = new NgBuild({ aot: true });

// --- Assign args in bulk, will re-assign by default.
ngBuild.setArgs({
  baseHref: "./",
  configuration: "production",
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
// => `ng build --baseHref=src/ --configuration=development`

// --- Run the command.
ngBuild.run().then(({ success, stdOut, stdErr }) => {});
```
