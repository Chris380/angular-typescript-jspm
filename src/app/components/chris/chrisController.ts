"use strict";

class ChrisController implements IChrisController {
  message: string;
  route: string;

  static $inject = ["ChrisService", "$routeParams"];
  constructor(ChrisService: IChrisService, $routeParams){
    this.message = `Ich bin der ChrisController und benutze ${ChrisService.getName()}. `;
    this.route = `${$routeParams.name}`;
  }
}

export default ChrisController;
