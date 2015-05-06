$(document).ready(function() {

  // Place JavaScript code here...

});

var React = require('react')

class Hello extends React.Component {
  render(){
    return <div>Hello, {this.props.name}!</div>
  }
}

module.exports = Hello