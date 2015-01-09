define(["jquery", "backbone", "underscore", "handlebars", "models/data", 'views/dialogWinView', 'views/cbView'], function ($, Backbone, _, Handlebars, data, Dil, Ch) {


    function doObjData() {
        var masSup = [];
        for (var i = 0; i < data.dodata.length; i++) {
            var obj = {};
            obj.id = data.dodata[i];
            if (i < 3) {
                obj.checked = true;
            } else {
                obj.checked = false;
            }
            masSup.push(obj);
            delete obj;
        }

        return masSup;
    };

    //function copyMas() {
    //    var cMas = mas.slice(0);
    //    return cMas;
    //}

    var mas = doObjData();
    var copy = mas.slice();
    //delete (copy[0]);
    var statusDef = [{ 'elem': '1 элемент' }, { 'elem': '2 элемента' }, { 'elem': '3 элемента' }];

    return {
        copy: copy,
        mas: mas,
        statusDef: statusDef,
    };
})