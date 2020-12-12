import { INgCommand } from "./ng-command.interface";
import { INgRunResult } from "..";
import { INgRunner } from "../utils/runner/ng-runner.interface";
import { INgRunOptions } from "./ng-run-options.interface";
export class NgCommand<T> implements INgCommand<T> {
  private readonly NPM_PREFIX: string = `npm run-script ng ${this.baseCommand} -- `;
  private readonly NG_PREFIX: string = `ng ${this.baseCommand} `;
  private args: Partial<T> = {};

  constructor(
    private readonly commandRunner: INgRunner<T>,
    private readonly baseCommand: string,
    initialArgs?: Partial<T>
  ) {
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
    return `${this.NG_PREFIX} ${this.getFormattedArguments()}`;
  }

  public async run(options?: INgRunOptions): Promise<INgRunResult> {
    const prefix: string = options?.useLocalCli
      ? this.NPM_PREFIX
      : this.NG_PREFIX;

    console.log(`ng-programmatic running (local): \`${this.toString()}\``);

    return this.commandRunner.run(
      prefix + this.getFormattedArguments(),
      options?.cwd
    );
  }

  private getFormattedArguments(): string {
    let result: string = "";

    for (const key in this.args) {
      if (this.args[key] !== undefined) {
        result += this.formatArgument(key);
      }
    }

    return result;
  }

  private formatArgument<U extends keyof T>(key: U): string {
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
