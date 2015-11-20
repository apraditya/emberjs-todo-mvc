import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    createTodo: function () {
      var title = this.get('new_title');

      if (!title.trim()) { return; }

      var todo  = this.get('store').createRecord('todo', {
        title: title,
        isCompleted: false
      });

      todo.save();

      this.set('new_title', '');
    }
  }
});
