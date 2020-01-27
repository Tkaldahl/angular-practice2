import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  // styleUrls: ['./servers.component.css']
})
export class ServerComponent implements OnInit {
  constructor() { }

  serverId: number = 10;
  serverStatus: string = 'offline';

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
