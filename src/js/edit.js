// edit icon 
let editIconUI = document.createElement("span");
editIconUI.class = "edit-user";
editIconUI.innerHTML = " ✎";
editIconUI.setAttribute("userid", key);
editIconUI.addEventListener("click", editButtonClicked) // Append after li.innerHTML = value.name 
$li.append(editIconUI);

document.getElementById('edit-user-module').style.display = "none";
