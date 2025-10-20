import Location from './location.js'
import { input } from '@inquirer/prompts'

export default class Hall extends Location {

    #floorIsMopped = this.floor

    constructor(player) {
        super(player);
        this.message = 'You are in a dim large hall. There is water p the floow, seemingly comming from the windows. There is a narrow corridor ahead, bathrooms in front of you and a kitchen area to the left. Commands: mop floor, go corridor, go bathroom, go kitchen'
        this.menu();
    }
    async menu() {
        console.clear()
        const response = await input({message: this.message});

        if(response == 'mop floor') {
            console.log("Mop.. mop.. mop.. good job!")
            this.#floorIsMopped = true
            await this.menu();
            return;
        }
        if (!this.#floorIsMopped) {
            console.log('You fall and now you are wet and in pain')
        }

        switch (response) {
            case "go corridor":
                return;
            case "go bathroom":
                return;
            case "go kitchen":
                return;
            default:
                console.log("What??")
        }
        await this.menu();
    }
    
}