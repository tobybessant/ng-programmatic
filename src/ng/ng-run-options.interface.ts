export interface INgRunOptions {
  /**
   * Specify a directory for the command to be executed from. This
   * value is simply forwarded on to the 'child_process' `spawn` function.
   */
  cwd?: string;

  /**
   * Use the locally installed Angular CLI (in `node_modules`) instead of the one
   * installed globally.
   */
  useLocalCli?: boolean;
}
