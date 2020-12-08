import { Ng, NgBuild } from "./src";

const ngBuild: NgBuild = Ng.Build();

ngBuild.setArgs({
  aot: true,
  allowedCommonJsDependencies: ["value1", "value2"]
});

ngBuild
  .run()
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
