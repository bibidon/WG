define(["jquery", "backbone", "underscore", "handlebars", "models/data", "views/defaulView", "service"], function ($, Backbone, _, Handlebars, data, DefV, service) {

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#choiceEl').html()),

        initialize: function () {
            this.collection = new data.Col(data.dodata);
            this.render();
        },

        render: function () {
            if ($('.el').length === 0) {
                $('.sel').after(this.template(this.defMethod()));
                return this;
            } else {
                $('.el:last').after(this.template(this.defMethod()));
                return this;
            }
        },

        events: {
            'click .el > a': 'supplementaryMethod'
        },

        supplementaryMethod: function (event) {
            if (event.target.nodeName === 'A') {
                var ev = event.target.parentElement;
                var id = ev.innerHTML.match(/\d/);
                var idNum = Number(id);
                service.mas[idNum - 1].checked = false;
                $(ev).remove();
                var vw = new DefV();
            }
        },

        //copyMas: function () {
        //    var cMas = service.mas.slice(0);
        //    return cMas;
        //},

        defMethod: function () {
            //var mass = this.copyMas();
            var defEl = {};
            for (var i = 0; i < service.copy.length; i++) {
                if (service.copy[i].checked === true) {
                    if (data.el === 'def') {
                        defEl.class = 'el';
                        defEl.number = service.copy[i].id;
                        defEl.ch = service.copy[i].checked;
                        //service.checkedEl.push(mass[i]);
                        service.copy[i].checked = false;
                        return defEl;

                    }
                    if (data.el === 'win') {
                        defEl.class = 'elWin';
                        defEl.number = service.mas[i].id;
                        defEl.ch = service.mas[i].checked;
                    }
                }
            }
        }
    });

    return View;
})