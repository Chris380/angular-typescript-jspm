class ChrisController implements IChrisController {
  name: string;

  static $inject = ["ChrisService", "$routeParams"];
  constructor(ChrisService: IChrisService, $routeParams){
    this.name = `Ich bin der ChrisController und benutze ${ChrisService.getName()} Route ${$routeParams.name}. `;
  }
}

export default ChrisController;
