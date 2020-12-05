import { INgBuildArguments, INgLintArguments } from "..";
import { NgBuild, NgLint } from "../commands";

export class Ng {
  public static Build(args?: Partial<INgBuildArguments>): NgBuild {
    return new NgBuild(args);
  }

  public static Lint(args?: Partial<INgLintArguments>): NgLint {
    return new NgLint(args);
  }
}
