import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(
        public navCtrl: NavController,
        public alertCtrl: AlertController
    ) {}

    enterTalk() {
        const prompt = this.alertCtrl.create({
            title: 'Nova conversa',
            inputs: []
        });

        prompt.present();
    }
}
