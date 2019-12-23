"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3010;
app.listen(port, (err) => {
    if (err) {
        return console.log("Error starting");
    }
    return console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map