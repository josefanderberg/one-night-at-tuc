import Player from './player.js'
import Backpack from './backpack.js';
import Item from './item.js'
import Classroom from './locations/classroom.js';

export default class Game {

    #player;

    constructor() {
        const backpack = new Backpack();
        const map = new Item("Map");
        backpack.add(map);
        backpack.add(new Player("The Clown", null));
        backpack.see();

        this.#player = new Player("Kicki", backpack);
        new Classroom(this.#player);
    }
}