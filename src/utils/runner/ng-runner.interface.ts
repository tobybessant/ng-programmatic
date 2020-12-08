import { INgRunResult } from "./ng-run-result.interface";

export interface INgRunner<T> {
  run(ngCommand: string, args: Partial<T>): Promise<INgRunResult>;
  run(
    ngCommand: string,
    args: Partial<T>,
    location?: string
  ): Promise<INgRunResult>;
}
