define(["require", "exports", "angular", "./chrisController", "./chrisService", "./chrisDirective"], function (require, exports, angular, chrisController_1, chrisService_1, chrisDirective_1) {
    "use strict";
    let chris = angular.module("chris", [])
        .controller("ChrisController", chrisController_1.default)
        .service("ChrisService", chrisService_1.default)
        .directive("chrisDirective", chrisDirective_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = chris;
});
//# sourceMappingURL=chris.js.map