import { Ng } from "./ng";

export interface INgCommand<T> {
  /**
   * Set args in bulk
   * @param args Arguments to set.
   */
  setArgs(args: Partial<T>): Ng<T>;

  /**
   * Set args in bulk
   * @param args Arguments to set.
   * @param merge Merge any existing arguments and the new together.
   */
  setArgs(args: Partial<T>, merge: true): Ng<T>;

  /**
   * Set single argument.
   * @param key Argument to set.
   * @param value Value for the argument.
   */
  setArg<U extends keyof T>(key: U, value: T[U]): Omit<Ng<T>, "setArgs">;

  /**
   * Get the resulting string command for the current command config.
   */
  toString(): string;

  /**
   * Run the current command config.
   * @param location Optional location for the `cwd` for the command to run.
   */
  run(location?: string): void;
}
