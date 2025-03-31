import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-locked',
  templateUrl: './locked.page.html',
  styleUrls: ['./locked.page.scss'],
  standalone: false,
})
export class LockedPage implements OnInit {
  showFallback = true;
  password = '';
  hasBiometricAuth = false;
  constructor(private modalCtrl: ModalController) {}

  async ngOnInit() {
    //if (Capacitor.isNativePlatform()) {
      const available = await NativeBiometric.isAvailable();
      this.hasBiometricAuth = available.isAvailable;
      if (this.hasBiometricAuth) {
        this.openBiometricAuth();
      } else {
        console.log('Biometric authentication not available');
      }
   // }
  }

  async openBiometricAuth() {
    try {
      await NativeBiometric.verifyIdentity({
        reason: 'your session has timed out',
        title: 'your session has timed out',
        subtitle: 'Use your biometric credential to unlock the app',
      });
      console.log("Authenticated!");
      this.modalCtrl.dismiss({ reset: true });
    } catch (error) {
      console.error('Biometric authentication failed', error);
    }
  }

  unlock() {
    if (this.password === '1234') {
      this.modalCtrl.dismiss({ reset: true });
    } else {
      alert('Incorrect password!');
    }
  }
}
