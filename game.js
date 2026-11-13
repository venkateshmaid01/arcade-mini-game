const game1 = document.getElementById("TTT")
const game2 = document.getElementById("SPS")
const game3 = document.getElementById("WAM")
const game4 = document.getElementById("SS")
const dash = document.getElementById("dashboard")

//play buttons
const b1 = document.getElementById("play1")
const b2 = document.getElementById("play2")
const b3 = document.getElementById("play3")
const b4 = document.getElementById("play4")
const progbtn = document.getElementById('Progress')
const profbtn = document.getElementById('Profile')
//back buttons
const back1 = document.getElementById("back1")
const back2 = document.getElementById("back2")
const back3 = document.getElementById("back3")
const back4 = document.getElementById("back4")
const back5 = document.getElementById("back5")
const back6 = document.getElementById("back6")
//Player Progress
const MyScore = document.getElementById('myScore')
let myscore = mydata.dashboard.score
const MyGames = document.getElementById('myGames')
let mygames = mydata.dashboard.total
const MyWins = document.getElementById('myWins')
let mywins = mydata.dashboard.wins

const dispWinner = document.getElementById('popResult')
const giveAlert = document.getElementById('alertmsg')
//functions

function dataUpdate() {
    mydata.dashboard.score = myscore
    mydata.dashboard.total = mygames
    mydata.dashboard.wins = mywins

    MyScore.value = myscore
    MyGames.value = mygames
    MyWins.value = mywins

    saveData()
}

function route(view) {
    dash.style.display = 'none'
    view.style.display = 'block'
}
function backdb(view) {
    dash.style.display = 'block'
    view.style.display = 'none'
}

async function popWinnerMSG(winner) {
    if (winner == 0) {
        dispWinner.innerText = "You Lost :("
    }
    else if (winner == 1) {
        dispWinner.innerText = "You Won :)"
    }
    else {
        dispWinner.innerText = "Draw"
    }
    dispWinner.style.display = "flex"
    dispWinner.classList.add("pop1")
    await sleep(1500)
    dispWinner.classList.add("hide1")
    await sleep(1000)
    dispWinner.style.display = "none"
    dispWinner.classList.remove("pop1")
    dispWinner.classList.remove('hide1')
}

//Game pages

b1.addEventListener('click', () => {
    route(game1)
})
b2.addEventListener('click', () => {
    route(game2)
})
b3.addEventListener('click', () => {
    route(game3)
})
b4.addEventListener('click', () => {
    route(game4)
})


// .................. Progress & Profile Page .................. 

const uname = document.getElementById('uname')
const uage = document.getElementById('uage')
const uname2 = document.getElementById('uname2')
const uage2 = document.getElementById('uage2')
const Gtotal = document.getElementById('Tgames')
const GWins = document.getElementById('TWins')
const Gscore = document.getElementById('TScore')
const TTTtotal = document.getElementById('TTTtotal')
const TTTwins = document.getElementById('TTTWins')
const TTTlosses = document.getElementById('TTTloss')
const TTTDraws = document.getElementById('TTTdraw')
const SPStotal = document.getElementById('SPStotal')
const SPSwins = document.getElementById('SPSWins')
const SPSlosses = document.getElementById('SPSloss')
const SPSdraws = document.getElementById('SPSdraw')
const WAMtotal = document.getElementById('WAMtotal')
const WAMhigh = document.getElementById('WAMhigh')
const WAMwins = document.getElementById('WAMwins')
const SStotal = document.getElementById('SStotal')
const SShigh = document.getElementById('SSHigh')
const SShighR = document.getElementById('SSround')

function updateProg() {
    uname.value = mydata.player.username
    uname2.value = mydata.player.username
    uage.value = mydata.player.age
    uage2.value = mydata.player.age
    Gtotal.value = mydata.dashboard.total
    GWins.value = mydata.dashboard.wins
    Gscore.value = mydata.dashboard.score
    TTTtotal.value = mydata.games.ttt.total
    TTTwins.value = mydata.games.ttt.wins
    TTTlosses.value = mydata.games.ttt.losses
    TTTDraws.value = mydata.games.ttt.draws
    SPStotal.value = mydata.games.sps.total
    SPSwins.value = mydata.games.sps.wins
    SPSlosses.value = mydata.games.sps.losses
    SPSdraws.value = mydata.games.sps.draws
    WAMtotal.value = mydata.games.wam.total
    WAMhigh.value = mydata.games.wam.highscore
    WAMwins.value = mydata.games.wam.wins
    SStotal.value = mydata.games.ss.total
    SShigh.value = mydata.games.ss.highscore
    SShighR.value = mydata.games.ss.highestround
}

