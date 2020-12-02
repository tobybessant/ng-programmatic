import { INgCommand } from "./ng.interface";

export class Ng<T> implements INgCommand<T> {
  protected action: string;
  private readonly ng: string = "ng";
  private args: Partial<T> = {};

  constructor(baseCommand: string, initialArgs?: Partial<T>) {
    this.action = baseCommand;
    if (initialArgs) {
      this.args = initialArgs;
    }
  }

  public setArgs(args: Partial<T>, merge: boolean = false): Ng<T> {
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
  ): Omit<Ng<T>, "setArgs"> {
    this.args[key] = value;
    return this;
  }

  public toString(): string {
    let result: string = `${this.ng} ${this.action} `;

    for (const key in this.args) {
      if (this.args[key]) {
        result += `--${key}=${this.args[key]} `;
      }
    }

    return result;
  }

  public run(location?: string): void {
    const ngCommand: string = this.toString();
    console.log(ngCommand);
  }
}
