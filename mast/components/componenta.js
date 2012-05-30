Mast.components.ComponentA = Mast.Component.extend({
	events: {},

	init: function () {
		this.on('dropdownSubmit',this.changeName);
	},
	
	changeName: function(formFieldValue) {
		this.set('name',formFieldValue);
	},

	// Subcomponents to register
	subcomponents: {
		menu1:{
			component: "DropdownComponent",
			outlet: ".ddown"
		},
		menu2:{
			component: "DropdownComponent",
			outlet: ".ddown"
		}
	},

	model: new Mast.Model({
		name:'THING1 rendered!  Appended a dropdown component as well.'
	}),

	template: '.test',

	outlet:'.sandbox',

	// Triggered after each render
	afterRender: function () {
		this.$el.draggable();
	}
});