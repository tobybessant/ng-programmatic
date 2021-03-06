import { NgCommand } from "../../ng/ng-command";
import { INgRunner } from "../../utils/runner/ng-runner.interface";
import { INgLintArguments } from "./arguments.interface";

export class NgLint extends NgCommand<INgLintArguments> {
  constructor(
    runner: INgRunner<INgLintArguments>,
    args?: Partial<INgLintArguments>
  ) {
    super(runner, "lint", args);
  }
}
