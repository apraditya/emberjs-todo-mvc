import Ember from 'ember';

export default Ember.Component.extend({
  isCompleted: function(key, value) {
    var todo = this.get('todo');

    if (value === undefined) {
      return todo.get('isCompleted');
    } else {
      console.log(value);
      todo.set('isCompleted', value);
      todo.save();

      return value;
    }
  }.property('todo.isCompleted')
});
