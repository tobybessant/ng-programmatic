import { Ng } from "../../ng/ng";
import { INgLintArguments } from "./arguments.interface";

export class NgLint extends Ng<INgLintArguments> {
  constructor(args?: Partial<INgLintArguments>) {
    super("lint", args);
  }
}
