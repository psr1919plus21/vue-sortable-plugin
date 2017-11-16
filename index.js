import Sortable from 'sortablejs';

export const sortable = {
  install: function (Vue) {
    Vue.prototype.sortableInit = function ({selectorId, context, model}) {
      this.$nextTick(() => {
        let sortableWrapper = document.getElementById(selectorId);

        Sortable.create(sortableWrapper, {
          animation: 150,
          onEnd: function(e) {
            let clonedItems = context[model].filter((item) => {
             return item;
            });
            clonedItems.splice(e.newIndex, 0, clonedItems.splice(e.oldIndex, 1)[0]);
            context[model] = [];
            Vue.nextTick(() => {
              context[model] = clonedItems;
            });
          }
        });
      });
    }
  }
}
