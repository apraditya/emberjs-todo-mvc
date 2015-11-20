import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  remaining: function() {
    return this.get('todos').filterBy('isCompleted', false).get('length');
  }.property('todos.@each.isCompleted'),
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
