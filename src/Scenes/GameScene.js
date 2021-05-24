import Phaser from 'phaser';
import PlayerContainer from '../Classes/player/PlayerContainer';
import Chest from '../Classes/Chest';
import Monster from '../Classes/Monster';
import Map from '../Classes/Map';
import GameManager from '../GameManager/GameManager';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.scene.launch('Ui');
  }

  create() {
    this.createMap();
    this.createAudio();
    this.createGroups();
    this.createInput();

    this.createGameManager();
  }

  update() {
    if (this.player) this.player.update(this.cursors);
  }

