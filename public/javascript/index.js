// init Masonry
var $grid = document.getElementById('masonry').masonry({
  itemSelector: '.col',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});

// Code below is related to user hover 
const fetchedUserInfos = new Map();
document.addEventListener('mouseover',function(e){
  if(e.target && e.target.classList?.contains('user-hoverable')){
    const userId = e.target.getAttribute('data-link');
    var tooltip = e.target.querySelector('.user-hoverable-text');
    if( !fetchedUserInfos.has(userId) ){
      fetch(`/users/${userId}`)
        .then( res => res.json())
        .then( res => {
          fetchedUserInfos.set(e.target.getAttribute('data-link'), res);
          tooltip.textContent = `Rank: ${res.rank}`;
        })
        .catch(error => {
          console.log(error); 
        })
    }
    else if (!tooltip.textContent){
      // Edge Case: if it's the same userID that we already have but on a differnt card
      // it will not have a textContent but the info will be in the Map from above
      tooltip.textContent = `Rank: ${fetchedUserInfos.get(userId).rank}`;
    }
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = 1;
  }
});
document.addEventListener('mouseout',function(e){
  if(e.target && e.target.classList?.contains('user-hoverable')){
    var tooltip = e.target.querySelector('.user-hoverable-text');
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = 0;
  }
});