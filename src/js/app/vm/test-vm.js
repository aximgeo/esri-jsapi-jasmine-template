(function () {
    "use strict";
    define([
        'dojo/_base/declare',
        'dojo/dom-construct',
        'text!app/views/test-view.html',
    ], function (
        declare,
        dc,
        view
        ) {
        return declare(null, {
            constructor: function () {

            },

            loadView: function (parentElement) {
                dc.place(view, parentElement, "last");
            }
        });
    });
} ());