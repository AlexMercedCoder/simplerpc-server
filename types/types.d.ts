interface UnknownObjectShape {
  [key: string]: any;
}

interface ActionArg {
  type: string;
  payload: UnknownObjectShape;
}

type Action = (action: ActionArg) => any;

interface SimpleRPCConfig {
  actions: {
    [key: string]: Action;
  };
  context: UnknownObjectShape;
}

interface SimpleRPCResponse {
  result: any;
}

type SimpleRPCHandler = (body: UnknownObjectShape) => SimpleRPCResponse;

declare function createHandler(config: SimpleRPCConfig): SimpleRPCHandler;

export default createHandler;
