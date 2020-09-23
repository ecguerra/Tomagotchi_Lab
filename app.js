class Tomagotchi {
    constructor(name) {
        this.name = name
        this.age = 0
        this.hunger = 3
        this.sleepiness = 3
        this.boredom = 3
    }
    feed() {
        this.hunger = 1
    }
    play() {
        this.boredom = 1
    }
}