export interface INgRunResult {
  success: boolean;
  stdErr?: string;
  stdOut?: string;
}

export interface INgRunner {
  run(command: string): Promise<INgRunResult>;
  run(command: string, location?: string): Promise<INgRunResult>;
}
