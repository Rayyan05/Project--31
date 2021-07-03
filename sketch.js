const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drops = [];
var maxDrops  = 100

function preload(){
    
}

function setup(){
   
  
    engine=Engine.create();
    world = engine.world

    for(var i = 0;i<maxDrops;i++){
        drops.push(new createDrops(random(0,500),random(0,500)))
    }
    }


   


function draw(){
    background(0)
    Engine.update(engine)



  
    for(var i = 0;i<maxDrops;i=i++){
        
        drops[i].showDrop();
        drops[i].updateY();
    }
   

    
}
