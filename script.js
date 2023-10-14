const container = document.getElementById('container')
const addInfo = document.getElementById('additional-info')

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

let cells = Array.from(document.querySelectorAll('#container>div'))
let round = 0
let xPlays = []
let oPlays = []
let test = []
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
                            e.target.style.cssText = 'width: 50px; height: 50px; border: solid 1px black; background-color: green'
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
                            e.target.style.cssText = 'width: 50px; height: 50px; border: solid 1px black; background-color: green'
                        }
                    }
                }
            }
        }
    })
})

// if first 3 xPlays are in any winningSets
// if any 3 xPlays of xPlays is in a winningSet

/*

check = [[0,1,2], [1,2,3], [2,3,4]]
test = [0,1,2]

test = [0,1,2,3]
-> can only be 3 length
-> 
*/

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset Board'
addInfo.appendChild(resetButton)
resetButton.addEventListener('click', () => {
    cells.forEach(cell => resetBoard(cell))
})
function resetBoard(item) {
    item.textContent = ''
    round = 0
    xPlays = []
    oPlays = []
}

// array of winning-arrays-for-x
// o picks i = () => remove all arrays with i from winning-arrays-for-x
// if there are no sets left = () => draw

let winningSets = [
    [0, 1, 2], //x
    [3, 4, 5], //x
    [6, 7, 8], //
    [0, 3, 6], //x
    [1, 4, 7], //
    [2, 5, 8], //x
    [0, 4, 8], //x
    [2, 4, 6]  //
]