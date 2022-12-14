"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = exports.nomal = exports.warn = exports.err = void 0;
const replacer_1 = require("../utils/replacer");
const logger = (color) => {
    return (prefix, ...args) => {
        const parsedArgs = args
            .map((elem) => {
            if (elem instanceof Object) {
                return JSON.stringify(elem, (0, replacer_1.replacer)(), 2);
            }
            else if (typeof elem === "string") {
                return elem;
            }
            else {
                return JSON.stringify(elem);
            }
        })
            .join(` `);
        console.log(`%c[${prefix}]%c ${parsedArgs}`, `color: ${color}; font-weight: bold`, "");
        return;
    };
};
exports.err = logger("red");
exports.warn = logger("orange");
exports.nomal = logger("green");
exports.info = logger("blue");
