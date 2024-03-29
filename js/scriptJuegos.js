

var selectedRow = null
var i = 1;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null){
    insertNewInfor(formData);
  }
  else{
    updateRecord(formData);
  }
  resetForm();
}


function readFormData() {

  var formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["descripcion"] = document.getElementById("descripcion").value;
  formData["genero"] = document.getElementById("opciones1").value;
  formData["plataforma"] = document.getElementById("opciones2").value;
  formData["distribuidora"] = document.getElementById("opciones3").value;
  formData["precio"] = document.getElementById("precio").value;
  return formData;
}

function insertNewInfor(data) {
  var table = document.getElementById("listaJuegos").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML=i;
  i++;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML =data.name;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML =data.descripcion;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML =data.genero;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML =data.plataforma;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML =data.distribuidora;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = data.precio;
  cell7 = newRow.insertCell(7);
  cell7.innerHTML = `<button onClick="onEdit(this)" class="btn btn-primary">Editar</button>
                                       <button onClick="onDelete(this)" class="btn btn-danger">Eliminar</button>`;


}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("descripcion").value = selectedRow.cells[2].innerHTML;
  document.getElementById("opciones1").value = selectedRow.cells[3].innerHTML;
  document.getElementById("opciones2").value = selectedRow.cells[4].innerHTML;
  document.getElementById("opciones3").value = selectedRow.cells[5].innerHTML;
  document.getElementById("precio").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.name;
  selectedRow.cells[2].innerHTML = formData.descripcion;
  selectedRow.cells[3].innerHTML = formData.genero;
  selectedRow.cells[4].innerHTML = formData.plataforma;
  selectedRow.cells[5].innerHTML = formData.distribuidora;
  selectedRow.cells[6].innerHTML = formData.precio;
}
function onDelete(td) {
  if (confirm('Quieres eliminar este juego?')) {
    row = td.parentElement.parentElement;
    document.getElementById('listaJuegos').deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
  document.getElementById("name").value = '';
  document.getElementById("descripcion").value = '';
  document.getElementById("opciones1").value = '';
  document.getElementById("opciones2").value = '';
  document.getElementById("opciones3").value = '';
  document.getElementById("precio").value = '';
  selectedRow = null;
}
