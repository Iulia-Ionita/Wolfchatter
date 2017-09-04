import { Message } from '../shared/message.model';

export class ChatBoxService {
    private message;
    private messages: Message[] = [
        new Message('Admin' , 'Hello and Welcome to this channel!')
    ];

    getMessages() {
        return this.messages;
    }

    addNewMessage(message) {
        this.messages.push(message);
        this.getMessages();
    }

    clearAllMessages() {
        this.messages = new Array<Message>();
        this.messages.push(new Message('Admin' , 'Hello and Welcome to this channel!'));
        this.getMessages();
    }
}
