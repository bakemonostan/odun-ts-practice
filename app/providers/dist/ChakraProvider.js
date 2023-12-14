"use client";
"use strict";
exports.__esModule = true;
exports.ChakraAppProvider = void 0;
var react_1 = require("@chakra-ui/react");
function ChakraAppProvider(_a) {
    var children = _a.children;
    return React.createElement(react_1.ChakraProvider, null, children);
}
exports.ChakraAppProvider = ChakraAppProvider;
