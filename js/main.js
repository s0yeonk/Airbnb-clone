window.onload=function(){
  document.querySelectorAll('.category-button').forEach(button=>{
    button.addEventListener('click',event=>{
      document.querySelector('#category-active').removeAttribute('id')
      button.setAttribute('id','category-active')
    })
  })
}