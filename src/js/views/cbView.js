define(["jquery", "backbone", "underscore", "handlebars", "models/data"], function ($, Backbone, _, Handlebars, data) {

    var View = Backbone.View.extend({

        el: $('.chForm'),

        template: Handlebars.compile($('#check').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            for (var i = 0; i < 300; i++) {
                if (i < 3) {
                    $('.chForm').append(this.template);
                    $('[type=checkbox]:lt(3)').each(function (indx, el) {
                        el.setAttribute('checked', 'true');
                    });
                } else {
                    $('.chForm').append(this.template);
                }
            }
            return this;
        }
    });

    return View;
})