

var MyApp = new Backbone.Marionette.Application();
var message = Backbone.Model.extend({

});
var messages = Backbone.Collection.extend({
	model: message
});

var  formView = Backbone.Marionette.ItemView.extend({
	template: "#formMessage",
	events: {
    'submit form': 'submit'
  	},
  	ui: {
  		newTodo : "#newTodo"
  	},
  	submit: function(){
  		console.log($("#newTodo").val());
  		this.model.set({
      	contenu: this.ui.newTodo.val(),
    	});
    e.preventDefault();
  	}
});
var  messageView = Backbone.Marionette.ItemView.extend({
		//template: Handlebars.compile($("#message-template").html()),
		template: "#message-template",
		tagName: 'li',
		className: 'message',
		events: {
    		'click .delete': 'deleteMessage'
  		},
  		deleteMessage: function(){
  			console.log('appuie sur delete',this.model)
    		this.model.destroy();
  		}
});

var listeMessageView = Backbone.Marionette.CompositeView.extend({
		tagName: "ul",
		id: "liste-message",
		className: "messages",
		template: "#liste-message-template",
		//template: Handlebars.compile($("#liste-message-template").html()),
		itemView: messageView,

	appendHtml: function(collectionView, itemView){
    	collectionView.$("ul").append(itemView.el);
	}
});

MyApp.addRegions
({
  mainRegion: "#content"
});

MyApp.addInitializer(function(options){
		console.log(options.foo);
		var view1 = new formView({

		});
		$('body')
    	.append(view1.render().el);
		var mesMessages = new listeMessageView({
		collection: options.foo
		});
		MyApp.mainRegion.show(mesMessages);

});
console.log('ceci est un message de test')
$(document).ready(function(){
	  var mess = new messages([
	    { contenu: 'Apprendre coffee Script' },
	    { contenu: 'Adapter avec backBone' },
	    { contenu: 'et avec marionette' }
	  ]);
	  MyApp.start({foo: mess});
});
