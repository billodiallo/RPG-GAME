import Spawner from './Spawner';
import PlayerModel from './PlayerModel';
import { getTiledProperty, SpawnerType } from './utils';

export default class GameManager {
    constructor(scene, mapData) {
      this.scene = scene;
      this.mapData = mapData;
  
      this.spawners = {};
      this.chests = {};
      this.monsters = {};
      this.players = {};
  
      this.playerLocations = [];
      this.chestLocations = {};
      this.monsterLocations = {};
    }