import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { INgRunner as ICommandRunner } from "./ng-runner.interface";
import { INgRunResult } from "./ng-run-result.interface";

export class CommandRunner implements ICommandRunner {
  public run(command: string): Promise<INgRunResult>;
  public run(command: string, location?: string): Promise<INgRunResult>;

  public run(command: string, location?: any): Promise<INgRunResult | Error> {
    return new Promise((resolve, reject) => {
      const ngProcess: ChildProcessWithoutNullStreams = spawn(command, [], {
        cwd: location
      });

      ngProcess.stdout.on("data", function (data) {
        console.log(data.toString());
      });

      ngProcess.stderr.on("data", function (data) {
        console.log(data.toString());
      });

      ngProcess.on("error", (err) => reject(err));
      ngProcess.on("exit", () => resolve({ success: true }));
    });
  }
}
