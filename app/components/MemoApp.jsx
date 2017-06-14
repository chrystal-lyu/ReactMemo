var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var MemoList = require('MemoList');
var AddMemo = require('AddMemo');
var MemoAPI = require('MemoAPI');
var MemoSearch = require('MemoSearch');

var MemoApp = React.createClass({
  getInitialState: function() {
    return {
      searchName: '',
      memos: MemoAPI.getMemos()
    };
  },
  componentDidUpdate: function() {
    MemoAPI.setMemos(this.state.memos);
  },
  handleAddMemo: function(name, story) {
    this.setState({
      memos: [
        {
          id: uuid(),
          name: name,
          story: story,
          createdAt: moment().unix()
        },
        ...this.state.memos
      ]
    });
  },
  handleSearch: function(searchName) {
    this.setState({
      searchName: searchName.toLowerCase()
    });
  },
  render: function() {
    var {memos, searchName} = this.state;
    var filteredMemos = MemoAPI.filterMemos(memos, searchName);

    return(
      <div>
        <div className="row">
          <div className="">
            <div className="">
              <div id="left" className="column small-12 meidum-3 large-3">
                <h1 className="page-title">Search memos</h1>
                <MemoSearch onSearch={this.handleSearch}/>
              </div>
              <div id="right" className="column small-12 meidum-9 large-9">
                <h1 className="page-title">Who did you meet today?</h1>
                <AddMemo onAddMemo={this.handleAddMemo}/>
                <MemoList memos={filteredMemos}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = MemoApp;
