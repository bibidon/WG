define(["jquery", "backbone", "underscore", "handlebars", "models/data"], function ($, Backbone, _, Handlebars, data) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#dialog').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.append(this.template());
        }
    });
    return View;
})