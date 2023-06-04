function aufklappen() {
    document.getElementById('submenu').style.display = 'block';
}
function zuklappen() {
    document.getElementById('submenu').style.display = 'none';
}

function aufklappenLand() {
    document.getElementById('Landmenu').style.display = 'block';
}
function zuklappenLand() {
    document.getElementById('Landmenu').style.display = 'none';
}

function aufklappenUnternehm() {
    document.getElementById('Unternehmmenu').style.display = 'block';
}
function zuklappenUnternehm() {
    document.getElementById('Unternehmmenu').style.display = 'none';
}
/* Filtern nach Länder */
function funktionenL() {
    var input, filter, table, tr, td, i , txtValue;
    input= document.getElementById("inputL");
    filter= input.value.toUpperCase();
    table= document.getElementById("TabelleLand");
    tr= table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td") [0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
/* Filtern nach Unternehmen */
function funktionenU() {
    var input, filter, table, tr, td, i , txtValue;
    input= document.getElementById("inputU");
    filter= input.value.toUpperCase();
    table= document.getElementById("TabelleUnternehm");
    tr= table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td") [0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
