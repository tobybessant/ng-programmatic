import { CommandRunner } from "../utils/runner/ng-runner";
import { NgBuild, NgLint, NgTest, NgServe } from "../commands";
import {
  INgBuildArguments,
  INgLintArguments,
  INgServeArguments,
  INgTestArguments
} from "..";

export class Ng {
  public static Build(args?: Partial<INgBuildArguments>): NgBuild {
    return new NgBuild(new CommandRunner(), args);
  }

  public static Serve(args?: Partial<INgServeArguments>): NgServe {
    return new NgServe(new CommandRunner(), args);
  }

  public static Lint(args?: Partial<INgLintArguments>): NgLint {
    return new NgLint(new CommandRunner(), args);
  }

  public static Test(args?: Partial<INgTestArguments>): NgTest {
    return new NgTest(new CommandRunner(), args);
  }
}
