import * as angular from "angular";
import ChrisController from "./chrisController";
import ChrisService from "./chrisService";
import ChrisDirective from "./chrisDirective";

let chris = angular.module("chris", [])
   .controller("ChrisController", ChrisController)
   .service("ChrisService", ChrisService)
   .directive("chrisDirective", ChrisDirective);


export default chris;
