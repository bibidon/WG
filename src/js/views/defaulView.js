define(["jquery", "backbone", "underscore", "handlebars", "models/data", "models/defData", "views/dialogWinView", "views/cbView", "service"], function ($, Backbone, _, Handlebars, data, defData, Dil, Ch, service) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#defaultWin').html()),

        initialize: function () {
            this.dataCollection = service.elementData;
            this.collection = service.defaulData;
            this.choiseRender();
        },

        render: function (item) {
            this.model = item;
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        choiseRender: function () {
            var i = 0;
            _.each(this.dataCollection.models, function (item) {
                if (item.get('checked') === true) {
                    i++;
                }
            });

            if (i === 1) {
                this.render(this.collection.models[0]);
            }
            if (i === 2) {
                this.render(this.collection.models[1]);
            }
            if (i === 3) {
                this.render(this.collection.models[2]);
            }
        },

        events: {
            'click .greenBtn': 'supplementaryMethod'
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