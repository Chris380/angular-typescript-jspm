import * as angular from "angular";
import "angular/router";
import chris from "components/chris/chris";

  angular.module("testApp", ["ngNewRouter", chris.name])
  .config(["$componentLoaderProvider", SetTemplatesPath])
  .controller("AppController", ["$router", AppController]);

  function SetTemplatesPath ($componentLoaderProvider){
    $componentLoaderProvider.setTemplateMapping(name => `src/app/components/${name}/${name}.html`);
  }

  function AppController ($router) {
    $router.config([
      { path: "/", redirectTo: "/chris" },
      { path: "/chris", component: "chris" },
      { path: "/chris/:name", component: "chris" }
    ]);
  }