const page1 = document.getElementById("profilePage")
const page2 = document.getElementById("playerProgress")
const menubtn = document.querySelector('.menubtn')
const menu = document.querySelector('.menu')

menubtn.addEventListener('click', () => {
    menu.classList.toggle('menuSlide')
})

profbtn.addEventListener('click', () => {
    updateProg()
    menu.classList.remove('menuSlide')
    route(page1)
})
progbtn.addEventListener('click', () => {
    updateProg()
    menu.classList.remove('menuSlide')
    route(page2)
})

back5.addEventListener('click', () => {
    backdb(page1)
})
back6.addEventListener('click', () => {
    backdb(page2)
})

const updInfo = document.getElementById('updInfo')

uage.addEventListener('click', () => {
    updInfo.style.display = 'block'
})
uname.addEventListener('click', () => {
    updInfo.style.display = 'block'
})
updInfo.addEventListener('click', () => {
    updInfo.style.display = 'none'
    mydata.player.username = uname.value
    mydata.player.age = uage.value
    saveData()
})

//Resest Game
const reset = document.getElementById('reset')
reset.addEventListener('click', () => {
    popAlert()
})

const Yreset = document.getElementById('yReset')
const Nreset = document.getElementById('nReset')

function popAlert() {
    giveAlert.style.display = "flex"
    giveAlert.classList.add("pop1")

    return
}

Yreset.addEventListener('click', () => {
    resetData()
    updateProg()
    myscore = 0
    mygames = 0
    mywins = 0
    dataUpdate()
    alert("Game Progress Deleted")
    giveAlert.classList.add("hide1")
    giveAlert.style.display = "none"
    giveAlert.classList.remove("pop1")
    giveAlert.classList.remove('hide1')
})

Nreset.addEventListener('click', () => {
    giveAlert.classList.add("hide1")
    giveAlert.style.display = "none"
    giveAlert.classList.remove("pop1")
    giveAlert.classList.remove('hide1')
})

//........................Game Logic........................

dataUpdate()

//.....................Tic Tac Toe Game.....................
const box1 = document.getElementById("ip1")
const box2 = document.getElementById("ip2")
const box3 = document.getElementById("ip3")
const box4 = document.getElementById("ip4")
const box5 = document.getElementById("ip5")
const box6 = document.getElementById("ip6")
const box7 = document.getElementById("ip7")
const box8 = document.getElementById("ip8")
const box9 = document.getElementById("ip9")

const main = document.querySelector(".main")
const choose = document.querySelector(".chooseXO")
const XOblock = document.querySelector(".TTTBlock")

const selX = document.getElementById("Xplayer")
const selO = document.getElementById("Oplayer")

const TTTscore = document.getElementById('tttScore')
const printwin = document.getElementById("won")

let g1score = 0
let player
let comp
let turn
let board = ['', '', '', '', '', '', '', '', '']
let tttGameOver = false

function chXO() {
    choose.style.display = 'none'
    main.style.display = 'block'
    tttGameOver = false
    mygames += 1
    mydata.games.ttt.total++
    dataUpdate()
}

function inputX0(location, bloc, who) {
    location.innerText = who
    board[bloc] = who
    if (who === 'X') {
        location.style.color = 'rgb(87, 66, 78)'
    }
    else {
        board[bloc] = 'O'
        location.style.color = 'rgb(131, 99, 122)'
    }
    console.log(board)
}

function finishTTT(result) {
    if (tttGameOver) return

    tttGameOver = true
    printwin.innerText = "Play again"
    printwin.style.display = "flex"
    if (result === 1) {
        g1score++
        TTTscore.value = g1score
        myscore++
        mywins++
        mydata.games.ttt.wins++
    }
    else if (result === 0) {
        mydata.games.ttt.losses++
    }
    else {
        mydata.games.ttt.draws++
    }
    dataUpdate()
    popWinnerMSG(result)
}

