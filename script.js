

var createQuestions = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (createQuestions == null){
            insertNewRecord(formData);
		}
        else{
            onSave(formData);
		}
        resetForm();    
}
// function save(){
//     if(createQuestions !== null && formData){
//         onSave(formData)
//     }
// }

function readFormData() {
    var formData = {};
    formData["question"] = document.getElementById("question").value;
    formData["description"] = document.getElementById("description").value;
    formData["type"] = document.getElementById("type").value;
    formData["response"] = document.getElementById("response").value;
    return formData;
}


function insertNewRecord(data) {
   
    var table = document.getElementById("questionList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell=newRow.insertCell(0);
        cell.innerHTML=`<input type="radio" id="radio" onchange="onRadioSelect(this)">`
    cell1 = newRow.insertCell(1);
		cell1.innerHTML = data.question;
    cell2 = newRow.insertCell(2);
		cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(3);
		cell3.innerHTML = data.type;
    cell4 = newRow.insertCell(4);
		cell4.innerHTML = data.response;
}

function show(){
    var x =document.getElementById('radio')
    console.log(x)
}

function onRadioSelect(value) {
       var action= document.getElementById('action')
    action.innerHTML =`<button id="edit" onClick="onEdit()">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    createQuestions = value.parentElement.parentElement;
    console.log(createQuestions)

    document.getElementById("question").value = createQuestions.cells[1].innerHTML;
    document.getElementById("description").value = createQuestions.cells[2].innerHTML;
    document.getElementById("type").value = createQuestions.cells[3].innerHTML;
    document.getElementById("response").value = createQuestions.cells[4].innerHTML;
}

function onSave(formData) {
    var action= document.getElementById('action')
    action.innerHTML =`<button onClick="onDelete(this)">Delete</button>`;
    createQuestions.cells[1].innerHTML = formData.question;
    createQuestions.cells[2].innerHTML = formData.description;
    createQuestions.cells[3].innerHTML = formData.type;
    createQuestions.cells[4].innerHTML = formData.response;
    
}

function onEdit(){
    var action= document.getElementById('action');
    action.innerHTML =`<button id="edit" >Save</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onDelete(td) {
    
    row = td.parentElement.parentElement;
        if(action&&row){
            document.getElementById('questionData').deleteRow(row.rowIndex)
            deleteRadio();
            removeButton();
            resetForm();
        }
        

}
function removeButton(){
    const element = document.getElementById("action").innerHTML;
    element.removeChild()
    console.log(element)
}
function deleteRadio(){
    
    const element = document.getElementById("radio");
    // element.remove();    
    console.log(element)

}
function resetForm() {
    document.getElementById("question").value = '';
    document.getElementById("description").value = '';
    document.getElementById("type").value = '';
    document.getElementById("response").value = '';
    createQuestions = null;
}