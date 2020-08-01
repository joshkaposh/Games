import Enemies from '../enemy/Enemies.js';
const enemies = new Enemies(10)
enemies.render()

let bulletCount = 0
// Removing/adding bullets

class ProjectileLoop {
    constructor(loopedFunction, id, position, condition) {
        this.loopedFunction = loopedFunction
        this.id = id
        this.position = position
        this.condition = condition
    }
    startLoop() {
        this.timer = setInterval(this.loopedFunction.bind(this, this.id, this.position, this.condition), 5)
    }

}

class ProjectilePosition{
    constructor(pos) {
        this.pos = pos
    }
}
class Projectile{
    constructor(position) {
        this.position = position
    }

    getStats() {
        console.log(`position: ${this.position.x},${this.position.y}`);
    }

    render(bulletNum) {
        const node = document.createElement('div')
        node.setAttribute('class', 'projectile')
        node.setAttribute('id', `bullet-${bulletNum}`)
        node.style.top = `${this.position.y + 20}px`
        document.getElementById('grid').appendChild(node)
    }

    start(bulletCount) {
        const id = document.getElementById(`bullet-${bulletCount}`)
        let x = 0
        const y = this.position.y
        const pos = {x: 0, y: y}
        const projectilePosition = new ProjectilePosition(pos)



        // Provided func for projectile movement
        const loop = new ProjectileLoop(function (id, position, condition) {


            if (position.x === condition) {

                enemies.removeEnemy(position.y, pos.y % 50) 

                console.log(enemies.enemyArray);


                console.log(`------------------------------------------`);
                clearInterval(this.timer)
                bulletCount = 0
                this.timer = 0
                position.x = 0

                id.parentNode.removeChild(id)

            } else {

                position.x += 1
                id.style.left = `${position.x}%`
            }


        }, id, projectilePosition.pos, 97)
        loop.startLoop()

    }

}



export default class Gun {
    constructor(pos) {
        this.pos = pos
    }
    shoot() {
        const grid = document.getElementById('grid')
        if (grid.children.length === 1) {
            console.log('theres no bullets');
            bulletCount++
            const projectile = new Projectile(this.pos, 10)
            projectile.getStats()
            projectile.render(bulletCount)
            projectile.start(bulletCount)
        } else {
            console.log('theres a bullet');

        }

        



    }
}