// --- Assign args via constructor.
const ngBuild: NgBuild = new NgBuild({ aot: true });

// --- Assign args in bulk, will re-assign by default.
ngBuild.setArgs({
  baseHref: "./",
  configuration: "production",
});

// --- Assign args in bulk, with optional merge parameter.
ngBuild.setArgs({ aot: false }, true);

// --- Assign args individually.
ngBuild
  .setArg("aot", false)
  .setArg("baseHref", "src/")
  .setArg("configuration", "development");
