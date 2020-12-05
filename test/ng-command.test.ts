import { suite, it } from "mocha";
import { expect } from "chai";
import { Ng, NgBuild, NgLint } from "../src";
import { INgCommand } from "../src/ng/ng-command.interface";
import { NgCommand } from "../src/ng/ng-command";

interface ITestArgs {
  argString: string;
  argNumber: number;
  argStringArray: string[];
  argBoolean: boolean;
}

suite("NgCommand", () => {
  const EMPTY_OBJECT: object = {};
  const NG: string = "ng";

  const BUILD: string = "build";
  const LINT: string = "lint";
  let ngBasecommand: INgCommand<ITestArgs>;

  beforeEach(() => {
    ngBasecommand = new NgCommand<ITestArgs>("action");
  });

  suite("constructor", () => {
    it("sets the command action", () => {
      [BUILD, LINT].forEach((a) => {
        ngBasecommand = new NgCommand<ITestArgs>(a);
        const result: string = (ngBasecommand as any).action;

        expect(result).to.be.eq(a);
      });
    });

    it("sets the initial arguments", () => {
      const args: Partial<ITestArgs> = { argNumber: 3, argBoolean: false };
      ngBasecommand = new NgCommand<ITestArgs>(BUILD, args);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(args);
    });

    it("has no initial arguments, if none are provided", () => {
      ngBasecommand = new NgCommand<ITestArgs>(BUILD);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(EMPTY_OBJECT);
    });
  });

  suite("setArgs", () => {
    it("should set the command arguments", () => {
      const args: Partial<ITestArgs> = { argString: "hello", argBoolean: true };
      ngBasecommand.setArgs(args);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(args);
    });

    it("should clear any existing command arguments before setting", () => {
      const initialArgs: Partial<ITestArgs> = {
        argNumber: 23,
        argBoolean: true,
        argString: "str",
        argStringArray: ["value1"],
      };

      ngBasecommand.setArgs(initialArgs);

      const newArgs: Partial<ITestArgs> = {
        argString: "different",
        argBoolean: true,
      };

      ngBasecommand.setArgs(newArgs);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(newArgs);
    });

    it("should keep any existing command arguments if merge is set to true", () => {
      const initialArgs: Partial<ITestArgs> = {
        argNumber: 2,
        argBoolean: false,
      };
      ngBasecommand.setArgs(initialArgs);

      const newArgs: Partial<ITestArgs> = {
        argString: "different",
      };
      ngBasecommand.setArgs(newArgs, true);

      const expected: Partial<ITestArgs> = {
        argNumber: 2,
        argBoolean: false,
        argString: "different",
      };

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(expected);
    });

    it("should overwrite any existing command arguments if merge is set to true", () => {
      const initialArgs: Partial<ITestArgs> = {
        argNumber: 2,
        argBoolean: false,
        argString: "different",
      };
      ngBasecommand.setArgs(initialArgs);

      const newArgs: Partial<ITestArgs> = {
        argNumber: 100,
      };
      ngBasecommand.setArgs(newArgs, true);

      const expected: Partial<ITestArgs> = {
        argNumber: 100,
        argBoolean: false,
        argString: "different",
      };

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(expected);
    });
  });

  suite("setArg", () => {
    it("should set a single command argument", () => {
      ngBasecommand.setArg("argBoolean", false);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql({ argBoolean: false });
    });

    it("should be able to set multiple command arguments by chaining method calls", () => {
      ngBasecommand
        .setArg("argBoolean", false)
        .setArg("argNumber", 110)
        .setArg("argStringArray", ["value1", "value2"]);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql({
        argBoolean: false,
        argNumber: 110,
        argStringArray: ["value1", "value2"],
      });
    });

    it("will always overwrite the existing value", () => {
      ngBasecommand.setArg("argBoolean", false);
      ngBasecommand.setArg("argBoolean", true);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql({ argBoolean: true });
    });
  });

  suite("toString", () => {
    it("should should start with the root `ng` command", () => {
      const command: string = ngBasecommand.toString();

      expect(command).to.satisfy((c: string) => c.startsWith(NG));
    });

    it("should have the `action` parameter immediately after the root `ng` command", () => {
      ngBasecommand = new NgCommand<ITestArgs>(BUILD);

      const command: string = ngBasecommand.toString();

      expect(command).to.satisfy((c: string) => c.startsWith(NG + " " + BUILD));
    });

    it("should prepend each command argument with `--`", () => {
      ngBasecommand = new NgCommand<ITestArgs>(BUILD);
      ngBasecommand.setArgs({ argBoolean: false });

      const command: string = ngBasecommand.toString();
      expect(command).to.satisfy((c: string) => c.includes("--argBoolean"));
    });
  });
});
