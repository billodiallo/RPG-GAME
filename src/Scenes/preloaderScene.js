import Phaser from 'phaser';
import blueButton1Img from '../../assets/ui/blue_button02.png';
import blueButton2Img from '../../assets/ui/blue_button03.png';
import phaserLogoImg from '../../assets/logo.png';
import boxImg from '../../assets/ui/grey_box.png';
import checkedBoxImg from '../../assets/ui/blue_boxCheckmark.png';
import upKeyImg from '../../assets/commands/KeyboardButtonsDir_up.png';
import downKeyImg from '../../assets/commands/KeyboardButtonsDir_down.png';
import leftKeyImg from '../../assets/commands/KeyboardButtonsDir_left.png';
import rightKeyImg from '../../assets/commands/KeyboardButtonsDir_right.png';
import spaceKeyImg from '../../assets/commands/OnscreenKeyboardButtonsSpace.png';
import upKeyImg0 from '../../assets/commands/KeyboardButtonsDir_up0.png';
import downKeyImg0 from '../../assets/commands/KeyboardButtonsDir_down0.png';
import leftKeyImg0 from '../../assets/commands/KeyboardButtonsDir_left0.png';
import rightKeyImg0 from '../../assets/commands/KeyboardButtonsDir_right0.png';
import spaceKeyImg0 from '../../assets/commands/OnscreenKeyboardButtonsSpace0.png';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }
