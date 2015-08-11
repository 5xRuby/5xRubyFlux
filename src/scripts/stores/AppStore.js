var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'CHANGE';

var _itemList = [];

var AppStore = assign(new EventEmitter(), {
  getItems() { return _itemList; },

  addItem(item) { _itemList.push(item); },

  editItemAt(index, item) { _itemList[index] = item; },

  deleteItemAt(index) {
    _itemList.splice(index, 1);
  },

  ////////////////////////////////
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
});

AppDispatcher.register( function(payload) {
  switch(payload.actionType) {
    case AppConstants.ADD_ITEM:
      AppStore.addItem(payload.item); break;
    case AppConstants.DELETE_ITEM:
      AppStore.deleteItemAt(payload.index); break;
    case AppConstants.EDIT_ITEM:
      AppStore.editItemAt(payload.index, payload.item); break;
  }
  AppStore.emitChange();
  return true;
});

module.exports = AppStore;
