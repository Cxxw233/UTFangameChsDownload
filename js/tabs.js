let title = document.getElementsByClassName('title')[0]
let title1 = document.getElementsByClassName('title1')[0]
let content = document.getElementsByClassName('content')[0]
let content1 = document.getElementsByClassName('content1')[0]
let titlelist = title.children
let titlelist1 = title1.children
let contentlist = content.children
let contentlist1 = content1.children
for(let i = 0; i < titlelist.length; i++){
  let item = titlelist[i];
  item.onclick = () => {
    let active = title.getElementsByClassName('active')[0]
    active.classList.remove('active')
    item.classList.add("active")
    
    
    for(let j = 0; j < titlelist.length; j++){
    contentlist[j].style.display = "none"
    }
    contentlist[i].style.display = "block"
  }
}
for(let i = 0; i < titlelist1.length; i++){
  let item1 = titlelist1[i];
  item1.onclick = () => {
    let active1 = title1.getElementsByClassName('active1')[0]
    active1.classList.remove('active1')
    item1.classList.add("active1")
    
    for(let j = 0; j < titlelist1.length; j++){
    contentlist1[j].style.display = "none"
    }
    contentlist1[i].style.display = "block"
  }
}