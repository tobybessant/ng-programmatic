abstract class NgCommandBase<T, K> implements INgCommandBase {
  public args: any = {};
  protected ngBaseCommand: string = "ng";

  constructor(public readonly baseCommand: string) {}

  public abstract setArg<U extends keyof K>(key: U, value: K[U]): T;
}
