document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    console.log(elems);
     M.Modal.init(elems);
  });
  const sideNav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sideNav, {});

