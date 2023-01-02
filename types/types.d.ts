export interface UnknownObjectShape {
  [key: string]: any;
}

export interface ActionArg {
  type: string;
  payload: UnknownObjectShape;
}

export type Action = (action: ActionArg) => any;

export interface SimpleRPCConfig {
  actions: {
    [key: string]: Action;
  };
  context: UnknownObjectShape;
}

export type SimpleRPCHandler = (body: UnknownObjectShape) => any;

declare function createHandler(config: SimpleRPCConfig): SimpleRPCHandler;

export default createHandler;
