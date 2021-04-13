import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteConfig(args: RouteArguments)
{
    init(args, "Config");
}
export default RouteConfig;
