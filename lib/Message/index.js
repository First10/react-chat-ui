"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Message = function Message(messageData) {
    _classCallCheck(this, Message);

    this.id = messageData.id;
    this.message = messageData.message;
    this.senderName = messageData.senderName || undefined;
    this.type = messageData.type || null;
    this.image = messageData.image || null;
    this.stepID = messageData.stepID || null;
};

exports.default = Message;
//# sourceMappingURL=index.js.map