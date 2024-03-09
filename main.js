    // Hold active link

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('#left-main-panel .second-element li a');
  links.forEach(function(link) {
    if (sessionStorage.getItem('activeLink') === link.getAttribute('href')) {
      link.classList.add('active');
    }
    link.addEventListener('click', function(event) {
      event.preventDefault();
      links.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
      sessionStorage.setItem('activeLink', this.getAttribute('href'));
      window.location.href = this.getAttribute('href');
    });
  });
});

    // Table

const showTableButton = document.getElementById("showTableButton");
const tableContainer = document.getElementById("tableContainer");

showTableButton.addEventListener("click", function() {
  tableContainer.style.display = "block";
});
function showTable1() {
  var tableContainer = document.getElementById('tableContainer1');
  tableContainer.style.display = 'block';
}
function closeTable1() {
var tableContainer = document.getElementById('tableContainer1');
tableContainer.style.display = 'none';
}
function showTable2() {
  var tableContainer = document.getElementById('tableContainer2');
  tableContainer.style.display = 'block';
}
function closeTable2() {
var tableContainer = document.getElementById('tableContainer2');
tableContainer.style.display = 'none';
}


