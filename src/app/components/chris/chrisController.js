define(["require", "exports"], function (require, exports) {
    "use strict";
    class ChrisController {
        constructor(ChrisService, $routeParams) {
            this.name = `Ich bin der ChrisController und benutze ${ChrisService.getName()} Route ${$routeParams.name}. `;
        }
    }
    ChrisController.$inject = ["ChrisService", "$routeParams"];
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ChrisController;
});
//# sourceMappingURL=chrisController.js.map