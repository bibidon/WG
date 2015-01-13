define(["jquery", "backbone", "underscore", "handlebars", "models/data", "models/defData", "views/defaulView", "views/elView", 'views/dialogWinView', 'views/cbView'], function ($, Backbone, _, Handlebars, data, defData, DefaulView, ElView, Dil, Ch) {

    var defaulData = new defData.Col(defData.statusDef);
    var elementData = new data.Col(data.dodata);

    //function doDefData() {
    //    var defaulData = new defData.Col(defData.statusDef);
    //    return defaulData;
    //}

    //function doData() {
    //    var elementData = new data.Col(data.dodata);
    //    return elementData;
    //}

    function doDefView() {
        var defView = new DefaulView();
    }

    function doElView() {
        var elView = new ElView();
    }

    return {
        defaulData: defaulData,
        elementData: elementData,
        //doDefData: doDefData,
        //doData: doData,
        doDefView: doDefView,
        doElView: doElView
    };
})