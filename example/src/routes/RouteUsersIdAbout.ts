import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteUsersIdAbout(args: RouteArguments)
{
    init(args, "About user " + args.pathParameters['userId']);
}
export default RouteUsersIdAbout;
