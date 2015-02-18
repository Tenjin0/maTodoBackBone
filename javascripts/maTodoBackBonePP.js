var MyApp = new Backbone.Marionette.Application();
var Message = Backbone.Model.extend({
	defaults: {
		contenu: 'toto'
	}
});
var Messages = Backbone.Collection.extend({
	model: Message
});

var FormView = Backbone.Marionette.ItemView.extend({
	template: "#formMessage",

	events: {
    'submit form': 'submit'
  	},
  	ui: {
  		newTodo : "#newTodo"
  	},
  	// model:message,
  	submit: function(){
  		// sconsole.log('newTodo', $("#newTodo"));
  		this.collection.add({contenu: this.ui.newTodo.val()});
  		this.ui.newTodo.val("");
    	// console.log('ui', this.ui.newTodo.val());
    	// console.log('model: contenu', this.model);
   		//e.preventDefault();
  	}
});

var  MessageView = Backbone.Marionette.ItemView.extend({
		//console.log('#message-template ->> ', $("#message-template").html()),
		template: Handlebars.compile($("#message-template").html()),
		//template: "#message-template",
		//tagName: 'li',
		//className: 'message',
		events: {
    		'click .delete': 'deleteMessage'
  		},
  		onShow: function() {
      		console.log("onShow", this)
   		},
  		deleteMessage: function(){
  			// console.log('appuie sur delete',this.model)
    		this.model.destroy();
  		}
});

var ListeMessageView = Backbone.Marionette.CompositeView.extend({
	//tagName: "ul",
	template: Handlebars.compile($("#formMessage").html()),
	//template: "#formMessage",
	childView: MessageView,
	childViewContainer: "#content",

  	ui: {
  		newTodo : "#newTodo"

  	},

	events: {
    'click button': 'ajouter'
  	},
  	// model:message,
  	ajouter: function(e){
  		// sconsole.log('newTodo', $("#newTodo"));
  		this.collection.add({contenu: this.ui.newTodo.val()});
  		console.log('collection', this.collection);
  		this.ui.newTodo.val("");
    	// console.log('ui', this.ui.newTodo.val());
    	// console.log('model: contenu', this.model);
   		e.preventDefault();

  	}
});
		//template: Handlebars.compile($("#liste-message-template").html()),
		// itemView: messageView

	// appendHtml: function(collectionView, itemView){
 //    	collectionView.$("ul").append(itemView.el); //
	// }
// });

MyApp.addRegions
({
  formRegion: "#form"
});

MyApp.addInitializer(function(options){
		//console.log(options.foo);
		//var myMessage = new message({});
		MyApp.messageCollection = new Messages();
		// var view1 = new formView({

		// 	//model: myMessage,
		// 	collection: messageCollection
		// });
		// var mesMessages = new listeMessageView({
		// 	collection: messageCollection
		// // collection: messageCollection
		// });
		// MyApp.mainRegion.show(new FormView({
		// 	collection: MyApp.messageCollection
		// }));
		MyApp.formRegion.show(new ListeMessageView({
			collection: MyApp.messageCollection
		// collection: messageCollection
		}));
		// MyApp.formRegion.show(view1);


});
console.log('ceci est un message de test')
$(document).ready(function(){
	  var mess = new Messages([
	    { contenu: 'Apprendre coffee Script' },
	    { contenu: 'Adapter avec backBone' },
	    { contenu: 'et avec marionette' }
	  ]);
MyApp.start();
});
