import { ChildProcess } from "child_process";
import * as spawn from "cross-spawn";
import { INgRunner as ICommandRunner } from "./ng-runner.interface";
import { INgRunResult } from "./ng-run-result.interface";

export class CommandRunner<T> implements ICommandRunner<T> {
  public run<T>(command: string, args: Partial<T>): Promise<INgRunResult>;
  public run(
    command: string,
    args: Partial<T>,
    location?: string
  ): Promise<INgRunResult>;

  public run<T>(
    command: string,
    args: Partial<T>,
    location?: any
  ): Promise<INgRunResult | Error> {
    return new Promise((resolve, reject) => {
      const ngProcess: ChildProcess = spawn(
        "ng",
        [command, ...this.formatArgs(args)],
        {
          stdio: ["pipe", "pipe"],
          cwd: location
        }
      );

      ngProcess.stdout!.on("data", function (data) {
        console.log(data.toString());
      });

      ngProcess.stderr!.on("data", function (data) {
        console.log(data.toString());
      });

      ngProcess.on("error", (err) => reject(err));
      ngProcess.on("exit", () => resolve({ success: true }));
    });
  }

  private formatArgs(args: { [key: string]: any }): string[] {
    const argsArray: string[] = [];

    for (const key in args) {
      if (args[key] !== undefined) {
        argsArray.push(`--${key}`);

        if (args[key] instanceof Array) {
          const value: string = ((args[key] as unknown) as Array<string>).join(
            " "
          );
          argsArray.push(value);
          continue;
        }

        argsArray.push(`${args[key]}`);
      }
    }

    return argsArray;
  }
}
