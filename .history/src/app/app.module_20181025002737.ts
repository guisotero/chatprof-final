import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewGroupPage } from '../pages/new-group/new-group';
import { NewTalkPage } from '../pages/new-talk/new-talk';
import { TalkPage } from '../pages/talk/talk';
import { TalkDetailPage } from '../pages/talk-detail/talk-detail';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        NewGroupPage,
        NewTalkPage,
        TalkPage,
        TalkDetailPage
    ],
    imports: [BrowserModule, IonicModule.forRoot(MyApp)],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LoginPage,
        NewGroupPage,
        NewTalkPage,
        TalkPage,
        TalkDetailPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {}
