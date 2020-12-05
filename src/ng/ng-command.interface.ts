import { INgRunResult } from "../utils/runner/runner.interface";
import { NgCommand } from "./ng-command";

export interface INgCommand<T> {
  /**
   * Set args in bulk, will remove any existing arguments.
   * @param args Arguments to set.
   */
  setArgs(args: Partial<T>): INgCommand<T>;

  /**
   * Set args in bulk, will merge with existing arguments.
   * @param args Arguments to set.
   * @param merge Merge existing arguments and the new together.
   */
  setArgs(args: Partial<T>, merge: true): INgCommand<T>;

  /**
   * Set a single argument.
   * @param key Argument to set.
   * @param value Value for the argument.
   */
  setArg<U extends keyof T>(
    key: U,
    value: T[U]
  ): Omit<INgCommand<T>, "setArgs">;

  /**
   * Get the output command string for the current config.
   */
  toString(): string;

  /**
   * Run the current command config.
   * @param location Optional location for the `cwd`, where the command will run.
   */
  run(location?: string): Promise<INgRunResult>;
}
