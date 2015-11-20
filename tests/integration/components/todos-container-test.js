import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todos-container', 'Integration | Component | todos container', {
  integration: true
});

test('it renders with existing todos', function(assert) {
  var todoModels  = [
    { id: 1,
      title: 'buy CSS book',
      'isCompleted': false
    },
    { id: 2,
      title: 'learn CSS',
      'isCompleted': false
    },
    { id: 3,
      title: 'rest',
      'isCompleted': true
    },
  ];

  this.set('todo-models', todoModels);
  this.render(hbs`{{todos-container todos=todo-models}}`);

  assert.equal(this.$('#todo-list li').length, 3);
  assert.notOk(this.$('#todo-list li:first').hasClass('completed'));
});
