document.addEventListener('mouseover',function(e){
  if(e.target && e.target.classList?.contains('user-hoverable')){
    console.log('matched...')
  }
});

// the following code below was given to me by another dev but I think event delegation is best
// const userInformations = document.querySelectorAll('.user-information')
// const onMouseOver = event => console.log(event.target)

// userInformations.map(userInfo => userInfo.addEventListener('mouseover', onMouseOver))

