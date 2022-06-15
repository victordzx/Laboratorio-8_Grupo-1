

var selectedRow = null

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
  formData["genero"] = document.getElementById("genero").value;
  formData["plataforma"] = document.getElementById("plataforma").value;
  formData["distribuidora"] = document.getElementById("distribuidora").value;
  formData["precio"] = document.getElementById("precio").value;
  return formData;
}

function insertNewInfor(data) {
  var table = document.getElementById("listaJuegos").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML =data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML =data.descripcion;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML =data.genero;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML =data.plataforma;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML =data.distribuidora;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML =data.precio;
  cell6 = newRow.insertCell(6);
  cell6.innerHTML = cell6.innerHTML = `<button onClick="onEdit(this)">Editar</button>
                                       <button onClick="onDelete(this)">Eliminar</button>`;


}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("descripcion").value = selectedRow.cells[1].innerHTML;
  document.getElementById("genero").value = selectedRow.cells[2].innerHTML;
  document.getElementById("plataforma").value = selectedRow.cells[3].innerHTML;
  document.getElementById("distribuidora").value = selectedRow.cells[4].innerHTML;
  document.getElementById("precio").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.descripcion;
  selectedRow.cells[2].innerHTML = formData.genero;
  selectedRow.cells[3].innerHTML = formData.plataforma;
  selectedRow.cells[4].innerHTML = formData.distribuidora;
  selectedRow.cells[5].innerHTML = formData.precio;
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
  document.getElementById("genero").value = '';
  document.getElementById("plataforma").value = '';
  document.getElementById("distribuidora").value = '';
  document.getElementById("precio").value = '';
  selectedRow = null;
}
