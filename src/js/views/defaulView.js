define(["jquery", "backbone", "underscore", "handlebars", "models/data", "views/dialogWinView", "views/cbView"], function ($, Backbone, _, Handlebars, data, Dil, Ch) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#defaultWin').html()),

        initialize: function (temp) {
            this.render(temp);
        },

        render: function (temp) {
            this.$el.html(this.template(temp));
            return this;
        },

        events: {
            'click .greenBtn': 'supplementaryMethod'
        },

        supplementaryMethod: function (event) {
            if (event.target.nodeName === 'INPUT') {
                var dialog = new Dil();
                var cBox = new Ch();
            }
        }
    });

    return View;
})