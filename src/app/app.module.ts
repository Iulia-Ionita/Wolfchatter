import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatBoxService } from './chat-box/chat-box.service';

@NgModule({
    declarations: [
        AppComponent,
        GoogleMapsComponent,
        ChatBoxComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAmcSdbpcyuwKcg49TbLFahIBzdyITBcqo'
        })
    ],
    providers: [ChatBoxService],
    bootstrap: [AppComponent]
})
export class AppModule { }
