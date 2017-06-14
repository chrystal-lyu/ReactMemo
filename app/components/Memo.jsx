var React = require('react');
var moment = require('moment');

var Memo = React.createClass({
  render: function () {
    var {id, name, story, createdAt} = this.props;
    var renderDate = () => {
      var timestamp = createdAt;

      return 'Created ' + moment.unix(timestamp).format('MM DD YYYY h:mm a');
    };

    return (
      <div>
        <div className="name">{name}</div>
        <div className="todo-subtext">{renderDate()}</div>
        <div>{story}</div>
      </div>
    )
  }
});

module.exports = Memo;
