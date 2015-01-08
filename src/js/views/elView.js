define(["jquery", "backbone", "underscore", "handlebars", "models/data", "views/defaulView", "service"], function ($, Backbone, _, Handlebars, data, DefV, service) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#choiceEl').html()),

        initialize: function () {
            this.collection = new data.Col(service.mas);
            this.render();
        },

        //renderDef: function () {
        //    var nameAt = [];
        //    $('.el').each(function (ind, el) {
        //        var at = el.getAttribute('name');
        //        nameAt.push(at);
        //    });
        //    for (var i = 0; i < 3; i++) {
        //        for (var j = 0; j < 3; j++) {
        //            if (name[j] === service.masSup[i]) {

        //            }
        //        }
        //    }
        //},

        render: function () {
            if ($('.el').length === 0) {
                $('.sel').after(this.template(this.defMethod()));
                //$('.el').attr('name', service.defId[0]);
                //service.defId.shift();
                return this;
            } else {
                $('.el:last').after(this.template(this.defMethod()));
                //$('.el:last').attr('name', service.defId[0]);
                //service.defId.shift();
                return this;
            }
        },

        events: {
            'click .el > a': 'supplementaryMethod'
        },

        supplementaryMethod: function (event) {
            if (event.target.nodeName === 'A') {
                var ev = event.target.parentElement;
                $(ev).remove();
                var numberEl = service.quantityEl();
                var temp = service.statusDef[numberEl - 1];
                var vw = new DefV(temp);
            }
        },

        defMethod: function () {
            var i = service.counter();
            var defEl = {};
            if (data.el === 'def') {
                defEl.class = 'el';
                defEl.number = service.mas[i].id;
            }
            if (data.el === 'win') {
                defEl.class = 'elWin';
                defEl.number = service.mas[i].id;
            }

            return defEl;
        }
    });

    return View;
})