import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConversationService } from './../../services/conversation.service';
import { Paginated } from './../../interfaces/paginated';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  private conversations: Paginated;

  constructor(
    private activatedRoute: ActivatedRoute,
    private conversationService: ConversationService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.conversations = data.conversations;
    });
  }

}
