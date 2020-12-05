import { NgCommand } from "../../ng/ng-command";
import { INgLintArguments } from "./arguments.interface";

export class NgLint extends NgCommand<INgLintArguments> {
  constructor(args?: Partial<INgLintArguments>) {
    super("lint", args);
  }
}
