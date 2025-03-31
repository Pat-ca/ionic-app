import { Component, OnInit } from '@angular/core';
// import { BiometricAuth } from 'capacitor-biometric-auth';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.page.html',
  styleUrls: ['./locked.page.scss'],
  standalone: false,
})
export class LockedPage implements OnInit {
  showFallback = true;
  password = '1234';
  hasBiometricAuth = false;
  constructor(private modalCtrl: ModalController) {}

  async ngOnInit() {
    // const available = await BiometricAuth.isAvailable();
    // this.hasBiometricAuth = available.has;
    // if (this.hasBiometricAuth) {
    //   this.openBiometricAuth();
    // }
  }

  async openBiometricAuth() {
    // const result = await BiometricAuth.verify({
    //   reason: 'Please authenticate to unlock the app',
    // });
    // if(result.verified) {
    //   this.modalCtrl.dismiss({ reset: true });
    // }
  }

  unlock() {
    if (this.password === '1234') {
      this.modalCtrl.dismiss({ reset: true });
    } else {
      alert('Incorrect password!');
    }
  }
}
