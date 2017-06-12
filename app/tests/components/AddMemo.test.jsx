var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var AddMemo = require('AddMemo');

describe('AddMemo', () => {
  it('should exist', () => {
    expect(AddMemo).toExist();
  });

  it('should call onAddMemo prop with valid data', () => {
    var memoName = 'Sokie';
    var memoStory = 'Bought Grow New Avocado Juice';
    var spy = expect.createSpy();
    var addMemo = TestUtils.renderIntoDocument(<AddMemo onAddMemo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addMemo));

    addMemo.refs.memoName.value = memoName;
    addMemo.refs.memoStory.value = memoStory;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(memoName, memoStory);
  });

  it('should not call onAddMemo prop with invalid memoName input', () => {
    var memoName = '';
    var memoStory = 'Bought Grow New Avocado Juice';
    var spy = expect.createSpy();
    var addMemo = TestUtils.renderIntoDocument(<AddMemo onAddMemo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addMemo));

    addMemo.refs.memoName.value = memoName;
    addMemo.refs.memoStory.value = memoStory;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should not call onAddMemo prop with invalid memoStory input', () => {
    var memoName = 'Sokie';
    var memoStory = '';
    var spy = expect.createSpy();
    var addMemo = TestUtils.renderIntoDocument(<AddMemo onAddMemo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addMemo));

    addMemo.refs.memoName.value = memoName;
    addMemo.refs.memoStory.value = memoStory;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should not call onAddMemo prop with both invalid input', () => {
    var memoName = '';
    var memoStory = '';
    var spy = expect.createSpy();
    var addMemo = TestUtils.renderIntoDocument(<AddMemo onAddMemo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addMemo));

    addMemo.refs.memoName.value = memoName;
    addMemo.refs.memoStory.value = memoStory;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
