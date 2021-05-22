import Phaser from 'phaser';

export default class Monster extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, key, frame, id, health, maxHealth) {
    super(scene, x, y, key, frame, 'Monster');
    this.scene = scene;
    this.id = id;
    this.health = health;
    this.maxHealth = maxHealth;