export interface UnknownObjectShape {
  [key: string]: any;
}

export interface ActionArg {
  type: string;
  payload: UnknownObjectShape;
}

export type Action = (action: ActionArg) => any;

export interface ActionCollection {
  [key: string]: Action;
}

export interface SimpleRPCConfig {
  actions: ActionCollection
  context: UnknownObjectShape;
}

export type SimpleRPCHandler = (body: UnknownObjectShape) => any;

declare function createHandler(config: SimpleRPCConfig): SimpleRPCHandler;

export default createHandler;
