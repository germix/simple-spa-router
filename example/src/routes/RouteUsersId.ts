import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteUsersId(args: RouteArguments)
{
    init(args, "User: " + args.pathParameters['userId']);
}
export default RouteUsersId;
