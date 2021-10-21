import { ColorMap, DEFAULT_COLORIZE } from "../helpers";

export interface ThemeOptions {
    enabled?: boolean;
}

export default class Theme {
    public map: ColorMap;
    public enabled: boolean;

    constructor(map: ColorMap, options: ThemeOptions = {}) {
        this.map = map;
        this.enabled =
            options.enabled === undefined ? DEFAULT_COLORIZE : options.enabled;
    }

    get options(): ThemeOptions {
        return { enabled: this.enabled };
    }

    apply(content: string, style: string): string {
        if (!this.enabled || !this.map.hasOwnProperty(style)) {
            return content;
        }
        return this.map[style](content);
    }

    extend(overrides: undefined | ColorMap, options: ThemeOptions) {
        return new Theme(
            { ...this.map, ...overrides },
            { ...this.options, ...options }
        );
    }
}
