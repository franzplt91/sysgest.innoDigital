sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/m/MessageBox',
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast",
    "pe/com/seidor/sap/decor/ventas/app",
    "pe/com/seidor/sap/decor/ventas/services/centrosServices",
    "pe/com/seidor/sap/decor/ventas/services/surtidosServices",
    "pe/com/seidor/sap/decor/ventas/services/documentosServices",
    "pe/com/seidor/sap/decor/ventas/services/comprasServices",
    "pe/com/seidor/sap/decor/ventas/services/materialesServices",
    "sap/ui/model/Filter",
    "pe/com/seidor/sap/decor/ventas/util/UtilHome"
], function (Controller, JSONModel, MessageBox, UIComponent, MessageToast,
    app, centrosServices, surtidosServices, documentosServices,
    comprasServices, materialesServices, Filter, UtilHome) {

        "use strict";

        return Controller.extend("pe.com.seidor.sap.decor.ventas.controller.Home", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.attachRoutePatternMatched(this.onRouteMatched, this);

            },

            onRouteMatched: function (oEvent) {
                
            },

            //Documentos----------------------
            goDocNuevo: function (oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocNuevo");

            },
            goDocModificar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocModificar");
            },
            goDocVisualizar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocVisualizar");
            },
            goDocBuscar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocBuscar");
            },
            goDocInstalacion: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocInstalacion");
            },
            goDocImprimir: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocImprimir");
            },
            goDocFlujo: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appDocFlujo");
            },




            //Stock------------------------------

            goStockDisponible: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appStockDisponible");
            },
            goStockporLlegar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appStockporLlegar");
            },
            goStockporPedir: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appStockporPedir");
            },


            //Reclamos----------------------------

            goRecNuevo: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appRecNuevo");
            },
            goRecModificar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appRecModificar");
            },
            goRecVisualizar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appRecVisualizar");
            },
            goRecBuscar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appRecBuscar");
            },
            goRecImprimir: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appRecImprimir");
            },



            //Quejas------------------------------
            goQueNuevo: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appQueNuevo");
            },
            goQueModificar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appQueModificar");
            },
            goQueVisualizar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appQueVisualizar");
            },
            goQueBuscar: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appQueBuscar");
            },
            goQueImprimir: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appQueImprimir");
            },




            //Usuario-----------------------------

            goUsuInformacion: function(oEvent){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appUsuInformacion");
            },

        });
    });