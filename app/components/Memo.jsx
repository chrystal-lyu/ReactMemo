var React = require('react');

var Memo = React.createClass({
  render: function () {
    var {id, name, story} = this.props;

    return (
      <div>
        <div>{id}. {name}</div>
        <div>{story}</div>
      </div>
    )
  }
});

module.exports = Memo;
