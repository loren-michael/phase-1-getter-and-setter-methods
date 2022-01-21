
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return (this.radius * this.radius) * Math.PI
    }

    set diameter(num) {
        this.radius = num / 2
    }

    set circumference(num) {
        this.radius = (num/2) / Math.PI
    }

    set area(num) {
        this.radius = Math.sqrt( num / Math.PI )
    }

}
