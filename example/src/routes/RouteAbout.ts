import { RouteArguments } from 'simple-spa-router';
import init from "../utils/init";

function RouteAbout(args: RouteArguments)
{
    init(args, "About");
}
export default RouteAbout;
