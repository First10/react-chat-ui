/**
 * A statndardized message object for use
 * in rendering messages in the chat feed.
 */

interface MessageData {
  id: number | string;
  message: string;
  senderName?: string;
  type?: string;
  image?: string;
  step?: number;
  stepID?: number;
}

export default class Message {
  /**
   * Message object for organizing and storing current message data.
   */
  id: number | string;
  message: string;
  senderName?: string;
  type?: string;
  image?: string;
  step?: number;
  stepID?: number;
  constructor(messageData: MessageData) {
    this.id = messageData.id; // id of the sender (0 is reserved for "blue bubble")
    this.message = messageData.message;
    this.senderName = messageData.senderName || undefined;
    this.type = messageData.type || null;
    this.image = messageData.image || null;
    this.stepID = messageData.stepID || null;
    this.step = messageData.step || null;
  }
}
