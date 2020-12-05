import { INgRunResult, INgRunner as ICommandRunner } from "./runner.interface";
import { exec, ExecException } from "child_process";

export class CommandRunner implements ICommandRunner {
  public run(command: string): Promise<INgRunResult>;
  public run(command: string, location?: string): Promise<INgRunResult>;

  public run(
    command: string,
    location?: any
  ): Promise<INgRunResult | ExecException> {
    return new Promise((resolve, reject) => {
      exec(command, { cwd: location }, (err, stdOut, stdErr) => {
        if (err) {
          reject(err);
        }

        return resolve({ success: true, stdOut, stdErr });
      });
    });
  }
}
