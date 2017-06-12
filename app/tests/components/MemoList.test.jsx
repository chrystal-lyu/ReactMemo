var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var MemoList = require('MemoList');
var Memo = require('Memo');

describe('MemoList', () => {
  it('should exist', () => {
    expect(MemoList).toExist();
  });

  it('should render one Memo component for each memo item', () => {
    var memos = [{
      id: 1,
      name: 'Sokie',
      content: 'Writing articles for newspaper'
    }, {
      id: 2,
      name: 'Tony',
      content: 'Busy with work'
    }];
    var memoList = TestUtils.renderIntoDocument(<MemoList memos={memos}/>);
    var memoComponents = TestUtils.scryRenderedComponentsWithType(memoList, Memo);

    expect(memoComponents.length).toBe(memos.length);
  });
});
