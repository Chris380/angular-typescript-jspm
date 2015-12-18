define(["require", "exports", "angular", "components/chris/chris", "angular/router"], function (require, exports, angular, chris_1) {
    "use strict";
    angular.module("testApp", ["ngNewRouter", chris_1.default.name])
        .config(["$componentLoaderProvider", SetTemplatesPath])
        .controller("AppController", ["$router", AppController]);
    function SetTemplatesPath($componentLoaderProvider) {
        $componentLoaderProvider.setTemplateMapping(name => `src/app/components/${name}/${name}.html`);
    }
    function AppController($router) {
        $router.config([
            { path: "/", redirectTo: "/chris" },
            { path: "/chris", component: "chris" },
            { path: "/chris/:name", component: "chris" }
        ]);
    }
});
//# sourceMappingURL=app.js.map