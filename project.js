var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow');
    }
});

// sample rating form

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = ()=>{
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = ()=>{
    widget.style.display = "block";
    post.style.display = "none";
  }
  return false;
}

// sample contact us form

$("#formValidation").validate({
    rules:{
      name:{
        minlength: 2
      },
      email:{
        email:true
      },
      phone: {
        number:true,
        minlength: 10,
        maxlength: 15
      }
    },
  messages: {
    name: {
      required: "Please enter your name",
    minlength: "Name at least 2 characters"
    },
    email: "Please enter your email",
    phone: "Please enter your phone",
    formMessage: "Please enter your message"
  },

  submitHandler: function(form) {
    form.submit();
  }
 });
