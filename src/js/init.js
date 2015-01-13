define(["models/data", "views/defaulView", "views/elView", "service"], function (data, DefV, ElV, service) {

    var init = (function () {

        var that = null;
        var appViewdefaul;
        var choiseElView;

        var model = function () {
            that = this;
        };

        model.prototype = {
            constructor: model,

            render: function () {
                that.defaulRender();
                that.elView();
            },

            defaulRender: function () {
                appViewdefaul = new DefV();
            },

            elView: function () {
                choiseElView = new ElV();
            }
        };

        return model;
    })();

    return init;
})