const pressed = []
const secretCode = 'terry'
window.addEventListener('keyup', function (e) {
  pressed.push(e.key)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length) // 删除数组的第一个数
  if (pressed.join('').includes(secretCode)) {
    // 通过join转数组为字符串，通过includes()查找判断执行
    console.log('DING DIng,terry')
    cornify_add()
  }
  console.log(pressed)
})
