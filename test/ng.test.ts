import { suite, it } from "mocha";
import { expect } from "chai";
import { Ng, NgBuild, NgLint, NgTest, NgServe } from "../src";

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

  suite("Test", () => {
    it("returns an instance of NgTest", () => {
      const ngLint = Ng.Test();

      expect(ngLint).instanceof(NgTest);
    });
  });

  suite("Serve", () => {
    it("returns an instance of NgServe", () => {
      const ngLint = Ng.Serve();

      expect(ngLint).instanceof(NgServe);
    });
  });
});
