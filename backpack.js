export default class Backpack {

    #contents = []

    

    add(item) {
        if (item.constructor.name == "Item") {
        this.#contents.push(item)
        console.log("Added " + item.name + " to backpack");
        } else {
            console.error("You can't put " + item.constructor.name + " in a backpack!");
        }
    }

    take(itemName) {
        for(let item of this.#contents) {
            if (item.name == itemName) {
                return item;
            }
        }
    }
    see(){
        console.log("The backpack contains");
        for(let item of this.#contents) {
            console.log(item.name)
        }
    }
}