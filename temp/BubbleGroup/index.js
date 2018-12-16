"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ChatBubble_1 = require("../ChatBubble");
const styles_1 = require("./styles");
class BubbleGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    renderGroup(messages, id) {
        const { bubblesCentered, bubbleStyles, showSenderName, chatBubble, senderName, bubbleClassUser, bubbleClassBot } = this.props;
        const ChatBubble = chatBubble || ChatBubble_1.default;
        const sampleMessage = messages[0];
        const messageNodes = messages.map((message, i) => {
            return (React.createElement(ChatBubble, { key: i, message: message, type: message.type, bubblesCentered: bubblesCentered, bubbleStyles: bubbleStyles, bubbleClassUser: bubbleClassUser, bubbleClassBot: bubbleClassBot }));
        });
        return (React.createElement("div", { style: styles_1.default.chatbubbleWrapper },
            showSenderName &&
                ((senderName || sampleMessage.senderName) !== '' &&
                    (sampleMessage.id !== 0 && (React.createElement("h5", { style: styles_1.default.bubbleGroupHeader }, senderName || sampleMessage.senderName)))),
            messageNodes));
    }
    render() {
        const { messages, id } = this.props;
        return this.renderGroup(messages, id);
    }
}
exports.default = BubbleGroup;
//# sourceMappingURL=index.js.map