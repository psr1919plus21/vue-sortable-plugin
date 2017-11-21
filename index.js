let Sortable = require('sortablejs');

module.exports.sortable = {
  install: function (Vue) {
    Vue.prototype.sortableInit = function ({selectorId, context, model, settings: userSettings}) {
      this.$nextTick(() => {
        let sortableWrapper = document.getElementById(selectorId);
        let settingsDefault = {
          animation: 150,
          onEnd: function(e) {
            let clonedItems = context[model].filter((item) => {
             return item;
            });
            clonedItems.splice(e.newIndex, 0, clonedItems.splice(e.oldIndex, 1)[0]);
            context[model] = [];
            Vue.nextTick(() => {
              context[model] = clonedItems;
              if (settings.onEndCb && typeof settings.onEndCb === 'function') {
                settings.onEndCb.call(context);
              }
            });
          }
        };
        let settings = Object.assign({}, settingsDefault, userSettings);

        Sortable.create(sortableWrapper, settings);
      });
    }
  }
}
