import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteUsers(args: RouteArguments)
{
    init(args, "Users");
}
export default RouteUsers;
