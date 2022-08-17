const button = document.getElementById('button')
const input = document.getElementById('input')

button.onclick = () => {
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    const div2 = document.createElement('div2')
    const changeButton = document.createElement('button')
    changeButton.innerText = 'change'
    div.setAttribute('class','block')
    div2.innerText = input.value
    deleteButton.onclick = () => {
        div.remove('block')
    }
    changeButton.onclick = () => {
        div2.innerText = prompt('Введите текст')
    }
    div.append(div2, deleteButton, changeButton)
    document.body.append(div)
}
const reset = document.getElementById('reset')
reset.onclick = () => {
    document.getElementById('input').value = ''
}