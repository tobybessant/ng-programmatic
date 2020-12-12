import { ChildProcess } from "child_process";
import * as spawn from "cross-spawn";
import { INgRunner as ICommandRunner } from "./ng-runner.interface";
import { INgRunResult } from "./ng-run-result.interface";

export class CommandRunner<T> implements ICommandRunner<T> {
  public run(command: string): Promise<INgRunResult>;
  public run(command: string, location?: any): Promise<INgRunResult>;

  public run(command: string, location?: any): Promise<INgRunResult | Error> {
    return new Promise((resolve, reject) => {
      const ngProcess: ChildProcess = spawn(command, {
        stdio: "inherit",
        shell: true,
        cwd: location
      });

      ngProcess.stdout?.on("data", (data) => {
        console.log(data.toString());
      });

      ngProcess.stderr?.on("data", (data) => {
        console.log(data.toString());
      });

      ngProcess.on("error", (err) => reject(err));
      ngProcess.on("exit", () => resolve({ success: true }));
    });
  }
}
