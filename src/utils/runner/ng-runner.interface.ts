import { INgRunResult } from "./ng-run-result.interface";

export interface INgRunner<T> {
  run(
    baseCommand: string,
    ngCommand: string,
    args: Partial<T>
  ): Promise<INgRunResult>;
  run(
    baseCommand: string,
    ngCommand: string,
    args: Partial<T>,
    location?: string
  ): Promise<INgRunResult>;
}
