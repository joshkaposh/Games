const position = {x: 0, y: 0}
const borders = {north: 0, east: 500, south: 500, west: 0}
const enemyPositions = []
const playerID = document.getElementById('player')
const startBtn = document.getElementById('startBtn')


// detects if player is in enemy's hitbox. if yes, restarts game
function hitDetection(key) {
    enemyPositions.forEach(enemy => {
        switch (key) {
            case 'KeyW':
                    if (position.x === enemy.x && position.y - 50 === enemy.y) {
                        console.log('player hit enemy ');
                        position.x = 0
                        position.y = 50
                        playerID.style.left = `${position.x}`
                        playerID.style.top = `${position.y}`
                        removeEnemies()
                    }
                break;
            case 'KeyA':
                    if (position.x - 50 === enemy.x && position.y === enemy.y) {
                        console.log('player hit enemy ');
                        position.x = 50
                        position.y = 0
                        playerID.style.left = `${position.x}`
                        playerID.style.top = `${position.y}`
                        removeEnemies()
                    }
                break;
            case 'KeyS':
                    if (position.x === enemy.x && position.y + 50 === enemy.y) {
                        console.log('player hit enemy ');
                        position.x = 0
                        position.y = -50
                        playerID.style.left = `${position.x}`
                        playerID.style.top = `${position.y}`
                        removeEnemies()
                    }
                break;
            case 'KeyD':
                    if (position.x + 50 === enemy.x && position.y === enemy.y) {
                        console.log('player hit enemy ');
                        position.x = -50
                        position.y = 0
                        playerID.style.left = `${position.x}`
                        playerID.style.top = `${position.y}`
                        removeEnemies()
                    }
                break;
            default:
                break;
        }
    });
}
// Places enemy on keydown === Space
const placeEnemy = () => {
    const node = document.createElement('div')
    document.getElementById('grid').appendChild(node)
    node.setAttribute('class', 'sub-player')
    node.style.left = `${position.x}px`
    node.style.top =  `${position.y}px`
    node.style.zIndex = 10
    const enemyPos = {x: position.x, y: position.y}
    enemyPositions.push(enemyPos)
}


// Resets board
const removeEnemies = () => {
    document.querySelectorAll('.sub-player').forEach(enemy => {
        enemy.remove()
    })
    enemyPositions.length = 0;
}

// Directional movement
const moveNorth = () =>  {position.y -= 50; playerID.style.top = `${position.y}px`};
const moveEast = () => {position.x += 50; playerID.style.left = `${position.x}px`};
const moveSouth = () => {position.y += 50; playerID.style.top = `${position.y}px`};
const moveWest = () => {position.x -= 50; playerID.style.left = `${position.x}px`};

function move(e) {
    switch (e.code) {
        case 'KeyW':
            hitDetection(e.code)
            if (position.y === borders.north) return
            else moveNorth()
            break;
        case 'KeyA':
            hitDetection(e.code)
            if (position.x === borders.west) return
            else moveWest()
            break;
        case 'KeyS':
            hitDetection(e.code)
            if (position.y === borders.south) return
            else moveSouth()
            break;
        case 'KeyD':
            hitDetection(e.code)
            if (position.x === borders.east) return
            else moveEast()
            break;
        case 'Space':
            placeEnemy()
            break;
        default:
            break;
    }
}

function startGame() {
    playerID.style.display = 'block'
    document.addEventListener('keydown', move)
    document.getElementById('controls').removeChild(startBtn)
};startBtn.addEventListener('click', startGame)
