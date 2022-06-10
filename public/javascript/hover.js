const userInformations = document.querySelectorAll('.user-information');
console.log(userInformations)

// need to fetch from customer server endpoint 
userInformations.forEach(userInformation => {
  userInformation.addEventListener('mouseover', (event) => {
    console.log(event.target);
  });
  userInformation.addEventListener('mouseleave', (event) => {
    console.log('leaving!')
  });
});
