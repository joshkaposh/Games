import Player from "./player/Player.js";

import enemyLogic from "./enemy/enemyMovement.js";
const enemyController = new enemyLogic({ west: 97 });
// enemyController.renderEnemy({ x: 0, y: 0 });
// enemyController.renderEnemy({ x: 0, y: 50 });
// enemyController.renderEnemy({ x: 0, y: 100 });
// enemyController.moveEnemy({ x: 0, y: 0 }, 2);

// enemyController.moveEnemy({ x: 0, y: 100 }, 1);
// enemyController.renderEnemies(10);
// enemyController.enemyInfo();

const player = new Player();
player.initMovement();
