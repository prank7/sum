class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    console.log("Custom reporter output:", 'hello');
    results.testResults.forEach((t) => {
      console.log(t.testResults)
    })
  }
}

module.exports =  MyCustomReporter;
