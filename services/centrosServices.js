sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/UtilModel"
], function(ODataModel, UtilModel) {
    "use strict";

    return {

        // Listar centros
        list: function(callback) {

            var URLService = "ZPE_FIORI_LIST_PLANT_SRV/InputSet?$filter=IWerks eq ''&$expand=NavT001W";

            var contexto = {};
            contexto.servicio = "centroServices.List()";
            contexto.url = URLService;
            contexto.objeto = "NavT001W";

            var objSelect = {
                Werks: '',
                Name1: 'SELECCIONE CENTRO'
            }

            UtilModel.requestODataGet(contexto, function(respuesta){

                return callback(respuesta);

            },objSelect);

        }
    };
});