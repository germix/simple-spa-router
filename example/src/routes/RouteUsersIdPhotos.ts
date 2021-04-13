import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteUsersIdPhotos(args: RouteArguments)
{
    init(args, "Photos of user " + args.pathParameters['userId']);
}
export default RouteUsersIdPhotos;
