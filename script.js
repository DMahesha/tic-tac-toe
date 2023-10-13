const container = document.getElementById('container')
const addInfo = document.getElementById('additional-info')

for (i = 0; i < 3; i++) {
    let vCell = document.createElement('div')
    vCell.style.cssText = 'width: 50px; height: 50px; border: solid 1px black'
    container.style.cssText = 'display: grid; grid-template-columns: repeat(3, 50px)'
    container.appendChild(vCell)
    for (j = 0; j < 2; j++) {
        let hCell = document.createElement('div')
        container.appendChild(hCell)
        hCell.style.cssText = 'width: 50px; height: 50px; border: solid 1px black'
    }
}

let cells = document.querySelectorAll('#container>div')
let round = 0
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (round%2 === 0 && cell.textContent == '') {
            e.target.textContent = 'X'
            round++
        } else if (round%2 === 1 && cell.textContent == '') {
            e.target.textContent = 'O'
            round++
        }
    })
})

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset Board'
addInfo.appendChild(resetButton)
resetButton.addEventListener('click', () => {
    cells.forEach(cell => resetBoard(cell))
})
function resetBoard(item) {
    item.textContent = ''
    round = 0
}

// for (i = 0 ; i < 9 ; i++) {
//     cells[i].textContent = i
// }

let winningSets = [
    [0, 1, 2],
    [3, 4, 6],
    [6, 7, 9],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