function gameplay() {
    let gameon = checkwin(wins, board)
    if (gameon !== 'N') {
        if (gameon === player) {
            finishTTT(1)
        }
        else if (gameon === comp) {
            finishTTT(0)
        }
        else {
            finishTTT(2)
        }
        return
    }

    if (turn === comp) {
        turn = player
        let move = BestMove()
        let location = document.getElementById(`ip${move + 1}`)
        if (location && board[move] === '') {
            inputX0(location, move, comp)
        }

        gameon = checkwin(wins, board)
        if (gameon === comp) {
            finishTTT(0)
        }
        else if (gameon === 'D') {
            finishTTT(2)
        }
    }
}

selX.addEventListener('click', () => {
    player = 'X'
    comp = 'O'
    chXO()
})
selO.addEventListener('click', () => {
    player = 'O'
    comp = 'X'
    chXO()
    turn = comp
    gameplay()
})

let buttons = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
buttons.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (board[index] === '' && checkwin(wins, board) === 'N') {
            inputX0(element, index, player)
            turn = comp
            gameplay()
        }
        else {
            return;
        }
    })
});

let wins = [
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]

function checkwin(wins, board) {
    for (let i = 0; i < wins.length; i++) {
        if (board[wins[i][0]] !== '' &&
            board[wins[i][0]] === board[wins[i][1]] &&
            board[wins[i][1]] === board[wins[i][2]]) {
            return board[wins[i][0]];
        }
    }
    for (const element of board) {
        if (element === '') {
            return 'N'
        }
    }
    return 'D'

}

//Artificial intelligence Opponent
//mininax algo (similar to DFS concept)
function minimax(depth, isai) {
    let result = checkwin(wins, board)
    if (result === player) {
        return depth - 10
    }
    if (result === comp) {
        return 10 - depth
    }
    if (result === 'D') {
        return 0
    }

    if (isai) {
        let best = -Infinity
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = comp
                let score = minimax(depth + 1, false)
                if (score > best) {
                    best = score
                }
                board[i] = ''
            }
        }
        return best
    }
    else {
        let best = +Infinity
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = player
                let score = minimax(depth + 1, true)
                if (score < best) {
                    best = score
                }
                board[i] = ''
            }
        }
        return best
    }
}

function BestMove() {
    //20% chance of random move(for moderate-hard difficulty)
    if (Math.random() < 0.2) {
        let playable = []
        for (let i = 0; i < board.length; i++) {
            if (board[i] == '')
                playable.push(i)
        }
        return playable[Math.floor(Math.random() * playable.length)]
    }
    let bestmove = ''
    let best = -Infinity
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = comp
            let move = i
            let score = minimax(0, false)
            board[i] = ''
            if (score > best) {
                best = score
                bestmove = move
            }
        }
    }
    return bestmove
}

const TTTplay = document.getElementById('won')
TTTplay.addEventListener('click', () => {
    board = ['', '', '', '', '', '', '', '', '']
    choose.style.display = 'flex'
    main.style.display = 'none'
    let block = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
    block.forEach((element) => {
        element.innerText = ''
    })
    printwin.style.display = 'none'
    tttGameOver = false
})

back1.addEventListener('click', () => {
    backdb(game1)
    board = ['', '', '', '', '', '', '', '', '']
    choose.style.display = 'flex'
    main.style.display = 'none'
    let block = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
    block.forEach((element) => {
        element.innerText = ''
    })
    printwin.style.display = 'none'
    tttGameOver = false
})

//...........................Stone Paper Scissor...........................

const SPSplayer = document.getElementById("player")
const SPScomp = document.getElementById("computer")
const startSPS = document.getElementById("start")
const AgainSPS = document.getElementById("againSPS")

const Stone = document.getElementById("Stone")
const Paper = document.getElementById("Paper")
const Scissor = document.getElementById("Scissor")

const Pscore = document.getElementById("Pscore")
const Cscore = document.getElementById("Cscore")

const timerSPS = document.getElementById("SetTime")

let prevs = []
let Cmove
let Pmove
let newPscore = 0
let newCscore = 0

startSPS.addEventListener("click", () => {
    startSPS.style.display = 'none'
    timerSPS.value = 5
    Stone.disabled = false
    Paper.disabled = false
    Scissor.disabled = false
    timeRemain()
    mygames += 1
    dataUpdate()
})

