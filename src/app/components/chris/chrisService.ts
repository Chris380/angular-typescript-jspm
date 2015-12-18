"use strict";

class ChrisService implements IChrisService {
    name: string;
    constructor() {
      this.name = "ChrisService";
    }
    getName() {
        return this.name;
    }
}

export default ChrisService;
