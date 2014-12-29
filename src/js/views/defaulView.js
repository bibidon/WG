define(["jquery", "backbone", "underscore", "handlebars", "models/data"], function ($, Backbone, _, Handlebars, data) {

    var View = Backbone.View.extend({

        el: $('body'),

        templateDef: Handlebars.compile($('#defaultWin').html()),

        template: Handlebars.compile($('#choiceEl').html()),

        initialize: function () {
            this.renderDef();
            this.render();
        },

        renderDef: function () {
            this.$el.html(this.templateDef());
            return this;
        },

        render: function () {
            $('.sel').after(this.template());
        }

    });

    return View;
})