define(["jquery", "backbone", "underscore", "handlebars", "models/data"], function ($, Backbone, _, Handlebars, data) {

    var elClassDef = { 'class': 'el' };
    var elClassWin = { 'class': 'elWin' };

    var View = Backbone.View.extend({

        el: $('.sel'),

        template: Handlebars.compile($('#choiceEl').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            if (data.el === 'def') {
                $('.sel').after(this.template(elClassDef));
                return this;
            }
            if (data.el === 'win') {
                $('.sel').after(this.template(elClassWin));
                return this;
            }
        }
    });

    return View;
})