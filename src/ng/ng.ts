class Ng<T> implements INgCommand<T> {
  protected baseCommand: string;
  private args: Partial<T> = {};

  constructor(baseCommand: string, initialArgs?: Partial<T>) {
    this.baseCommand = baseCommand;
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
}
