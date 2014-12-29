define(['models/data', 'views/defaulView'], function (data, DefV) {

    var init = (function () {

        var that = null;
        var appViewdefaul;

        var model = function () {
            that = this;
        };

        model.prototype = {
            constructor: model,

            render: function () {
                that.defaulRender();
            },

            defaulRender: function () {
                appViewdefaul = new DefV();
            }
        };

        return model;
    })();

    return init;
})