export interface INgTestArguments {
  /**
   * Override which browsers tests are run against.
   */
  browsers: string;

  /**
   * Output a code coverage report.
   *
   * @cli_default `false`
   */
  codeCoverage: boolean;

  /**
   * Globs to exclude from code coverage.
   */
  codeCoverageExclude: string[];

  /**
   * One or more named builder configurations as a comma-separated list as specified in the
   * "configurations" section of angular.json. The builder uses the named configurations to
   * run the given target. For more information, see
   * https://angular.io/guide/workspace-config#alternate-build-configurations. Setting this
   * explicitly overrides the "--prod" flag.
   */
  configuration: string;

  /**
   * Shows a help message for this command in the console.
   */
  help: boolean | "json" | "JSON";

  /**
   * Globs of files to include, relative to workspace or project root. There are 2 special cases:
   * - when a path to directory is provided, all spec files ending ".spec.@(ts|tsx)" will be included.
   * - when a path to a file is provided, and a matching spec file exists it will be included instead.
   */
  include: string[];

  /**
   * The name of the Karma configuration file.
   */
  karmaConfig: string;

  /**
   * The name of the main entry-point file.
   */
  main: string;

  /**
   * Enable and define the file watching poll time period in milliseconds.
   */
  poll: string;

  /**
   * The name of the polyfills file.
   */
  polyfills: string;

  /**
   * Do not use the real path when resolving modules. If unset then will default to true
   * if NodeJS option --preserve-symlinks is set.
   */
  preserveSymlinks: boolean;

  /**
   * Log progress to the console while building.
   */
  progress: boolean;

  /**
   * Karma reporters to use. Directly passed to the karma runner.
   */
  reporters: string[];

  /**
   * The name of the TypeScript configuration file.
   */
  sourceMap: boolean;

  /**
   * Run build when files change.
   */
  watch: boolean;

  /**
   * TypeScript configuration for Web Worker modules.
   */
  webWorker: string;
}
