﻿define(["jquery", "backbone", "underscore", "handlebars", "models/data", 'views/dialogWinView', 'views/cbView'], function ($, Backbone, _, Handlebars, data, Dil, Ch) {

    function defCounter() {
        var count = 0;
        return function () {
            return ++count;
        };
    }

    function doObjData() {
        var masSup = [];
        for (var i = 0; i < data.dodata.length; i++) {
            var obj = {};
            obj.id = data.dodata[i];
            masSup.push(obj);
            delete obj;
        }
        return masSup;
    }

    function quantityEl() {
        var len = $('.el').length;
        return len;
    }

    var mas = doObjData();
    var counter = defCounter();
    var statusDef = [{ 'elem': '1 элемент' }, { 'elem': '2 элемента' }, { 'elem': '3 элемента' }];

    return {
        counter: counter,
        mas: mas,
        statusDef: statusDef,
        quantityEl: quantityEl
    };
})