define(["jquery", "backbone", "underscore", "handlebars", "models/data", 'views/dialogWinView', 'views/cbView'], function ($, Backbone, _, Handlebars, data, Dil, Ch) {

    var defaul = { 'el': '3 элемента' };
    var choiceTwo = { 'el': '2 элемента' };
    var choiceOne = { 'el': '1 элемент' };

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#defaultWin').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            if (data.count === 3) {
                this.$el.html(this.template(defaul));
                return this;
            }
            if (data.count === 2) {
                this.$el.html(this.template(choiceTwo));
                return this;
            } else {
                this.$el.html(this.template(choiceOne));
                return this;
            }
        },

        events: {
            'click .greenBtn': 'supplementaryMethod'
        },

        supplementaryMethod: function () {
            var dialog = new Dil();
            var cBox = new Ch();
        }
    });

    return View;
})