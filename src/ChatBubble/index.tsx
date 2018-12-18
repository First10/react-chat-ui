import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered, message, bubbleClassUser, bubbleClassBot } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatbubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const chatBubbleStyles =
      message.id === 0
        ? {
          ...styles.chatbubble,
          ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
          ...chatbubble,
          ...userBubble,
        }
        : {
          ...styles.chatbubble,
          ...styles.recipientChatbubble,
          ...bubblesCentered
            ? {}
            : styles.recipientChatbubbleOrientationNormal,
          ...chatbubble,
          ...userBubble,
        };
    const chatBubbleClass = message.id === 1 ? bubbleClassBot : bubbleClassUser;

    if (message.message !== '' && message.message !== null && message.message !== undefined) {
      return (
        <div
          style={{
            ...styles.chatbubbleWrapper,
          }}
        >
          <div style={chatBubbleStyles} className={chatBubbleClass}>
            <p style={{ ...styles.p, ...text }}>{message.message}</p>
          </div>
          {message.image && (<img className="cb-chat-image" src={message.image} alt="" />)}
        </div>
      );
    }
    return null;

  }
}

export { ChatBubbleProps };
