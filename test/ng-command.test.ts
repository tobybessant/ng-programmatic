import { suite, it } from "mocha";
import { expect } from "chai";
import { IMock, It, Mock, Times } from "typemoq";
import { INgCommand } from "../src/ng/ng-command.interface";
import { NgCommand } from "../src/ng/ng-command";
import { INgRunResult, INgRunner } from "../src/utils/runner/runner.interface";
import { Ng } from "../src";

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

  let runnerMock: IMock<INgRunner>;

  let ngBasecommand: INgCommand<ITestArgs>;

  setup(() => {
    runnerMock = Mock.ofType<INgRunner>();
    ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, "action");
  });

  suite("constructor", () => {
    it("sets the command action", () => {
      [BUILD, LINT].forEach((a) => {
        ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, a);
        const result: string = (ngBasecommand as any).baseCommand;

        expect(result).to.be.eq(a);
      });
    });

    it("sets the initial arguments", () => {
      const args: Partial<ITestArgs> = { argNumber: 3, argBoolean: false };
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, BUILD, args);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(args);
    });

    it("has no initial arguments, if none are provided", () => {
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, BUILD);

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
        argStringArray: ["value1"]
      };

      ngBasecommand.setArgs(initialArgs);

      const newArgs: Partial<ITestArgs> = {
        argString: "different",
        argBoolean: true
      };

      ngBasecommand.setArgs(newArgs);

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(newArgs);
    });

    it("should keep any existing command arguments if merge is set to true", () => {
      const initialArgs: Partial<ITestArgs> = {
        argNumber: 2,
        argBoolean: false
      };
      ngBasecommand.setArgs(initialArgs);

      const newArgs: Partial<ITestArgs> = {
        argString: "different"
      };
      ngBasecommand.setArgs(newArgs, true);

      const expected: Partial<ITestArgs> = {
        argNumber: 2,
        argBoolean: false,
        argString: "different"
      };

      const result: ITestArgs = (ngBasecommand as any).args;

      expect(result).to.be.eql(expected);
    });

    it("should overwrite any existing command arguments if merge is set to true", () => {
      const initialArgs: Partial<ITestArgs> = {
        argNumber: 2,
        argBoolean: false,
        argString: "different"
      };
      ngBasecommand.setArgs(initialArgs);

      const newArgs: Partial<ITestArgs> = {
        argNumber: 100
      };
      ngBasecommand.setArgs(newArgs, true);

      const expected: Partial<ITestArgs> = {
        argNumber: 100,
        argBoolean: false,
        argString: "different"
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
        argStringArray: ["value1", "value2"]
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
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, BUILD);

      const command: string = ngBasecommand.toString();

      expect(command).to.satisfy((c: string) => c.startsWith(NG + " " + BUILD));
    });

    it("should prepend each command argument with `--`", () => {
      const args: ITestArgs = {
        argBoolean: false,
        argNumber: 0,
        argString: "str",
        argStringArray: ["one", "two"]
      };
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, BUILD, args);

      const command: string = ngBasecommand.toString();

      // tslint:disable-next-line: forin
      for (const key in args) {
        expect(command).to.satisfy((c: string) => c.includes(`--${key}`));
      }
    });

    it("argument values should follow the key and a `=`", () => {
      const args: Partial<ITestArgs> = {
        argBoolean: false,
        argNumber: 0,
        argString: "str"
      };
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, BUILD, args);

      const command: string = ngBasecommand.toString();

      const indexable: any = args as any;
      // tslint:disable-next-line: forin
      for (const key in args) {
        expect(command).to.satisfy((c: string) =>
          c.includes(`--${key}=${indexable[key]}`)
        );
      }
    });

    it("array argument values should follow the key in sequence", () => {
      const args: Partial<ITestArgs> = {
        argStringArray: ["value1", "value2"]
      };
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, BUILD, args);

      const command: string = ngBasecommand.toString();

      // tslint:disable-next-line: no-non-null-assertion
      const values: string = args.argStringArray!.join(" ");
      expect(command).to.satisfy((c: string) =>
        c.includes(`--argStringArray ${values}`)
      );
    });
  });

  suite("run", () => {
    it("should pass the built command into the runner", () => {
      ngBasecommand = new NgCommand<ITestArgs>(runnerMock.object, "action", {
        argBoolean: true
      });

      ngBasecommand.run();

      runnerMock.verify(
        (r) => r.run("ng action --argBoolean=true", It.isAny()),
        Times.once()
      );
    });

    it("should return the command result", async () => {
      const runResult: INgRunResult = {
        success: true,
        stdErr: "",
        stdOut: "Done!"
      };

      runnerMock
        .setup((r) => r.run(It.isAnyString(), It.isAny()))
        .returns(async () => runResult);

      const result: INgRunResult = await ngBasecommand.run("ng build");

      expect(result).to.eql(runResult);
    });
  });
});
