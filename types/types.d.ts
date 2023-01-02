export interface UnknownObjectShape {
  [key: string]: any;
}

export interface ActionArg {
  payload: UnknownObjectShape,
  context: UnknownObjectShape
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
