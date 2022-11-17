let moveToUp = document.querySelector('.move-to-up'),
    navbar = document.querySelector('.navbar'),
    search = document.querySelector('.search'),
    btnSearchIcon = document.querySelector('.btn-search i'),
    btnSearch = document.querySelector('.btn-search');

btnSearch.onclick = function() {
  btnSearchIcon.classList.toggle('bi-search');
  btnSearchIcon.classList.toggle('bi-x');
  search.classList.toggle('d-none');
}

document.onscroll = function() {
  // if(scrollY > 50)
  // {
  //   navbar.classList.add('fixed-top');
  // } else {
  //   navbar.classList.remove('fixed-top');
  // }

  if(scrollY > 400)
  {
    moveToUp.classList.add('d-block');
    moveToUp.classList.remove('d-none');
  }
  else
  {
    moveToUp.classList.add('d-none');
    moveToUp.classList.remove('d-block');
  }
}

moveToUp.onclick = function() {
  scrollTo(0, 0);
}
