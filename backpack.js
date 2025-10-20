export default class Backpack {

    #contents = []

    add(item) {
        this.#contents.push(item)
        console.log("Added " + item.name + " to backpack");

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