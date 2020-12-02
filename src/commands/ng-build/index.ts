class NgBuild extends NgCommandBase<NgBuild, INgBuildCommandArgument> {
  constructor() {
    super("build");
  }

  public setArg<T extends keyof INgBuildCommandArgument>(
    key: T,
    value: INgBuildCommandArgument[T]
  ): NgBuild {
    this.args[key] = value;
    return this;
  }
}
