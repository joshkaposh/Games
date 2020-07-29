// const id = document.getElementById('player')

const position = {x: 0, y: 0}
const borders = {north: 0, east: 500, south: 500, west: 0}

const enemyPositions = []


const playerID = document.getElementById('player')

function removeEnemies() {
    document.querySelectorAll('.sub-player').forEach(enemy => {
        enemy.remove()
    })
    enemyPositions.length = 0;
}

function move(e) {
    const playerID = document.getElementById('player');
    console.log(e.code);
    // console.log(playerID);
    // console.log(borders);
    // console.log(position);


    switch (e.code) {
        case 'KeyW':
            enemyPositions.forEach((enemy) => {
                if (position.x === enemy.x && position.y - 50 === enemy.y) {
                    console.log('player hit enemy ');
                    position.x = 0
                    position.y = 50
                    playerID.style.left = `${position.x}`
                    playerID.style.top = `${position.y}`
                    removeEnemies()

                }
            })
            if (position.y === borders.north) {
                return
            } else {
                position.y -= 50
                playerID.style.top = `${position.y}px`
            }
            break;
        case 'KeyA':
            enemyPositions.forEach((enemy) => {
                if (position.x - 50 === enemy.x && position.y === enemy.y) {
                    console.log('player hit enemy ');
                    position.x = 50
                    position.y = 0
                    playerID.style.left = `${position.x}`
                    playerID.style.top = `${position.y}`
                    removeEnemies()

                }
            })
            if (position.x === borders.west) {
                return
            } else {
                position.x -= 50
                playerID.style.left = `${position.x}px`
            }
            break;
        case 'KeyS':
            enemyPositions.forEach((enemy) => {
                if (position.x === enemy.x && position.y + 50 === enemy.y) {
                    console.log('player hit enemy ');
                    position.x = 0
                    position.y = -50
                    playerID.style.left = `${position.x}`
                    playerID.style.top = `${position.y}`
                    removeEnemies()

                }
            })
            if (position.y === borders.south) {
                return
            } else {
                position.y += 50
                playerID.style.top = `${position.y}px`
            }
            break;
        case 'KeyD':
            enemyPositions.forEach((enemy) => {
                if (position.x + 50 === enemy.x && position.y === enemy.y) {
                    console.log('player hit enemy ');
                    position.x = -50
                    position.y = 0
                    playerID.style.left = `${position.x}`
                    playerID.style.top = `${position.y}`
                    removeEnemies()

                }
            })
            if (position.x === borders.east) {
                return
            } else {
                position.x += 50
                playerID.style.left = `${position.x}px`
            }
            break;
        case 'Space':
            const node = document.createElement('div')
            document.getElementById('grid').appendChild(node)
            node.setAttribute('class', 'sub-player')
            node.style.left = `${position.x}px`
            node.style.top =  `${position.y}px`
            node.style.zIndex = 10
            const enemyPos = {x: position.x, y: position.y}
            enemyPositions.push(enemyPos)
            console.log(enemyPositions);
            break;
        default:
            break;
    }
}

document.addEventListener('keydown', move)
