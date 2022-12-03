var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 100) {
        nav.classList.add('bg-black', 'shadow');
    } else {
        nav.classList.remove('bg-black', 'shadow');
    }
});


// sample rating form

// const btn = document.querySelector("button");
// const post = document.querySelector(".post");
// const widget = document.querySelector(".star-widget");
// const editBtn = document.querySelector(".edit");
// btn.onclick = ()=>{
//   widget.style.display = "none";
//   post.style.display = "block";
//   editBtn.onclick = ()=>{
//     widget.style.display = "block";
//     post.style.display = "none";
//   }
//   return false;
// }

// 2nd recipe rating

const btn1 = document.querySelector("btns1");
const post1 = document.querySelector(".post1");
const widget1 = document.querySelector(".star-widget1");
const editBtn1 = document.querySelector(".edit1");
btn1.onclick = ()=>{
  widget1.style.display = "none";
  post1.style.display = "block";
  editBtn1.onclick = ()=>{
    widget1.style.display = "block";
    post1.style.display = "none";
  }
  return false;
}