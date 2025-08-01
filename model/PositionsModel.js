const {mongoose} =  require("mongoose");
const {PositionsSchema} = require("../schemas/PositionsSchemaa");
const PositionsModel = new mongoose.model("position", PositionsSchema);

module.exports = {PositionsModel};