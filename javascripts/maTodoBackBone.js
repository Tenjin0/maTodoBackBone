

var MyApp = new Marionette.Application();

var Message = Backbone.Model.extend();

var Messages = Backbone.Collection.extend({
	model: Message
});

var  MessageView = Marionette.ItemView.extend({
		template: Handlebars.compile($("#message-template").html()),

		events: {
    		'click .delete': 'deleteMessage'
  		},
  		// onShow: function() {
    //   		console.log("onShow", this)
   	// 	},
  		deleteMessage: function(){
    		this.model.destroy();
  		}
});

var ListeMessageView = Marionette.CompositeView.extend({
		template: Handlebars.compile($("#formMessage").html()),

		childView: MessageView,
		childViewContainer: "#content",

		events: {
	    'click button': 'ajouter'
	  	},

	  	ajouter: function(){
	  		this.collection.add(
	  		{
	  			contenu: this.$('#newTodo').val()
	  		});
	  		console.log('collection', this.collection);
	  		this.ui.newTodo.val("");
	  	}
});

MyApp.addRegions
({
  formRegion: "#form"
});

MyApp.addInitializer(function(){
		MyApp.messageCollection = new Messages();
		MyApp.formRegion.show(
			new ListeMessageView({
				collection: MyApp.messageCollection
			})
		);
});

  MyApp.start();
