import {
    blue,
    rainbow,
    green,
    cyan,
    magenta,
    yellow,
    bold,
    italic,
    dim,
    red,
    gray,
    white,
} from "colors/safe";

import { composeColors } from "../helpers";
import Theme from "./theme";

export default new Theme({
    // Logger ID
    // =======================================================================

    "id.packageName": composeColors(blue, dim),
    "id.moduleNamepath": composeColors(cyan, dim),
    "id.propertyNamepath": composeColors(green, dim),
    "id.slash": gray,
    "id.dot": gray,

    // Levels
    // =======================================================================

    "level.silly": rainbow,
    "level.debug": green,
    "level.verbose": cyan,
    "level.http": magenta,
    "level.info": blue,
    "level.warn": composeColors(yellow, bold),
    "level.error": composeColors(red, bold),

    // Metadata
    // =======================================================================

    "meta.name": composeColors(blue, italic),
    "meta.type": composeColors(cyan, italic),

    // Profiling
    // =======================================================================

    "duration.amount": composeColors(white, bold),
    // "duration.units": italic,
});
