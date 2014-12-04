# React Component Generator

An [Accio][accio] generator that creates a skeleton of a React component using
CommonJS imports.


# Setting Up

## Installation
`npm install accio`
`npm install react_generator`

## Configuration
Example of an `accio.config.js` that will allow calling the `react_generator`:

```javascript
module.exports = {
  aliases: {
    rc: 'react_component'
  },
  generators: {
    react_component: {
      path: '/node_modules/react_generator/react_component.js',
      output: function(name) {
        return ('/src/components/' + name + '.js.jsx');
      },
    }
  }
};
```

This will allow calling the generator under the name 'react_component' or 'rc'
with [Accio][accio] and will generate component skeletons in the directory
'src/components/' with the extension '.js.jsx'.

[accio]: https://github.com/flarnie/accio

## Usage
Within the root of your project directory, you should be able to run the either
of the following commands to generate a 'to_do_list' component skeleton:
```
> accio react_component to_do_list
```
or
```
> accio rc to_do_list
```

### What it does
The generator will use the command line argument as the name of the generated
file, and it will create a component using the camel-cased version of the
filename. Given the argument 'to_do_list', it will output the following code
into the generated file:

```javascript
var React = require('react/react');

var ToDoList = React.createClass({
  /**
   * @return {Object}
   */
  render: function() {
    return (
      <p>ToDoList CONTENT HERE</p>
    );
  }
});

module.exports = ToDoList;
```

### Generating multiple components
You may pass multiple component names at the same time:
```
> accio rc to_do_list to_do_item to_do_form to_do_app
```
This will generate four separate component skeletons.
