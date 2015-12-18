var chrisDirective = function() {
    return {
      restrict: "E",
      scope: {
        value: "@"
      },
      replace: true,
      template: "<div style='padding: 10px; border: 1px solid red; '> Ich bin die ChrisDirective und habe den Wert {{value}}!</div>"
    };
};


export default chrisDirective;
