import { NgCommand } from "../../ng/ng-command";
import { INgBuildArguments } from "./arguments.interface";

export class NgBuild extends NgCommand<INgBuildArguments> {
  constructor(args?: Partial<INgBuildArguments>) {
    super("build", args);
  }
}
