import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteHome(args: RouteArguments)
{
    init(args, "Home");
}
export default RouteHome;
