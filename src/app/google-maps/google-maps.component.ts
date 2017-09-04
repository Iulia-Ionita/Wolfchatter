import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { Marker } from '../shared/marker.model';
import { ChatBoxService } from '../chat-box/chat-box.service';

@Component({
    selector: 'app-google-maps',
    templateUrl: './google-maps.component.html',
    styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
    title = 'Google Maps';
    lat = 46.774995;
    lng = 23.587567;
    infoWindowOpened = null;
    markers: Marker[] = [
        new Marker(46.774995, 23.587567 , true)
    ];

    constructor(
        private chatBoxService: ChatBoxService
    ) {
    }

    ngOnInit() {
    }

    /* Clears data from the message input field */
    public clickedMarker(latitude: number, longitude: number , infoWindow, index: number) {
        if ( this.infoWindowOpened ===  infoWindow) {
            return;
        }

        if (this.infoWindowOpened != null) {
            this.closeInfoWindow(this.infoWindowOpened);
        }

        this.infoWindowOpened = infoWindow;
    }

    public mapClicked($event: MouseEvent) {
        this.markers.push(new Marker($event['coords'].lat, $event['coords'].lng , true));
    }

    public closeInfoWindow(infoWindow) {
        infoWindow.close();
    }
}
