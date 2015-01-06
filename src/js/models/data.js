define(['backbone'], function (Backbone) {

    var counter = false;
    var count = 3;
    var el = 'def';
    //if (counter === false) {
    //    count = 3;
    //}

    var dodata = function () {
        var mas = [];
        var el = 'Элемент ';
        for (var i = 0; i < 300; i++) {
            mas.push(el + i);
        }

        return mas;
    }();


    var Model = Backbone.Model.extend({

        default: {
            id: ''
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