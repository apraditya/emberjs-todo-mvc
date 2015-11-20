import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo: function () {
      var title = this.get('new_title');

      if (!title.trim()) { return; }

      var todo  = this.store.createRecord('todo', {
        title: title,
        isCompleted: false
      });

      todo.save();

      this.set('new_title', '');
    }
  }
});
