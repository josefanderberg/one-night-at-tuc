import Player from './player.js'
import Backpack from './backpack.js';
import Item from './item.js'

export default class Game {

    #player;

    constructor() {
        const backpack = new Backpack();
        const map = new Item("Map");
        backpack.add(map)
        backpack.see();

        this.#player = new Player("Kicki", backpack);
    }
}