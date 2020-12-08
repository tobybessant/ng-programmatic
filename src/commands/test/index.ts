import { NgCommand } from "../../ng/ng-command";
import { INgRunner } from "../../utils/runner/ng-runner.interface";
import { INgTestArguments } from "./arguments.interface";

export class NgTest extends NgCommand<INgTestArguments> {
  constructor(runner: INgRunner, args?: Partial<INgTestArguments>) {
    super(runner, "test", args);
  }
}
