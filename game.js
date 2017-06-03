var player;
var playerImage;
var enemy;
var enemyImage; 
var backgroundImage; 
var isGameOver;

function preload() {
    playerImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/N5uCbDu.png");
    enemyImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/OdL0XPt.png");
    backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png");
}

function setup() {
    createCanvas(257, 257);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, (playerImage.height/2), 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    isGameOver = false; 
}

function draw() {
    background(backgroundImage);
    drawSprites();
    
    if(isGameOver) {
        gameOver();
    }
    
    if(keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width/2))) {
        player.position.x += 3;
    }
    
    if(keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
        player.position.x -= 3;
    }
    
    if(enemy.position.y > height + 15) {
        enemy.position.y = 18;
        enemy.position.x = random(5, width-5);
    }
    
    enemy.position.y += 2;
    
    if(enemy.overlap(player)) {
        isGameOver = true; 
    }
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click to play again", width/2, 2*height/3);
}

function mouseClicked() {
    if(isGameOver) {
        isGameOver = false; 
        player.position.x = width/2;
        player.position.y = height - (playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 18;
    }
}