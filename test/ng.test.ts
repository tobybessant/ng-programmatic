import { suite, it } from "mocha";
import { expect } from "chai";
import { Ng, NgBuild, NgLint } from "../src";

suite("Ng", () => {
  suite("Build", () => {
    it("returns an instance of NgBuild", () => {
      const ngBuild = Ng.Build();

      expect(ngBuild).instanceof(NgBuild);
    });
  });

  suite("Lint", () => {
    it("returns an instance of NgLint", () => {
      const ngLint = Ng.Lint();

      expect(ngLint).instanceof(NgLint);
    });
  });
});
