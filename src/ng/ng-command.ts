import { INgCommand } from "./ng-command.interface";
import { INgRunResult } from "..";
import { INgRunner } from "../utils/runner/ng-runner.interface";

export class NgCommand<T> implements INgCommand<T> {
  private readonly ng: string = "ng";
  private args: Partial<T> = {};

  constructor(
    private readonly commandRunner: INgRunner,
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
    let result: string = `${this.ng} ${this.baseCommand} `;
    for (const key in this.args) {
      if (this.args[key] !== undefined) {
        result += this.argument(key);
      }
    }

    return result.trim();
  }

  public async run(location?: string): Promise<INgRunResult> {
    const ngCommand: string = this.toString();
    console.log(`ng-programmatic running: \`${ngCommand}\``);

    return this.commandRunner.run(ngCommand, location);
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
