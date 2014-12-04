var camelCase = require('./utils/camel_case.js');

var ReactComponentGenerator = function(componentName) {
  var camelCaseComponentName = camelCase(componentName);
  return (
"var React = require('react/react');" + '\n' +
'\n' +
'var ' + camelCaseComponentName + ' = React.createClass({' + '\n' +
'  /**' + '\n' +
'   * @return {Object}' + '\n' +
'   */' + '\n' +
'  render: function() {' + '\n' +
'    return (' + '\n' +
'      <p>' + camelCaseComponentName + ' CONTENT HERE</p>' + '\n' +
'    );' + '\n' +
'  }' + '\n' +
'});' + '\n' +
'\n' +
'module.exports = ' + camelCaseComponentName + ';'
  );
};

module.exports = ReactComponentGenerator;
