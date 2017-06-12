var React = require('react');
var uuid = require('uuid');

var MemoList = require('MemoList');
var AddMemo = require('AddMemo');

var MemoApp = React.createClass({
  getInitialState: function() {
    return {
      memos: [
        {
          id: uuid(),
          name: 'Eddie Xie',
          story: 'He went to San Francisco meeting friends and investors.'
        },
        {
          id: uuid(),
          name: 'Kerin Wu',
          story: 'I dropped off some of my stuff at her house. She said she is traveling to Korea and also going back to China during Chinese New Year for a month.'
        },
        {
          id: uuid(),
          name: 'Yuxiang Wu',
          story: 'He is hitting on this girl who also likes to take photos with the wings background wall with Xiang. They dated twice! And they are seeing each other next week again!'
        }
      ]
    };
  },
  handleAddMemo: function(name, story) {
    this.setState({
      memos: [
        {
          id: uuid(),
          name: name,
          story: story
        },
        ...this.state.memos
      ]
    });
  },
  render: function() {
    var {memos} = this.state;

    return(
      <div>
        <AddMemo onAddMemo={this.handleAddMemo}/>
        <MemoList memos={memos}/>
      </div>
    )
  }
});

module.exports = MemoApp;
