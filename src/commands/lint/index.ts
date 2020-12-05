import { NgCommand } from "../../ng/ng-command";
import { INgRunner } from "../../utils/runner/runner.interface";
import { INgLintArguments } from "./arguments.interface";

export class NgLint extends NgCommand<INgLintArguments> {
  constructor(runner: INgRunner, args?: Partial<INgLintArguments>) {
    super(runner, "lint", args);
  }
}
