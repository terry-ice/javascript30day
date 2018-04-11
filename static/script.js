// get post data
const postDatas = []
// blog url
const blogUrl = 'http://www.592php.com/'
// github url
const githubUrl = 'https://github.com/592php/javascript30day/tree/master/'
const github = 'https://592php.github.io/javascript30day/'

const couseList = document.querySelector('.courseList')
fetch('static/index.json')
  .then(blob => blob.json())
  .then(data => {
    postDatas.push(...data)
    createView()
  })
function createView () {
  let view = []
  postDatas.forEach(data => {
    view.push(`<li>
<div class="course">
<h2 class="course__title">第 ${data.no} 天 - ${data.title}</h2>
<div class="course__desc">${data.desc}</div>
<a class="course__btn" href="${github +
  data.github}" target="_blank" >Demo</a>
<a class="course__btn"  href="${githubUrl +
  data.github}" target="_blank" >笔记</a>

</div>
</li>`)
  })
  document.querySelector('.courseList').innerHTML = view.join('')
}
// <a class="course__btn" href="${githubUrl +
//   data.github}" target="_blank">Source Code</a>
