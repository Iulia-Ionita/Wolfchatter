import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/message.model';
import { ChatBoxService } from './chat-box.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-chat-box',
    templateUrl: './chat-box.component.html',
    styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
    messages: Message[];
    newMessage: Message;
    messageDate: Date;
    chatBox: FormGroup;
    username = new FormControl('');
    message = new FormControl('');

    constructor(
        private chatBoxService: ChatBoxService
    ) {
        this.chatBox = new FormGroup({
            'username': this.username,
            'message': this.message
        });
    }

    ngOnInit() {
        this.chatBoxService.clearAllMessages();
        this.messages = this.chatBoxService.getMessages();
        this.messageDate = new Date();
        this.newMessage = new Message('' , '');
    }

    /* Clears data from the message input field */
    onClearMessage() {
        this.newMessage.message = '';
    }

    onAddAnonymous() {
        this.newMessage.username = 'Anonymous';
    }

    /* Add new message to the window */
    onAddMessage() {
        this.newMessage.date = this.messageDate;
        this.chatBoxService.addNewMessage(this.newMessage);
        this.newMessage = new Message('' , '');
    }
}
