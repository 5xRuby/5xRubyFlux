var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
  addItem(item) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ADD_ITEM,
      item: item
    });
  },

  deleteItemAt(index) {
    AppDispatcher.dispatch({
      actionType: AppConstants.DELETE_ITEM,
      index: index
    });
  },
  editItemAt(index, item) {
    AppDispatcher.dispatch({
      actionType: AppConstants.EDIT_ITEM,
      index: index,
      item: item
    });
  }
};
module.exports = AppActions;
