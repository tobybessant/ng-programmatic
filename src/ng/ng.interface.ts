interface INgCommand<T> {
  setArgs(args: Partial<T>): Ng<T>;
  setArg<U extends keyof T>(key: U, value: T[U]): Omit<Ng<T>, "setArgs">;
}
