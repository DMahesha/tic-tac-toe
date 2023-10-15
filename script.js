const container = document.getElementById('container')
const addInfo = document.getElementById('reset-button')
const winner = document.getElementById('winner')

const ticTacToe = (function () {
    //creates the game board
    for (i = 0; i < 3; i++) {
        let vCell = document.createElement('div')
        vCell.style.cssText = 'width: 50px; height: 50px; border: solid 1px black'
        container.style.cssText = 'display: grid; grid-template-columns: repeat(3, 50px)'
        vCell.textContent = ''
        container.appendChild(vCell)
        for (j = 0; j < 2; j++) {
            let hCell = document.createElement('div')
            hCell.style.cssText = 'width: 50px; height: 50px; border: solid 1px black'
            container.appendChild(hCell)
        }
    }

    //set up for the players
    let cells = Array.from(document.querySelectorAll('#container>div'))
    let round = 0
    let xPlays = []
    let oPlays = []
    let test = []

    //markers for player picks
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            if (round%2 === 0 && cell.textContent == '') {
                e.target.textContent = 'X'
                xPlays.push(cells.indexOf(e.target))
                xPlays.sort()
                round++
                toCheck = JSON.stringify(xPlays)
                check = JSON.stringify(winningSets)
                for (x = 0; x < toCheck.length; x++) {
                    for (y = 0; y < toCheck.length; y++) {
                        for (z = 0; z < toCheck.length; z++) {
                            test = [toCheck[x], toCheck[y], toCheck[z]]
                            if (check.indexOf(test) != -1) {
                                gameWon('X',x,y,z)
                            }
                        }
                    }
                }
            } else if (round%2 === 1 && cell.textContent == '') {
                e.target.textContent = 'O'
                oPlays.push(cells.indexOf(e.target))
                oPlays.sort()
                round++
                toCheck = JSON.stringify(oPlays)
                check = JSON.stringify(winningSets)
                for (x = 0; x < toCheck.length; x++) {
                    for (y = 0; y < toCheck.length; y++) {
                        for (z = 0; z < toCheck.length; z++) {
                            test = [toCheck[x], toCheck[y], toCheck[z]]
                            if (check.indexOf(test) != -1) {
                                gameWon('O',x,y,z)
                            }
                        }
                    }
                }
            }
        })
    })

    //winning game sets
    let winningSets = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    //announcement for a player winning
    function gameWon(player, x,y,z) {
        cells[toCheck[x]].style.cssText = 'width: 50px; height: 50px; border: solid 1px black; background-color: green'
        cells[toCheck[y]].style.cssText = 'width: 50px; height: 50px; border: solid 1px black; background-color: green'
        cells[toCheck[z]].style.cssText = 'width: 50px; height: 50px; border: solid 1px black; background-color: green'
        
        let winnerAnnounce = document.createElement('div')
        winnerAnnounce.textContent = `The winner is player ${player}.`
        winner.appendChild(winnerAnnounce)
    }

    //announcement for a tie
    function gameTie() {
        if (xPlays.length + oPlays.length == 9) {
            let tieAnnounce = document.createElement('div')
            tieAnnounce.textContent = `This game is a tie.`
            winner.appendChild(tieAnnounce)
        }
    }

    //resets the game board
    const resetButton = document.createElement('button')
    resetButton.textContent = 'Reset Board'
    addInfo.appendChild(resetButton)
    resetButton.addEventListener('click', () => {
        cells.forEach(cell => resetBoard(cell))
    })
    function resetBoard(item) {
        item.textContent = ''
        item.style.cssText = 'width: 50px; height: 50px; border: solid 1px black'
        round = 0
        xPlays = []
        oPlays = []
    }

})();