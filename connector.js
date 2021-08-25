const fs = require('fs');
const path = require("path");

module.exports = function (RED) {
    const flow = fs.readFileSync(path.join(__dirname, "subflow.json"));
    RED.nodes.registerSubflow(JSON.parse(flow));
}
