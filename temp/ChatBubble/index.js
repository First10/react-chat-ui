"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const defaultBubbleStyles = {
    userBubble: {},
    chatbubble: {},
    text: {},
};
class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { bubblesCentered, message, bubbleClassUser, bubbleClassBot } = this.props;
        let { bubbleStyles } = this.props;
        bubbleStyles = bubbleStyles || defaultBubbleStyles;
        const { userBubble, chatbubble, text } = bubbleStyles;
        const chatBubbleStyles = message.id === 0
            ? Object.assign({}, styles_1.default.chatbubble, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal, chatbubble, userBubble) : Object.assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, bubblesCentered
            ? {}
            : styles_1.default.recipientChatbubbleOrientationNormal, chatbubble, userBubble);
        const chatBubbleClass = message.id === 0 ? bubbleClassBot : bubbleClassUser;
        if (message.message !== '' && message.message !== null) {
            return (React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper) },
                React.createElement("div", { style: chatBubbleStyles, className: chatBubbleClass },
                    React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, message.message))));
        }
        return null;
    }
}
exports.default = ChatBubble;
//# sourceMappingURL=index.js.map