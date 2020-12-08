import { NgCommand } from "../../ng/ng-command";
import { INgRunner } from "../../utils/runner/ng-runner.interface";
import { INgServeArguments } from "./arguments.interface";

export class NgServe extends NgCommand<INgServeArguments> {
  constructor(
    runner: INgRunner<INgServeArguments>,
    args?: Partial<INgServeArguments>
  ) {
    super(runner, "serve", args);
  }
}