const opt = [Stone, Paper, Scissor]
opt.forEach((element) => {
    element.addEventListener("click", () => {
        Pmove = element.dataset.choice
        clearInterval(Tlimit)
        Shoot(element, compMove())
        analysis()
        SPScomp.classList.add("animateComp")
        SPSplayer.classList.add("animatePlayer")
        Stone.disabled = true
        Paper.disabled = true
        Scissor.disabled = true
    })
})

//time limit for player
let Tlimit
let SPSshoot
function timeRemain() {
    let time = 5
    Tlimit = setInterval(() => {
        time -= 1
        timerSPS.value = time
        if (time == 0) {
            newCscore += 1
            Cscore.value = newCscore
            clearInterval(Tlimit)
            AgainSPS.style.display = 'block'
            Stone.disabled = true
            Paper.disabled = true
            Scissor.disabled = true
            mydata.games.sps.total++
            mydata.games.sps.losses++
            dataUpdate()
            popWinnerMSG(0)
        }
    }, 1000)
}

function Shoot(Pshoot, Cshoot) {
    SPSshoot = setTimeout(() => {
        SPSplayer.innerText = Pshoot.innerText
        SPScomp.innerText = Cshoot.innerText

        let whoWon = winnerSPS()
        if (whoWon == "W") {
            newPscore += 1
            Pscore.value = newPscore
            myscore += 1
            mywins += 1
            mydata.games.sps.wins++
            popWinnerMSG(1)
        }
        else if (whoWon == "L") {
            newCscore += 1
            Cscore.value = newCscore
            mydata.games.sps.losses++
            popWinnerMSG(0)
        }
        else {
            mydata.games.sps.draws++
            popWinnerMSG(2)
        }
        mydata.games.sps.total++
        dataUpdate()
        AgainSPS.style.display = 'block'
    }, 3000)
}

function nRound() {
    SPSplayer.innerText = Stone.innerText
    SPScomp.innerText = Stone.innerText
    Stone.disabled = false
    Paper.disabled = false
    Scissor.disabled = false
    AgainSPS.style.display = 'none'
    SPScomp.classList.remove("animateComp")
    SPSplayer.classList.remove("animatePlayer")
    timeRemain()
}

AgainSPS.addEventListener("click", () => {
    mygames += 1
    dataUpdate()
    nRound()
})

//store player's previous moves
function analysis() {
    if (Pmove == "Stone") {
        prevs.push("Stone")
    }
    else if (Pmove == "Paper") {
        prevs.push("Paper")
    }
    else if (Pmove == "Scissor") {
        prevs.push("Scissor")
    }
    if (prevs.length > 5) {
        prevs.shift()
    }
}

//generate randmon move along with analysing previous moves too
function compMove() {
    let choice = Math.floor((Math.random() * 3) + 1)
    switch (choice) {
        case 1:
            let most = 0
            let bestSPS = ""
            let count = {}
            for (option of prevs) {
                count[option] = (count[option] || 0) + 1
                if (most < count[option]) {
                    most = count[option]
                    bestSPS = option
                }
            }
            Cmove = bestSPS
            if (Cmove == "Paper") choice = 2;
            else if (Cmove == "Scissor") choice = 3;
            else choice = 4;
        //skipped use of 'break' to intentionally check other cases
        case 2:
            Cmove = "Paper"
            return Paper
        case 3:
            Cmove = "Scissor"
            return Scissor
        case 4:
            Cmove = "Stone"
            return Stone
        default:
            break;
    }

}

//check winner
function winnerSPS() {
    if (Pmove == "Stone") {
        if (Cmove == "Paper") {
            return "L"
        }
        else if (Cmove == "Scissor") {
            return "W"
        }
        else {
            return "D"
        }
    }
    else if (Pmove == "Paper") {
        if (Cmove == "Scissor") {
            return "L"
        }
        else if (Cmove == "Stone") {
            return "W"
        }
        else {
            return "D"
        }
    }
    else if (Pmove == "Scissor") {
        if (Cmove == "Stone") {
            return "L"
        }
        else if (Cmove == "Paper") {
            return "W"
        }
        else {
            return "D"
        }
    }
    else {
        return "L"
    }
}

