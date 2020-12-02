import { Ng } from "../../ng/ng";
import { INgBuildArguments } from "./arguments.interface";

export class NgBuild extends Ng<INgBuildArguments> {
  constructor(args?: Partial<INgBuildArguments>) {
    super("build", args);
  }
}
