interface UnknownObjectShape {
    [key: string]: any
}

interface ActionArg {
    type: string,
    payload: UnknownObjectShape
}

type Action = (action: ActionArg) => any

interface SimpleRPCConfig {
    actions: {
        [key: string]: Action
    },
    context: UnknownObjectShape
}


declare function createHandler(config: SimpleRPCConfig)

export default createHandler