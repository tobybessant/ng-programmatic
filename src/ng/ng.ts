import { CommandRunner } from "../utils/runner/runner";
import { INgBuildArguments, INgLintArguments } from "..";
import { NgBuild, NgLint } from "../commands";

export class Ng {
  public static Build(args?: Partial<INgBuildArguments>): NgBuild {
    return new NgBuild(new CommandRunner(), args);
  }

  public static Lint(args?: Partial<INgLintArguments>): NgLint {
    return new NgLint(new CommandRunner(), args);
  }
}
