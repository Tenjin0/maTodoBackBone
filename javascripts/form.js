// View1
View1 = Backbone.Marionette.ItemView.extend({
  template: '#template1',
  // bind DOM events
  events: {
    'submit form': 'submit'
  },
  ui: {
    name: '#name',
    age: '#age'
  },
  submit: function(e) {
    // set model attributes, will trigger model events
    this.model.set({
      name: this.ui.name.val(),
      age: this.ui.age.val()
    });
    e.preventDefault();
  }
});

// View2
View2 = Backbone.Marionette.ItemView.extend({
  template: '#template2',
  // bind model events
  modelEvents: {
    'change:name': 'nameChanged',
    'change': 'render'
  },
  nameChanged: function () {
    alert('Name changed!');
  }
});

var model = new Backbone.Model({
  name: 'Tobi',
  age: '25'
});

// views can communicate with each other via model
var view1 = new View1({
  model: model
});
var view2 = new View2({
  model: model
});

$(function() {
  // Render and append the view
  $('body')
    .append(view1.render().el)
    .append(view2.render().el);
});
