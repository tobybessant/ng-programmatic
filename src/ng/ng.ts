import { CommandRunner } from "../utils/runner/ng-runner";
import { INgBuildArguments, INgLintArguments } from "..";
import { NgBuild, NgLint, NgTest } from "../commands";
import { NgServe } from "../commands/serve";

export class Ng {
  public static Build(args?: Partial<INgBuildArguments>): NgBuild {
    return new NgBuild(new CommandRunner(), args);
  }

  public static Serve(args?: Partial<INgLintArguments>): NgServe {
    return new NgServe(new CommandRunner(), args);
  }

  public static Lint(args?: Partial<INgLintArguments>): NgLint {
    return new NgLint(new CommandRunner(), args);
  }

  public static Test(args?: Partial<INgLintArguments>): NgTest {
    return new NgTest(new CommandRunner(), args);
  }
}
