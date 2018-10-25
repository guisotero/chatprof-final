import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';

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
            inputs: [
                {
                    name: 'codigo',
                    placeholder: 'Código do grupo'
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: data => {
                        this.navCtrl.push(TalkPage);
                    }
                }
            ]
        });

        prompt.present();
    }
}
