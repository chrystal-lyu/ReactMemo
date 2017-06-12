var React = require('react');

var Memo = React.createClass({
  render: function () {
    var {id, name, content} = this.props;

    return (
      <div>
        <div>{id}. {name}</div>
        <div>{content}</div>
      </div>
    )
  }
});

module.exports = Memo;
