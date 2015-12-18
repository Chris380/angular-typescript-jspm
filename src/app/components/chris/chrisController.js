define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChrisController = (function () {
        function ChrisController(ChrisService, $routeParams) {
            this.message = "Ich bin der ChrisController und benutze " + ChrisService.getName() + ". ";
            this.route = "" + $routeParams.name;
        }
        ChrisController.$inject = ["ChrisService", "$routeParams"];
        return ChrisController;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ChrisController;
});
//# sourceMappingURL=chrisController.js.map