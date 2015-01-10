define(['backbone'], function (Backbone) {

    var count = 3;
    var el = 'def';

    var dodata = function () {
        var mas = [];
        var el = 'Элемент ';
        for (var i = 1; i < 301; i++) {
            var obj = {};
            obj.name = el + i;
            mas.push(obj);
            delete obj;
        }

        return mas;
    }();


    var Model = Backbone.Model.extend({

        default: {
            'id': '',
            'name': '',
            'class': '',
            'checked': ''
        },

        initialize: function () {
            this.doDefObjData();
        },

        doDefObjData: function () {
            this.set('id', this.get('name').match(/\d{1,3}/)[0]);
            this.attributes.class = 'el';
            if (this.id === '1' || this.id === '2' || this.id === '3') {
                this.attributes.checked = true;
            } else {
                this.attributes.checked = false;
            }
        }

    });

    var Col = Backbone.Collection.extend({

        model: Model
    });

    return {
        el: el,
        count: count,
        dodata: dodata,
        Model: Model,
        Col: Col
    };
})