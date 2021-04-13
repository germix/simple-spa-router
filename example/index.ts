import { Router } from 'simple-spa-router';
import { RouteArguments } from 'simple-spa-router';

function init(args: RouteArguments, label)
{
    let s = `
    <h1>`+label+`</h1>
    <a href="/">Home</a>
    <br/>
    <a href="/about">About</a>
    <br/>
    <a href="/config">Config</a>
    <br/>
    <a href="/projects">Projects</a>
    <br/>
    <a href="/users/1">User 1</a>
    <br/>
    <a href="/users/1/about">About user 1</a>
    <br/>
    <a href="/users/1/photos">Photos of user 1</a>
    <br/>
    <a href="/test#abc">Test /test#abc</a>
    <br/>
    <a href="/test?s=1">Test /test?s=1</a>
    <br/>
    <a href="/test?a=1&b=2">Test /test?a=1&b=2</a>
    <br/>
    <a href="/test?a=1&b=2#aaa">Test /test?a=1&b=2#aaa</a>
    <br/>
    <a href="/test#aaa?a=1&b=2">Test /test#aaa?a=1&b=2</a>
    <br/>
    <button id="push-route">Push route</button>
    <br/>
    <button id="replace-route">Replace route</button>
    <br/>
    `;

    document.body.innerHTML = s;

    printArguments(args);

    document.getElementById('push-route').onclick = () =>
    {
        let x;
        if(args.queryParameters['x'] === undefined)
            x = 1;
        else
            x = parseInt(args.queryParameters['x'])+1;

        Router.push("/test?x=" + x);
    };
    document.getElementById('replace-route').onclick = () =>
    {
        let x;
        if(args.queryParameters['x'] === undefined)
            x = 1;
        else
            x = parseInt(args.queryParameters['x'])+1;

        Router.replace("/test?x=" + x);
    };
}

function printArguments(args: RouteArguments)
{
    let s ='';

    s += '<h3>Arguments</h3>';

    // Path
    s += 'Path: ' + args.path;
    s += '<br/>';
    s += '<br/>';

    // Path parts
    s += 'Path parts: ';
    s += '<br/>';
    args.pathParts.forEach((p) =>
    {
        s += '&nbsp&nbsp&nbsp&nbsp';
        s += p + '<br/>';
    });
    s += '<br/>';

    // Path parameters
    s += 'Path parameters: ';
    s += '<br/>';
    for(let key in args.pathParameters)
    {
        s += '&nbsp&nbsp&nbsp&nbsp';
        s += key;
        s += ': ';
        s += args.pathParameters[key];
        s += '<br/>';
    }
    s += '<br/>';

    // Hash
    s += 'Hash: ' + args.hash;
    s += '<br/>';
    s += '<br/>';

    // Query parameters
    s += 'Query parameters: ';
    s += '<br/>';
    for(let key in args.queryParameters)
    {
        s += '&nbsp&nbsp&nbsp&nbsp';
        s += key;
        s += ': ';
        s += args.queryParameters[key];
        s += '<br/>';
    }
    s += '<br/>';

    document.body.innerHTML += s;
}

function Route404(args: RouteArguments)
{
    document.body.innerHTML = 'NOT FOUND';

    printArguments(args);
}

function RouteHome(args: RouteArguments)
{
    init(args, "Home");
}

function RouteAbout(args: RouteArguments)
{
    init(args, "About");
}

function RouteConfig(args: RouteArguments)
{
    init(args, "Config");
}

function RouteProjects(args: RouteArguments)
{
    init(args, "Projects");
}

function RouteUsers(args: RouteArguments)
{
    init(args, "Users");
}

function RouteUsersId(args: RouteArguments)
{
    init(args, "User: " + args.pathParameters['userId']);
}

function RouteUsersIdAbout(args: RouteArguments)
{
    init(args, "About user " + args.pathParameters['userId']);
}

function RouteUsersIdPhotos(args: RouteArguments)
{
    init(args, "Photos of user " + args.pathParameters['userId']);
}

function RouteTest(args: RouteArguments)
{
    init(args, "Test");
}

Router.init({
    routes: [
        {   path: '/',                      route: RouteHome },
        {   path: '/about',                 route: RouteAbout },
        {   path: '/config',                route: RouteConfig },
        {   path: '/projects',              route: RouteProjects },
        {   path: '/users',                 route: RouteUsers },
        {   path: '/users/:userId',         route: RouteUsersId },
        {   path: '/users/:userId/about',   route: RouteUsersIdAbout },
        {   path: '/users/:userId/photos',  route: RouteUsersIdPhotos },
        {   path: '/test',                  route: RouteTest },
    ],

    default: Route404,

    postRoute: function(args: RouteArguments)
    {
    }
});
