import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SummaryComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule.withServerTransition({appId: 'stats-for-the-office'}),
        FlexLayoutModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
