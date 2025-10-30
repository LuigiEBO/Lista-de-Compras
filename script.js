// Obtendo elementos do HTML
const list = document.getElementById('list')
const sendItem = document.getElementById('sendItem')
const input = document.getElementById('addItem')
let removeButton = document.getElementById('remove')
let item = document.getElementById('remove')

// Quando a página carrega, pega a lista salva
//Função para adicionar item na lista
sendItem.onclick = () => {
    const value = input.value
    const createItem = document.createElement('div')
    const createBox = document.createElement('div')
    const createCheckBox = document.createElement('div')
    const text = document.createElement('p')
    const checkIcon = document.createElement('img')
    const trashIcon = document.createElement('img')

    createItem.classList.add('list-item')
    createCheckBox.classList.add('check')
    text.innerHTML = `${value}`
    checkIcon.src = './assets/check-icon.svg'
    createCheckBox.append(checkIcon)
    trashIcon.src = './assets/trash-icon.svg'
    trashIcon.alt = 'icone para remover item da lista'
    trashIcon.classList.add('remove')

    // função para remover um item
    trashIcon.addEventListener('click', () => {
        createItem.remove()
    })

    // função para marcar um item como feito
    checkIcon.addEventListener('click', () => {
        createCheckBox.classList.toggle('ok')
    })
    createBox.append(createCheckBox, text)
    createItem.append(createBox, trashIcon)


    list.append(createItem)
}
