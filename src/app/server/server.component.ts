import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    .online {
      color: white
    }
  `]
})
export class ServerComponent implements OnInit {
  constructor() { }

  serverId = 10;
  serverStatus: string;

  ngOnInit() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor(): string {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
