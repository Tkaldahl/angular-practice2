import {Component, OnInit} from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  allowNewServer = false;
  newServerStatus = 'No new servers created';
  serverName = '';
  serverCreated = false;

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateNewServer() {
    this.serverCreated = true;
    this.newServerStatus = 'Server created! New server name: ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }
}
