export interface INgLintArguments {
  /**
   * The linting configuration to use.
   */
  configuration: string;

  /**
   * Files to exclude from linting.
   */
  exclude: string[];

  /**
   * Files to include in linting.
   */
  files: string[];

  /**
   * Fixes linting errors (may overwrite linted files).
   *
   * @cli_default `false`
   */
  fix: boolean;

  /**
   * Succeeds even if there was linting errors.
   *
   * @cli_default `false`
   */
  force: boolean;

  /**
   * Output format (prose, json, stylish, verbose, pmd, msbuild, checkstyle, vso, fileslist).
   * @cli_default `"stylish"`
   */
  format:
    | "prose"
    | "json"
    | "stylish"
    | "verbose"
    | "pmd"
    | "msbuild"
    | "checkstyle"
    | "vso"
    | "fileslist";

  /**
   * Shows a help message for this command in the console.
   *
   * @cli_default `false`
   */
  help: boolean | "json" | "JSON";

  /**
   * Show output text.
   *
   * @cli_default `false`
   */
  silent: boolean;

  /**
   * The name of the TypeScript configuration file.
   */
  tsConfig: string;

  /**
   *   The name of the TSLint configuration file.
   */
  tslintConfig: string;

  /**
   * Controls the type check for linting.
   *
   * @cli_default `false`
   */
  typeCheck: boolean;
}
