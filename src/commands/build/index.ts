import { NgCommand } from "../../ng/ng-command";
import { INgRunner } from "../../utils/runner/ng-runner.interface";
import { INgBuildArguments } from "./arguments.interface";

export class NgBuild extends NgCommand<INgBuildArguments> {
  constructor(
    runner: INgRunner<INgBuildArguments>,
    args?: Partial<INgBuildArguments>
  ) {
    super(runner, "build", args);
  }
}
