var React = require('react');
var Memo = require('Memo');

var MemoList = React.createClass({
  render: function() {
    var {memos} = this.props;
    var renderMemos = () => {
      return memos.map((memo) => {
        return(
          <Memo key={memo.id} {...memo}/>
        );
      });
    };

    return(
      <div>
        {renderMemos()}
      </div>
    )
  } 
});

module.exports = MemoList;
