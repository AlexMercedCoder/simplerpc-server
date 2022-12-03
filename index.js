function createHandler (config){
    // error handling
    if (!config){
        throw ("No Configuration object, shape => {actions: {}, context: {}}")
    }

    if (!config.actions){
        throw ("Configuration object does not have an actions property")
    }

    const context = config.context || {}

    return (body) => {
        if (!config.actions[body.type]){
            throw(`An action by the name of ${body.type} does not exist`)
        }

        const result = config.actions[body.type](body.payload, context)

        return {result}
    }
}

module.exports = createHandler