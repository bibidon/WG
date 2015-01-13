define(["jquery", "backbone", "underscore", "handlebars", "models/data", "views/defaulView", "service"], function ($, Backbone, _, Handlebars, data, DefV, service) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#choiceEl').html()),

        initialize: function () {
            this.collection = service.elementData;
            this.choiseRender();
        },

        render: function (item) {
            if ($('.el').length === 0) {
                $('.sel').after(this.template(item.toJSON()));
                return this;
            } else {
                $('.el:last').after(this.template(item.toJSON()));
                return this;
            }
        },

        choiseRender: function () {
            _.each(this.collection.models, function (item) {
                if (item.get('checked') === true) {
                    this.render(item);
                }
            }, this);
        },

        events: {
            'click .el > a': 'supplementaryMethod'
        },

        supplementaryMethod: function (event) {
            var ev = event.target.parentElement;
            var evId = $(ev).text().match(/\d{1,4}/)[0];
            this.collection.get(evId).set('checked', false);
            $(ev).remove();
            var newDefView = service.doDefView();
        }
    });

    return View;
})