import Phaser from 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
    constructor() {
      super('Credits');
    }

    create() {
      this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
      this.thanksText = this.add.text(0, 0, 'Grateful to Microverse', { fontSize: '32px', fill: '#c41425' });
      this.madeByText = this.add.text(0, 0, 'Created By: billo[x360]', { fontSize: '26px', fill: '#fff' });
      this.contactText = this.add.text(0, 0, 'billodiallonet@gmail.com', { fontSize: '18px', fill: '#32a852' });
      this.openText = this.add.text(0, 0,
        'Special thanks to the Developers at the OpenGameArt'
        + '\n         for the sound, music and characters',
        { fontSize: '20px', fill: '#fff' });
      this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);
  
      Phaser.Display.Align.In.Center(
        this.creditsText,
        this.zone,
      );
    }