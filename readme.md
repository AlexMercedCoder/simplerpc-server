# SimpleRPC - Server

The SimpleRPC framework is a framework for creating very simple lightweight RPC APIs for use with any backend or frontend framework with a `redux/useReducer` like API.

Actions take the signature of

`(payload: Object, context: Object) => response:Any`

The client function then can be called like so:

`rpcDispatch({type: "actionName", payload: {arg1: 1, arg 2: "hello"}})`

## Setting up the Server

First we create an handler

```js
const createHandler = require("@simplerpc/server")

// server actions
const actions = {
    getList: (payload, context) => {
        console.log(context)
        return [1,2,3,4,5]
    }

    addToList: (payload, context) => {
        console.log(context)
        return [1,2,3,4,5, payload.num]
    }
}

// context - other data, each action should always have available
const context = {
    user: "Mr. Jones"
}


// create the handler
const handler = createHandler({actions, context})

module.exports = handler
```

## Setting up the Route
The route must be used for a post route, the endpoint url can be anything, we recommend `/rpc`.

expressjs
```js
app.post("/rpc", (req, res) => {
    const result = handler(req.body)
    res.json(result)
})
```

fastifyjs
```js
fastify.post('/rpc', async (request, reply) => {
  const result = handler(request.body)
  return result
})
```

koajs (using koa router & koa-bodyparser)
```js
router.get('/rpc', (ctx, next) => {
  const result = handler(ctx.request.body)
  return result
});
```

You can now call your actions by:

- configuring a client with a client library
- making a post request to the endpoint with a body that looks like so

```json
{
    "type": "actionName",
    "payload":{
        "arg1": 1,
        "arg2": "whatever"
    }
}