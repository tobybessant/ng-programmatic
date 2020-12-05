import { INgCommand } from "./ng-command.interface";
import { exec } from "child_process";

export interface INgRunResult {
  success: boolean;
  stdErr?: string;
  stdOut?: string;
}

export class NgCommand<T> implements INgCommand<T> {
  protected action: string;
  private readonly ng: string = "ng";
  private args: Partial<T> = {};

  constructor(baseCommand: string, initialArgs?: Partial<T>) {
    this.action = baseCommand;
    if (initialArgs) {
      this.args = initialArgs;
    }
  }

  public setArgs(args: Partial<T>): INgCommand<T>;
  public setArgs(args: Partial<T>, merge: true): INgCommand<T>;

  public setArgs(args: Partial<T>, merge?: true): INgCommand<T> {
    if (merge) {
      this.args = { ...this.args, ...args };
    } else {
      this.args = args;
    }
    return this;
  }

  public setArg<U extends keyof T>(
    key: U,
    value: T[U]
  ): Omit<INgCommand<T>, "setArgs"> {
    this.args[key] = value;
    return this;
  }

  public toString(): string {
    let result: string = `${this.ng} ${this.action} `;

    for (const key in this.args) {
      if (this.args[key]) {
        result += this.argument(key);
      }
    }

    return result;
  }

  public run(location?: string): Promise<INgRunResult> {
    const ngCommand: string = this.toString();
    console.log(`gulp-ng running: \`${ngCommand}\``);

    return new Promise((resolve, reject) => {
      exec(ngCommand, { cwd: location }, (err, stdOut, stdErr) => {
        if (err) {
          reject(err);
        }

        return resolve({ success: true, stdOut, stdErr });
      });
    });
  }

  private argument<U extends keyof T>(key: U): string {
    if (this.args[key] instanceof Array) {
      let result: string = `--${key} `;
      ((this.args[key] as unknown) as Array<string>).forEach(
        (arg: any) => (result += arg + " ")
      );
      return result;
    }

    return `--${key}=${this.args[key]} `;
  }
}
