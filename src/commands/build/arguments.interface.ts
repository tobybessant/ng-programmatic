export interface INgBuildArguments {
  /**
   * A list of CommonJS packages that are allowed to be used without a build time warning.
   */
  allowedCommonJsDependencies: string[];

  /**
   * Build using Ahead of Time compilation
   *
   * @cli_default `false`
   */
  aot: boolean;

  /**
   * Base url for the application being built.
   */
  baseHref: string;

  /**
   * Use a separate bundle containing code used across multiple bundles.
   * @cli_default `false`
   */
  commonChunk: boolean;

  /**
   * A named build target, as specified in the "configurations" section of angular.json.
   * Each named target is accompanied by a configuration of option defaults for that target.
   * Setting this explicitly overrides the "--prod" flag
   */
  configuration: "production" | string;

  /**
   * Define the crossorigin attribute setting of elements that provide CORS support.
   *
   * @cli_default `"none"`
   */
  crossOrigin: "none" | "anonymous" | "use-credentials";

  /**
   * Delete the output path before building.
   *
   * @cli_default `true`
   */
  deleteOutputPath: boolean;

  /**
   * URL where files will be deployed.
   */
  deployUrl: string;

  /**
   * Concatenate modules with Rollup before bundling them with Webpack.
   *
   * @cli_default `false`
   */
  experimentalRollupPass: boolean;

  /**
   * Extract CSS from global styles into '.css' files instead of '.js'.
   *
   * @deprecated since version 11.0. No longer required to disable CSS extraction for HMR.
   * @cli_default `true`
   */
  extractCss: boolean;

  /**
   * Extract all licenses in a separate file.
   *
   * @cli_default `false`
   */
  extractLicenses: boolean;

  /**
   * Run the TypeScript type checker in a forked process.
   *
   * @cli_default `true`
   */
  forkTypeChecker: boolean;

  /**
   * Shows a help message for this command in the console.
   *
   * @cli_default `false`
   */
  help: boolean | object;

  /**
   * Localization file to use for i18n.
   *
   * @deprecated Use 'locales' object in the project metadata instead.
   */
  i18nFile: string;

  /**
   * Format of the localization file specified with --i18n-file.
   *
   * @deprecated No longer needed as the format will be determined automatically.
   */
  i18nFormat: string;

  /**
   * Locale to use for i18n.
   *
   * @deprecated Use 'localize' instead.
   */
  i18nLocale: string;

  /**
   * How to handle missing translations for i18n.
   *
   * @cli_default `"warning"`
   */
  i18nMissingTranslation: "warning" | "error" | "ignore";

  /**
   * Configures the generation of the application's HTML index.
   */
  index: string;

  /**
   * List of additional NgModule files that will be lazy loaded. Lazy router modules will be discovered automatically.
   *
   * @deprecated 'SystemJsNgModuleLoader' is deprecated, and this is part of its usage. Use 'import()' syntax instead.
   */
  lazyModules: never;

  localize: boolean;

  /**
   * The full path for the main entry point to the app, relative to the current workspace.
   */
  main: string;

  /**
   * Use file name for lazy loaded chunks.
   *
   * @cli_default `true`
   */
  namedChunks: boolean;

  /**
   * Path to ngsw-config.json.
   */
  ngswConfigPath: string;

  /**
   * Enables optimization of the build output.
   *
   * @cli_default `false`
   */
  optimization: boolean;

  /**
   * Define the output filename cache-busting hashing mode.
   *
   * @cli_default `"none"`
   */
  outputHashing: "none" | "all" | "media" | "bundles";

  /**
   * The full path for the new output directory, relative to the current workspace.
   *
   * @cli_default writes output to a folder named dist/ in the current project.
   */
  outputPath: string;

  /**
   * Enable and define the file watching poll time period in milliseconds.
   */
  poll: number;

  /**
   * The full path for the polyfills file, relative to the current workspace.
   */
  polyfills: string;

  /**
   * Do not use the real path when resolving modules. If unset then will default to true if NodeJS option --preserve-symlinks is set.
   */
  preserveSymlinks: boolean;

  /**
   * Log progress to the console while building.
   *
   * @cli_deafult `true`
   */
  progress: boolean;

  /**
   * The path where style resources will be placed, relative to outputPath.
   */
  resourcesOutputPath: string;

  /**
   * Generates a service worker config for production builds.
   *
   * @cli_defualt `false`
   */
  serviceWorker: boolean;

  /**
   * Show circular dependency warnings on builds.
   *
   * @cli_defualt `true`
   */
  showCircularDependencies: boolean;

  /**
   * Output sourcemaps.
   *
   * @cli_default `true`
   */
  sourceMap: boolean;

  /**
   * Generates a 'stats.json' file which can be analyzed using tools such as 'webpack-bundle-analyzer'.
   *
   * @cli_default `false`
   */
  statsJson: boolean;

  /**
   * Enables the use of subresource integrity validation.
   *
   * @cli_default `false`
   */
  subresourceIntegrity: boolean;

  /**
   * The full path for the TypeScript configuration file, relative to the current workspace.
   */
  tsConfig: string;

  /**
   * Use a separate bundle containing only vendor libraries.
   *
   * @cli_default `true`
   */
  vendorChunk: boolean;

  /**
   * Adds more details to output logging.
   *
   * @cli_deafult `false`
   */
  verbose: boolean;

  /**
   * Run build when files change.
   *
   * @cli_default `false`
   */
  watch: boolean;

  /**
   * TypeScript configuration for Web Worker modules.
   */
  webWorkerTsConfig: string;
}
