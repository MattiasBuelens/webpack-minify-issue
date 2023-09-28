document.body.innerText = 'Running test...';

var SuperClass = class {};

var UnusedClass = class extends SuperClass {
    constructor() {
      super();
    }
  },
  unusedVariable = new UnusedClass();

document.body.innerText = 'Test succeeded!';
