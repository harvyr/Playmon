let playerAttack
let enemyAttack
let playerAttackValue
let enemyAttackValue
let playerCurrentLives = 3
let enemyCurrentLives = 3

function selectPlayerMonster() {
    let sectionAttackSelect = document.getElementById('select-attack')
    sectionAttackSelect.style.display = 'block'

    let sectionMonsterSelect = document.getElementById('select-monster')
    sectionMonsterSelect.style.display = 'none'

    let inputCafre = document.getElementById('cafre')
    let inputDogter = document.getElementById('dogter')
    let inputParrath = document.getElementById('parrath')
    let inputFiter = document.getElementById('fiter')
    let inputEarrel = document.getElementById('earrel')
    let inputTerra = document.getElementById('terra')
    let spanPlayerMonster = document.getElementById('player-monster')

    if(inputCafre.checked == true){
        spanPlayerMonster.innerHTML = 'Cafre'
    }
    else if(inputDogter.checked == true){
        spanPlayerMonster.innerHTML = 'Dogter'
    }
    else if(inputParrath.checked == true){
        spanPlayerMonster.innerHTML = 'Parrath'
    }
    else if(inputFiter.checked == true){
        spanPlayerMonster.innerHTML = 'Fiter'
    }
    else if(inputEarrel.checked == true){
        spanPlayerMonster.innerHTML = 'Earrel'
    }
    else if(inputTerra.checked == true){
        spanPlayerMonster.innerHTML = 'Terra'
    }
    else{alert("Escoge una mascota bebé")}

    selectEnemyMonster()
}
function selectEnemyMonster(){
    let spanEnemyMonster = document.getElementById('enemy-monster')
    let randomEnemyMonster = random(1,6)

    switch(String(randomEnemyMonster)){
        case '1': spanEnemyMonster.innerHTML='Cafre'; break;
        case '2': spanEnemyMonster.innerHTML = 'Dogter'; break; 
        case '3': spanEnemyMonster.innerHTML = 'Parrath'; break;
        case '4': spanEnemyMonster.innerHTML = 'Fiter'; break;
        case '5': spanEnemyMonster.innerHTML = 'Earrel'; break;
        case '6': spanEnemyMonster.innerHTML = 'Terra'; break;
        default: "No escogiste ninguno"; break;
    }
}
function selectEnemyAttack(){
    let randomEnemyAttack = random(1,3)
    switch(String(randomEnemyAttack)){
        case '1': enemyAttack ='Fire', enemyAttackValue=1; break;
        case '2': enemyAttack = 'Water', enemyAttackValue=2; break; 
        case '3': enemyAttack = 'Earth', enemyAttackValue=3; break;
    }
    battle(playerAttackValue, enemyAttackValue)
}
function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function fireAttack(){
    playerAttack = 'Fire', playerAttackValue =1
    enemyAttack = selectEnemyAttack()
}
function waterAttack(){
    playerAttack = 'Water', playerAttackValue =2
    enemyAttack = selectEnemyAttack()
}
function earthAttack(){
    playerAttack = 'Earth', playerAttackValue =3
    enemyAttack = selectEnemyAttack()
}

function battle(playerAttack, enemyAttack){
    let spanPlayerLives = document.getElementById('player-lives')
    let spanEnemyLives = document.getElementById('enemy-lives')
    
    if(playerAttack == enemyAttack){
        addElement('DRAW')
    }
    else if((playerAttack==1 && enemyAttack == 3)||(playerAttack > enemyAttack)){
        addElement('You WIN')
        enemyCurrentLives --
        spanPlayerLives.innerHTML = playerCurrentLives
        spanEnemyLives.innerHTML = enemyCurrentLives
    }
    else{
        addElement('You LOSE')
        playerCurrentLives --
        spanPlayerLives.innerHTML = playerCurrentLives
        spanEnemyLives.innerHTML = enemyCurrentLives
    }
    checkLives()
}
function checkLives(){
    if (playerCurrentLives == 0){
        finalResult('YOU LOSE')
    }
    if (enemyCurrentLives == 0){
        finalResult('YOU WIN')
    }
}

function addElement(result){
    let currentParagraph = document.getElementById('messages')
    let newParagraph = document.createElement("p")
    newParagraph.innerHTML = 'You have chosen ' +playerAttack+ ' the enemy has chosen '+enemyAttack+', ' +result+'.' 
    currentParagraph.appendChild(newParagraph)
}
function finalResult(finalMessage){
    let currentParagraph = document.getElementById('messages')
    let newParagraph = document.createElement("p")
    
    newParagraph.innerHTML = finalMessage
    currentParagraph.appendChild(newParagraph)
    let playerAttackFire = document.getElementById('fire-btn')
    let playerAttackWater = document.getElementById('water-btn')
    let playerAttackEarth = document.getElementById('earth-btn')
    playerAttackFire.disabled = true
    playerAttackWater.disabled = true
    playerAttackEarth.disabled = true

    let restartbtn = document.getElementById('restart-btn')
    restartbtn.style.display = 'block'
}

function restartGame(){
    location.reload()
}

function startGame(){
    let sectionAttackSelect = document.getElementById('select-attack')
    sectionAttackSelect.style.display = 'none'

    let monsterPlayerButton = document.getElementById('monster-button')
    monsterPlayerButton.addEventListener('click', selectPlayerMonster)

    let playerAttackFire = document.getElementById('fire-btn')
    playerAttackFire.addEventListener('click',fireAttack)

    let playerAttackWater = document.getElementById('water-btn')
    playerAttackWater.addEventListener('click',waterAttack)

    let playerAttackEarth = document.getElementById('earth-btn')
    playerAttackEarth.addEventListener('click',earthAttack)

    let restartbtn = document.getElementById('restart-btn')
    restartbtn.style.display = 'none'
    restartbtn.addEventListener('click',restartGame)
}