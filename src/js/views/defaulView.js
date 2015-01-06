define(["jquery", "backbone", "underscore", "handlebars", "models/data", 'views/dialogWinView', 'views/cbView'], function ($, Backbone, _, Handlebars, data, Dil, Ch) {

    var defaul = { 'el': '3 элемента' };
    var choiceTwo = { 'el': '2 элемента' };
    var choiceOne = { 'el': '1 элемент' };
    var mas;

    var View = Backbone.View.extend({

        el: $('body'),

        template: Handlebars.compile($('#defaultWin').html()),

        initialize: function () {
            this.doObjData();
            this.collection = new data.Col(mas);
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
            'click .greenBtn': 'supplementaryMethod',
            'click .el > a': 'supplementaryMethod'
        },

        supplementaryMethod: function (event) {
            if (event.target.nodeName === 'INPUT') {
                var dialog = new Dil();
                var cBox = new Ch();
            }
            if (event.target.nodeName === 'A') {
                var ev = event.target.parentElement;
                $(ev).remove();
            }
        },

        doObjData: function () {
            var masSup = [];
            for (var i = 0; i < data.dodata.length; i++) {
                var obj = {};
                obj.id = data.dodata[i];
                masSup.push(obj);
                delete obj;
            }
            mas = masSup;
        }

    });

    return View;
})