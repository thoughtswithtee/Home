function myFunction() {
    var dot = document.getElementById("dot");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnText.innerHTML = "... more";
      moreText.style.display = "none";
    } else {
      dot.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
  const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))