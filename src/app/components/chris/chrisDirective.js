define(["require", "exports"], function (require, exports) {
    "use strict";
    var chrisDirective = function () {
        return {
            restrict: "E",
            scope: {
                value: "@"
            },
            replace: true,
            template: "<div style='padding: 10px; border: 1px solid red; '> Ich bin die ChrisDirective und habe den Wert {{value}}!</div>"
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = chrisDirective;
});
//# sourceMappingURL=chrisDirective.js.map