import Phaser from 'phaser';

import logoImg from '../../assets/zenva_logo.png';
import button1Img from '../../assets/images/ui/blue_button01.png';
import itemsImg from '../../assets/images/items.png';
import charactersImg from '../../assets/images/characters.png';
import monstersImg from '../../assets/images/monsters.png';
import backgroundImg from '../../assets/level/background-extruded.png';

const mapJSON = require('../../assets/level/large_level1.json');

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
