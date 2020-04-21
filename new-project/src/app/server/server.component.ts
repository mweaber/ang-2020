import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent { 
    serverID:string = '10.345.232.356';
    serverStatus:string = 'offline';

    getServerStatus() {
        return this.serverStatus
    }

}