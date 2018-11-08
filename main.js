

	var addTask = document.getElementById('addTask');
	var parentAddTask = addTask.parentNode;
	var s=0;
	addTask.onclick = function first(event){
	if(document.getElementById('textarea') == null){
		var add = document.createElement('textarea');
		add.id = "textarea";
		parentAddTask.insertBefore(add, addTask);
	}
	
	else {
		s=s+1;
		var newTask = document.createElement('div');
		newTask.className = "newTask";
		newTask.id = "newTask" + s;
		var newEdit = document.createElement('div');
		newEdit.className = "newEdit";
		newEdit.id = "edit" + s;
		newEdit.innerHTML = "edit";
		var valueTextarea = document.getElementById('textarea').value;
		newTask.innerHTML = valueTextarea;
		parentAddTask.replaceChild(newTask, document.getElementById('textarea'));
		parentAddTask.insertBefore(newEdit, addTask);
		newEdit.onclick = second;
	} 

}

    function second(event){
    if(document.getElementById('edit') == null){
		var edit = document.createElement('textarea');
		edit.id = "edit";
		if (event.target.id[5] == undefined){
		edit.value = document.getElementById('newTask' + event.target.id[4]).innerHTML;
		parentAddTask.replaceChild(edit, document.getElementById('newTask' + event.target.id[4]));
		event.target.innerHTML = "save";
	}
	else {
		edit.value = document.getElementById('newTask' + event.target.id[4] + event.target.id[5]).innerHTML;
		parentAddTask.replaceChild(edit, document.getElementById('newTask' + event.target.id[4] + event.target.id[5]));
		event.target.innerHTML = "save";
	}
	}	
	else {
		var newTask = document.createElement('div');
		newTask.innerHTML = document.getElementById('edit').value;
		newTask.className = "newTask";
		if (event.target.id[5] == undefined){
		newTask.id = "newTask" + event.target.id[4];
		parentAddTask.replaceChild(newTask, document.getElementById('edit'));
		event.target.innerHTML = "edit";
		}
		else {
			newTask.id = "newTask" + event.target.id[4] + event.target.id[5];
			parentAddTask.replaceChild(newTask, document.getElementById('edit'));
			event.target.innerHTML = "edit";
		}
	}
}

	