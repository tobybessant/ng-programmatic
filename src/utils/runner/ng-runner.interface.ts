import { INgRunResult } from "./ng-run-result.interface";

export interface INgRunner<T> {
  run(command: string): Promise<INgRunResult>;
  run(command: string, location?: string): Promise<INgRunResult>;
}
