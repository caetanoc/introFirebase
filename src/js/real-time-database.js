var usersList = document.getElementById('usersList');
var nameInput = document.getElementById('nameInput');
var qttyInput = document.getElementById('qttyInput');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nameInput.value, qttyInput.value);
});

// Função para criar um registro no Firebase
function create(name, qtty) {
    var data = {
        name: name,
        qtty: qtty
    };

    return firebase.database().ref().child('prod').push(data);
}

firebase.database().ref('prod').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().qtty));

        let key = item.key;
        let editIconUI = document.createElement("span");
        editIconUI.class = "edit-prod";
        editIconUI.innerHTML = " ✎";
        editIconUI.setAttribute("prodid", key);
        editIconUI.addEventListener("click", editButtonClicked) // Append after li.innerHTML = value.name 
        li.append(editIconUI);

        			// delete icon
        let deleteIconUI = document.createElement("span");
        deleteIconUI.class = "delete-user";
        deleteIconUI.innerHTML = " ☓";
        deleteIconUI.setAttribute("prodid", key);
        deleteIconUI.addEventListener("click", deleteButtonClicked)
			
        li.append(deleteIconUI);

        li.setAttribute("prod-key", key);


        usersList.appendChild(li);

    });
});

// --------------------------
// DELETE
// --------------------------
function deleteButtonClicked(e) {

    e.stopPropagation();

    var userID = e.target.getAttribute("prodid");
    const userRef = dbRef.child('prod/' + userID);
    
    userRef.remove();
}



function editButtonClicked(e){
    //set user id to the hidden input field 
    //document.querySelector(".edit-prod").value = e.target.getAttribute("uid");

    // data-bs-toggle="modal" data-bs-target="#exampleModal"

    var userID = e.target.getAttribute("prodid");
    const prodRef = dbRef.child('prod/' + userID);

    prodRef.on("value", snap => {

        //userDetailUI.innerHTML = ""


    });
}

/*
function editButtonClicked(e) {
	
	document.getElementById('edit-user-module').style.display = "block";
	//set user id to the hidden input field
	document.querySelector(".edit-userid").value = e.target.getAttribute("userid");

	const userRef = dbRef.child('users/' + e.target.getAttribute("userid"));

	// set data to the user field
	const editUserInputsUI = document.querySelectorAll(".edit-user-input");


	userRef.on("value", snap => {

		for(var i = 0, len = editUserInputsUI.length; i < len; i++) {

			var key = editUserInputsUI[i].getAttribute("data-key");
					editUserInputsUI[i].value = snap.val()[key];
		}

	});




	const saveBtn = document.querySelector("#edit-user-btn");
	saveBtn.addEventListener("click", saveUserBtnClicked)
}


function saveUserBtnClicked(e) {
 
	const userID = document.querySelector(".edit-userid").value;
	const userRef = dbRef.child('users/' + userID);

	var editedUserObject = {}

	const editUserInputsUI = document.querySelectorAll(".edit-user-input");

	editUserInputsUI.forEach(function(textField) {
		let key = textField.getAttribute("data-key");
		let value = textField.value;
  		editedUserObject[textField.getAttribute("data-key")] = textField.value
	});



	userRef.update(editedUserObject);

	document.getElementById('edit-user-module').style.display = "none";
}
*/