function backFromSPS() {
    AgainSPS.style.display = "none"
    clearTimeout(SPSshoot)
    clearInterval(Tlimit)
    SPSplayer.innerText = Stone.innerText
    SPScomp.innerText = Stone.innerText
    SPScomp.classList.remove("animateComp")
    SPSplayer.classList.remove("animatePlayer")
    startSPS.style.display = 'block'
    timerSPS.value = 5
    Stone.disabled = true
    Paper.disabled = true
    Scissor.disabled = true
    Cscore.innerText = 0
    clearInterval(Tlimit)
    newPscore = 0
    Pscore.value = newPscore
    newCscore = 0
    Cscore.value = newCscore
}

back2.addEventListener('click', () => {
    backdb(game2)
    backFromSPS()
})


//............................   Whack-A-Mole   ............................

const Shovel = document.querySelector(".Shovel")

window.addEventListener("mousemove", (e) => {
    Shovel.style.top = e.clientY + 5 + "px"
    Shovel.style.left = e.clientX + "px"
})
game3.addEventListener("click", (e) => {
    Shovel.classList.add("shovelAtk")
    const atkTime = setTimeout(() => {
        Shovel.classList.remove("shovelAtk")
    }, 500)
})

const WAMboard = document.querySelector(".WAMboard")
const holes = document.querySelectorAll(".holesWAM")
const mol = document.createElement('div')
mol.textContent = "🐹"
mol.id = "mole"
const strtWAM = document.getElementById("strtWAM")
const stopWAM = document.getElementById("stpWAM")
const scoreWAM = document.getElementById("WAMcount")

let last_hole
let scrWAM = 0
let timerWAM = null
let isWonWAM = false

function jump() {
    let holeNo = Math.floor((Math.random() * 9) + 1)
    while (holeNo === last_hole) {
        holeNo = Math.floor((Math.random() * 9) + 1)
    }
    holes.forEach(hole => {
        if (hole.dataset.holenum == `${holeNo}`) {
            hole.appendChild(mol)
        }
    })

    last_hole = holeNo
    mol.dataset.hit = ''
    const jtime = Math.floor((Math.random() * 8) + 5) * 100
    timerWAM = setTimeout(jump, jtime)
    mol.style.setProperty("--time", jtime + "ms")
}

strtWAM.addEventListener("click", () => {
    scrWAM = 0
    scoreWAM.value = '0'
    strtWAM.style.display = 'none'
    stopWAM.style.display = 'block'
    mygames += 1
    dataUpdate()
    jump()
})

mol.addEventListener("click", () => {
    if (mol.dataset.hit) {
        return
    }
    mol.dataset.hit = '1'
    scrWAM++
    scoreWAM.value = scrWAM
    myscore += 1
    dataUpdate()
})


stopWAM.addEventListener("click", () => {
    clearTimeout(timerWAM)
    timerWAM = null
    strtWAM.style.display = 'block'
    stopWAM.style.display = 'none'
    mydata.games.wam.total++
    holes.forEach(hole => {
        if (hole.contains(mol)) {
            hole.removeChild(mol)
        }
    })
    if (scrWAM > 5 && !isWonWAM) {
        mywins += 1
        MyWins.value = mywins
        mydata.games.wam.wins++
        isWonWAM = true
        popWinnerMSG(1)
    }
    else {
        popWinnerMSG(0)
    }
    if (scrWAM > mydata.games.wam.highscore) {
        mydata.games.wam.highscore = scrWAM
    }
    dataUpdate()
})

back3.addEventListener('click', () => {
    backdb(game3)
    clearTimeout(timerWAM)
    timerWAM = null
    strtWAM.style.display = 'block'
    stopWAM.style.display = 'none'
    scoreWAM.value = '0'
    scrWAM = 0
    isWonWAM = false
    holes.forEach(hole => {
        if (hole.contains(mol)) {
            hole.removeChild(mol)
        }
    })
})

// ............................... Simon Says ............................... 

const SSblue = document.getElementById('ssB1')
const SSgreen = document.getElementById('ssB2')
const SSred = document.getElementById('ssB3')
const SSyellow = document.getElementById('ssB4')
const colorbtn = document.querySelectorAll(".sscolors")

