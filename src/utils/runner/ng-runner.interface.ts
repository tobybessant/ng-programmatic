import { INgRunResult } from "./ng-run-result.interface";

export interface INgRunner<T> {
  run(command: string, args: Partial<T>): Promise<INgRunResult>;
  run(
    command: string,
    args: Partial<T>,
    location?: string
  ): Promise<INgRunResult>;
}
