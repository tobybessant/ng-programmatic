class NgCommandBuilder<T extends INgCommandBase> {
  private commandInstance: T;
  constructor(commandType: new () => T) {
    this.commandInstance = new commandType();
  }

  public command(): T {
    return this.commandInstance;
  }
}
