define(['backbone'], function (Backbone) {

    var statusDef = [{ 'elem': '1 элемент' }, { 'elem': '2 элемента' }, { 'elem': '3 элемента' }];

    var Model = Backbone.Model.extend({
        default: {
            elem: ''
        }
    });

    var Col = Backbone.Collection.extend({
        model: Model
    });

    return {
        statusDef: statusDef,
        Col: Col
    };
})