const round = document.getElementById('round')
const points = document.getElementById('SSpoints')

const SSplay = document.getElementById('SSplay')

let sequence = []
let playerSeq = []
let timeout
let plpoint = 0
let SSround = 0
let isStarted = false
let isplayable = false
let isWonSS = false

colorbtn.forEach(color => {
    color.addEventListener('click', () => {
        if (!isStarted || !isplayable) {
            return
        }
        const myclr = color.dataset.clr
        playerSeq.push(myclr)
        colorlight(myclr)
        let iscorrect = matchSequence()
        if (!iscorrect) {
            return
        }
        if (playerSeq.length === sequence.length) {
            plpoint++
            points.value = plpoint
            SSround++
            round.value = SSround
            playerSeq = []
            myscore += 1
            if (plpoint > mydata.games.ss.highscore) {
                mydata.games.ss.highscore = plpoint
            }
            if (SSround > mydata.games.ss.highestround) {
                mydata.games.ss.highestround = SSround
            }
            if (SSround > 5 && !isWonSS) {
                mywins += 1
                isWonSS = true
                mydata.games.ss.wins++
            }
            dataUpdate()
            genColor()
            playcolor()
        }
    })
})

//generate random color
function genColor() {
    let lastcolor = sequence.length - 1
    let newcolor = Math.floor(Math.random() * 4)
    const allcolors = ["blue", "green", "red", "yellow"]
    while (sequence[lastcolor] == allcolors[newcolor]) {
        newcolor = Math.floor(Math.random() * 4)
    }
    let color = allcolors[newcolor]
    sequence.push(color)
}

//light up a color
function colorlight(color) {
    clearTimeout(timeout)
    if (color == 'blue') {
        SSblue.style.backgroundColor = 'aqua'
        timeout = setTimeout(() => {
            SSblue.style.backgroundColor = 'blue'
        }, 300)
    }
    else if (color == 'green') {
        SSgreen.style.backgroundColor = 'lawngreen'
        timeout = setTimeout(() => {
            SSgreen.style.backgroundColor = 'green'
        }, 300)
    }
    else if (color == 'red') {
        SSred.style.backgroundColor = 'orange'
        timeout = setTimeout(() => {
            SSred.style.backgroundColor = 'red'
        }, 300)
    }
    else {
        SSyellow.style.backgroundColor = 'lightyellow'
        timeout = setTimeout(() => {
            SSyellow.style.backgroundColor = 'yellow'
        }, 300)
    }

}
const sleep = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

async function playcolor() {
    if (!isStarted) {
        return
    }
    isplayable = false

    await sleep(600)

    for (let color of sequence) {
        if (!isStarted) {
            return
        }
        colorlight(color)
        await sleep(600)
    }
    if (isStarted) {
        isplayable = true
    }
}

//match player's sequence with generated sequence
function matchSequence() {
    let index = playerSeq.length - 1
    if (playerSeq[index] !== sequence[index]) {
        popWinnerMSG(0)
        dataUpdate()
        sequence = []
        playerSeq = []
        plpoint = 0
        points.value = plpoint
        SSround = 0
        round.value = SSround
        isStarted = false
        SSplay.dataset.purpose = "start"
        SSplay.textContent = "Start"
        return false
    }
    return true
}

SSplay.addEventListener('click', () => {
    if (SSplay.dataset.purpose == "start") {
        SSplay.dataset.purpose = "stop"
        SSplay.textContent = "Stop"
        isStarted = true
        SSround += 1
        round.value = SSround
        mygames += 1
        mydata.games.ss.total++
        isWonSS = false
        dataUpdate()
        genColor()
        playcolor()
    }
    else {
        isStarted = false
        isplayable = false
        SSplay.dataset.purpose = "start"
        SSplay.textContent = "Start"
        sequence = []
        playerSeq = []
        plpoint = 0
        points.value = plpoint
        SSround = 0
        round.value = SSround
    }
})


back4.addEventListener('click', () => {
    backdb(game4)
    isWonSS = false
    isStarted = false
    isplayable = false
    SSplay.dataset.purpose = "start"
    SSplay.textContent = "Start"
    sequence = []
    playerSeq = []
    plpoint = 0
    points.value = plpoint
    SSround = 0
    round.value = SSround
})