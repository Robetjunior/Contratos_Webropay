"use strict";

var utils = require("../utils/writer.js");
var Contract = require("../service/ContractService");

// ADD UM NOVO CONTRATO
module.exports.addContract = function addContract(req, res, next) {
  var body = req.swagger.params["body"].value;
  Contract.addContract(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
