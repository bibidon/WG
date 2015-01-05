define(["jquery", "backbone", "underscore", "handlebars", "models/data"], function ($, Backbone, _, Handlebars, data) {

    var View = Backbone.View.extend({

        el: $('.chForm'),

        template: Handlebars.compile($('#check').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            for (var i = 0; i < 300; i++) {
                $('.chForm').append(this.template);
            }
            return this;
        }
    });

    return View;
})