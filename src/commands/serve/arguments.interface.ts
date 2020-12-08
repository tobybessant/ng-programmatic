export interface INgServeArguments {
  /**
   * List of hosts that are allowed to access the dev server.
   */
  allowedHosts: string;

  /**
   * Deprecated: Use the "aot" option in the browser builder instead.
   *
   * Build using Ahead of Time compilation.
   *
   * @deprecated
   */
  aot: boolean;

  /**
   * Deprecated: Use the "baseHref" option in the browser builder instead.
   *
   * Base url for the application being built.
   *
   * @deprecated
   */
  baseHref: string;

  /**
   * A browser builder target to serve in the format of `project:target[:configuration]`.
   * You can also pass in more than one configuration name as a comma-separated list.
   * Example: `project:target:production,staging`.
   */
  browserTarget: string;

  /**
   * Deprecated: Use the "commonChunk" option in the browser builder instead.
   * Use a separate bundle containing code used across multiple bundles.
   *
   * @deprecated
   */
  commonChunk: boolean;

  /**
   * One or more named builder configurations as a comma-separated list as specified
   * in the "configurations" section of angular.json. The builder uses the named configurations
   * to run the given target. For more information, see
   * https://angular.io/guide/workspace-config#alternate-build-configurations. Setting this
   * explicitly overrides the "--prod" flag
   */
  configuration: string;

  /**
   * Deprecated: Use the "deployUrl" option in the browser builder instead.
   * URL where files will be deployed.
   *
   * @deprecated
   */
  deployUrl: string;

  /**
   * Don't verify connected clients are part of allowed hosts.
   *
   * @cli_default `false`
   */
  disableHostCheck: boolean;

  /**
   * Shows a help message for this command in the console.
   *
   * @cli_default `false`
   */
  help: boolean | "json" | "JSON";

  /**
   * Enable hot module replacement.
   *
   * @cli_default `false`
   */
  hmr: boolean;

  /**
   * Deprecated: No longer has an effect.
   * Show a warning when the --hmr option is enabled.
   *
   * @cli_default `false`
   * @deprecated
   */
  hmrWarning: boolean;

  /**
   * Host to listen on.
   *
   * @cli_default `localhost`
   */
  host: string;

  /**
   * Whether to reload the page on change, using live-reload.
   *
   * @cli_default `true`
   */
  liveReload: boolean;

  /**
   * Opens the url in default browser.
   *
   * @cli_default `false`
   */
  open: boolean;

  /**
   * Deprecated: Use the "optimization" option in the browser builder instead.
   * Enables optimization of the build output. Including minification of scripts and styles,
   * tree-shaking, dead-code eliminiation, tree-shaking and fonts inlining. For more information,
   * see https://angular.io/guide/workspace-config#optimization-and-source-map-configuration.
   *
   * @deprecated
   */
  optimization: boolean;

  /**
   * Enable and define the file watching poll time period in milliseconds.
   */
  poll: string;

  /**
   * Port to listen on.
   */
  port: number;

  /**
   * Deprecated: Use the "progress" option in the browser builder instead.
   *
   * Log progress to the console while building.
   *
   * @deprecated
   */
  progress: boolean;

  /**
   * Proxy configuration file.
   */
  proxyConfig: string;

  /**
   * The URL that the browser client (or live-reload client, if enabled) should use to
   * connect to the development server. Use for a complex dev server setup, such as one
   * with reverse proxies.
   */
  publicHost: string;

  /**
   * The pathname where the app will be served.
   */
  servePath: string;

  /**
   * Deprecated: No longer has an effect.
   *
   * Show a warning when deploy-url/base-href use unsupported serve path values.
   *
   * @cli_default `true`
   * @deprecated
   */
  servePathDefaultWarning: string;

  /**
   * Deprecated: Use the "sourceMap" option in the browser builder instead.
   *
   * Output sourcemaps.
   *
   * @deprecated
   */
  sourceMap: boolean;

  /**
   * Serve using HTTPS.
   *
   * @cli_default `false`
   */
  ssl: boolean;

  /**
   * SSL certificate to use for serving HTTPS.
   */
  sslCert: string;

  /**
   * SSL key to use for serving HTTPS.
   */
  sslKey: string;

  /**
   * Deprecated: Use the "vendorChunk" option in the browser builder instead.
   *
   * Use a separate bundle containing only vendor libraries.
   *
   * @deprecated
   */
  vendorChunk: boolean;

  /**
   * Adds more details to output logging.
   */
  verbose: boolean;

  /**
   * Rebuild on change.
   *
   * @cli_default `true`
   */
  watch: boolean;
}
