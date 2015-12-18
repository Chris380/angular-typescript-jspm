define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChrisService = (function () {
        function ChrisService() {
            this.name = "ChrisService";
        }
        ChrisService.prototype.getName = function () {
            return this.name;
        };
        return ChrisService;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ChrisService;
});
//# sourceMappingURL=chrisService.js.map