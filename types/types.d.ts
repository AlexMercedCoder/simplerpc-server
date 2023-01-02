export interface UnknownObjectShape {
  [key: string]: any;
}

export interface ActionPayload {
  [key: string]: any
}

export interface ActionContext {
  [key: string]: any
}

export type Action = (payload: ActionPayload, context: ActionContext) => any;

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
