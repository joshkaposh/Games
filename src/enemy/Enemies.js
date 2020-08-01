export default class Enemies {
    constructor(enemyCount) {
        this.enemyCount = enemyCount
        this.enemyArray = []
    }

    render() {
        let marginTop = 0;
        for (let index = 0; index < this.enemyCount; index++) {
            const node = document.createElement('div')
            node.setAttribute('class', 'enemy')
            node.setAttribute('id', `enemy-${marginTop}`)
            this.enemyArray.push(index * 50)
            document.getElementById('enemy-area').appendChild(node)
            node.style.top = marginTop + 'px'
            marginTop += 50
        }
        console.log(this.enemyArray);
    }

    removeEnemy(id, y) {
        console.log(y);
        const enemy = document.getElementById(`enemy-${id}`)
        this.enemyArray.splice(y, 1)
        enemy.style.display = 'none'

        if (this.enemyArray.length === 0) {
            alert('You Won!')
            for (let i = 0; i < 10; i++) {
                this.enemyArray.push(i * 50)
                document.getElementById(`enemy-${i * 50}`).style.display = 'block'
            }
        }
    }
}