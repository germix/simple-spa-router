# Simple SPA Router

A simple router for SPA applications

## Install

```bash
npm install simple-spa-router
```

## Example

index.ts:

```typescript
import { Router } from "simple-spa-router/Router";
import { RouteArguments } from "simple-spa-router/RouteArguments";

function RouteHome(args: RouteArguments)
{
    // Do something
}

function RouteUsers(args: RouteArguments)
{
    // Do something
}

function RouteUsersId(args: RouteArguments)
{
    // Do something
}

function RouteUsersIdPhotos(args: RouteArguments)
{
    // Do something
}

function RouteNotFound(args: RouteArguments)
{
    // Do something
}

Router.init({
    routes: [
        {   path: '/',                      route: RouteHome },
        {   path: '/users',                 route: RouteUsers },
        {   path: '/users/:userId',         route: RouteUsersId },
        {   path: '/users/:userId/photos',  route: RouteUsersIdPhotos },
    ],

    default: RouteNotFound,

    postRoute: function(args: RouteArguments)
    {
        // Do something
    }
});
```
