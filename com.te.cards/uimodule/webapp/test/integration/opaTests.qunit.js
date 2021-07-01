/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["com/te/cards/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
