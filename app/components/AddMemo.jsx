var React = require('react');

var AddMemo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var memoName = this.refs.memoName.value;
    var memoStory = this.refs.memoStory.value;

    if(memoName.length > 0 && memoStory.length > 0) {
      this.refs.memoName.value = '';
      this.refs.memoStory.value = '';
      this.props.onAddMemo(memoName, memoStory);
    } else {
      this.refs.memoName.focus();
      this.refs.memoStory.focus();
    }
  },
  render: function() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="memoName" placeholder="Who?"/>
          <textarea rows="5" type="text" ref="memoStory" placeholder="What's the story?"/>
          <button className="button expanded">Add Memo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddMemo;
