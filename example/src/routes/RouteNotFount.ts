import { RouteArguments } from 'simple-spa-router';
import printArguments from "../utils/printArguments";

function RouteNotFound(args: RouteArguments)
{
    document.body.innerHTML = 'NOT FOUND';

    printArguments(args);
}
export default RouteNotFound;
