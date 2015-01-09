define(["jquery", "backbone", "underscore", "handlebars", "models/data", "views/dialogWinView", "views/cbView", "service"], function ($, Backbone, _, Handlebars, data, Dil, Ch, service) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#defaultWin').html()),

        initialize: function () {
            this.checked();
        },

        render: function (temp) {
            this.$el.html(this.template(temp));
            return this;
        },

        events: {
            'click .greenBtn': 'supplementaryMethod'
        },

        checked: function () {
            var j = 0;
            for (var i = 0; i < service.mas.length; i++) {
                if (service.mas[i].checked === true) {
                    j++;
                }
            }
            if (j === 1) {
                this.render(service.statusDef[0]);
            }
            if (j === 2) {
                this.render(service.statusDef[1]);
            }
            if (j === 3) {
                this.render(service.statusDef[2]);
            }
        },

        supplementaryMethod: function (event) {
            if (event.target.nodeName === 'INPUT') {
                var dialog = new Dil();
                var cBox = new Ch();
            }
        },
    });

    return View;
})