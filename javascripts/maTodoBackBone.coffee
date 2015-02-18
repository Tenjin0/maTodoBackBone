MyApp = new Marionette.Application

class Message extends Backbone.Model

class Messages extends Backbone.Collection
	model: Message

class MessageView extends Marionette.ItemView
	template: Handlebars.compile $('#message-template').html()

	events:
		'click .delete': 'deleteMessage'

	deleteMessage : ->
		@model.destroy()

class GeneralView extends Marionette.CompositeView
	template: '#formMessage'
	childView : MessageView
	ChildViewContainer : '#content'

	events:
		'click button': 'ajouter'
	ajouter : ->
		@collection.add
			contenu: @$('#newTodo').val()
		@$('#newTodo').val ""

MyApp.addRegions
	content: '#form'

MyApp.addInitializer ->
	MyApp.myMessages = new Messages()

	MyApp.content.show new GeneralView
		collection: MyApp.myMessages

MyApp.start()
