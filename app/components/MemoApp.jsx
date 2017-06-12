var React = require('react');
var MemoList = require('MemoList');

var MemoApp = React.createClass({
  getInitialState: function() {
    return {
      memos: [
        {
          id: 1,
          name: 'Eddie Xie',
          content: 'He went to San Francisco meeting friends and investors.'
        },
        {
          id: 2,
          name: 'Kerin Wu',
          content: 'I dropped off some of my stuff at her house. She said she is traveling to Korea and also going back to China during Chinese New Year for a month.'
        },
        {
          id: 3,
          name: 'Yuxiang Wu',
          content: 'He is hitting on this girl who alos likes to take photos with the wings background wall with Xiang. They dated twice! And they are seeing each other next week again!'
        }
      ]
    };
  },
  render: function() {
    var {memos} = this.state;

    return(
      <div>
        <MemoList memos={memos}/>
      </div>
    )
  }
});

module.exports = MemoApp;
