const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('item')) || [] // 判断是否本地有存储
function addItem (e) {
  e.preventDefault()
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  }
  items.push(item)
  localStorage.setItem('item', JSON.stringify(items))
  itemPush(items, itemsList)
}
function itemPush (items = [], list) {
  list.innerHTML = items.map((item, index) => {
    return `
    <li>
    <input type="checkbox" data-index =${index} id ="item${index}" ${item.done
  ? 'checked'
  : ''}    />
    <label for='item${index}'>${item.text}</label>
    </li>
    `
  }).join('')
}
itemPush(items, itemsList) // 读取本地储存的列表

function itemInput (e) {
  if (e.target.nodeName !== 'INPUT') { // 通过nodeName，判断是否是input
    return
  }
  const el = e.target
  const index = el.dataset.index // 点击当前的key
  items[index].done = !items[index].done

  localStorage.setItem('item', JSON.stringify(items)) // 每次更改保存最新的checked到本地
}
itemsList.addEventListener('click', itemInput) // 点击item更改checked状态

addItems.addEventListener('submit', addItem) // 添加input事件
