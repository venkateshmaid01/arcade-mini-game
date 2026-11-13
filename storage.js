
const GameKey = 'ArcadeMiniGame'

const defaultData = {
    player : {
        username : "Player",
        age: "",
    },
    dashboard : {
        total : 0,
        score : 0,
        wins : 0,
    },
    games : {
        ttt : {
            total : 0,
            wins : 0,
            losses : 0,
            draws : 0,
        },
        sps : {
            total : 0,
            wins : 0,
            losses : 0,
            draws : 0,
        },
        wam : {
            total : 0,
            highscore : 0,
            wins : 0,
        },
        ss : {
            total : 0,
            highscore : 0,
            highestround : 0,
        },
    }
}

function loadData(){
    const prevData = localStorage.getItem(GameKey)

    if(prevData==null){
        return JSON.parse(JSON.stringify(defaultData))
    }

    try{
        return JSON.parse(prevData)
    }
    catch(error){
        alert("Error in loading Data")
        return JSON.parse(JSON.stringify(defaultData))
    }

}

let mydata = loadData()

function saveData(){
    localStorage.setItem(GameKey,JSON.stringify(mydata))
}

function resetData(){
    mydata = JSON.parse(JSON.stringify(defaultData))
    saveData()
}