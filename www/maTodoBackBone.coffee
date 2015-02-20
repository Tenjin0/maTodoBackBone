MyApp = new Marionette.Application

class MessageView extends Marionette.ItemView
	template: Handlebars.compile $('#message-template').html()

	events:
		'click .delete': 'deleteMessage'

	deleteMessage : ->
		@model.destroy()

class GeneralView extends Marionette.CompositeView
	template: Handlebars.compile $('#formMessage').html()
	childView : MessageView
	ChildViewContainer : '#content'

	events:
		'submit form': 'ajouter'

	ui:
		input: '#newTodo'

	ajouter : (e) ->
		e.preventDefault()
		@collection.add
			contenu: @ui.input.val()
		@ui.input.val null
		console.log 'collection,', @collection

MyApp.addRegions
	content: '#form'

MyApp.addInitializer ->
	MyApp.myMessages = new Backbone.Collection

	MyApp.content.show new GeneralView
		collection: MyApp.myMessages

MyApp.start()
