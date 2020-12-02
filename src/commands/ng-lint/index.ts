class NgLint extends NgCommandBase<NgLint, INgLintCommandArgument> {
  constructor() {
    super("lint");
  }

  public setArg<T extends keyof INgLintCommandArgument>(
    key: T,
    value: INgLintCommandArgument[T]
  ): NgLint {
    this.args[key] = value;
    return this;
  }
}
