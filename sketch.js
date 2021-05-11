var ball;
var position, database;
var hypnoticBall;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(100, 100, 35, 35);
    ball.shapeColor = "blue";

    var hypnoticBallposition = database.ref('ball/position');
    hypnoticBallposition.on("value", readPosition, showError);

}

function draw(){
    background("white");

    if(position !== undefined){

    
    
    if(keyDown (UP_ARROW)){
        writePosition(0, -2);
    }

    if(keyDown (DOWN_ARROW)){
        writePosition(0, +2);
    }

    if(keyDown (RIGHT_ARROW)){
        writePosition(+2, 0);
    }

    if(keyDown (LEFT_ARROW)){
        writePosition(-2, 0);
    }

    drawSprites();
}
}

function writePosition(x, y,){
    database.ref('ball/position').set({
        'x':position.x + x, 
        'y':position.y + y
    })

}

function readPosition(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function showError(){
    console.log("hi");
}