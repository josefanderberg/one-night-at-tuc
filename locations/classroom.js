import { input } from '@inquirer/prompts'
import Location from './location.js'
import Hall from './hall.js'

export default class Classroom extends Location {

    constructor(player) {
        super(player);
        this.message = "You wake up in your classroom, and there is noone else there. It is getting dark outside and you feel eerie... There is a main door and an emergency exit. You are wearing a backpack you don't recognize.. commands: go door, go exit";
        this.menu()
    }

    async menu() {
        console.clear()

        const response = await input({message: this.message});
        
        switch (response) {
            case "go door":
                new Hall(this.player);
                return;
            case "go exit":
                console.log("That exit seems to be blocked by something.")
                break;
            default:
                console.log("What??")
        }
        await this.menu();
    }
}