var task = new Array();
var task_edit = document.querySelector("#task-edit-box");
var task_input = document.querySelector(".task-title-detail");
var task_wrap = document.querySelector(".task-list");
var submitBtn = document.querySelector(".submit-task");
var addTask = document.querySelector(".addTask");
var close_box = document.querySelector(".close-box");


const modal = {
    show: function () {
        task_edit.style.display = "block";
        task_input.focus();
        task_input.value = "";
    },
    close: function () {
        task_edit.style.display = "none";
        task_input.value = "";
    }
}

// show modal
addTask.onclick = function () {
    modal.show();
}

// close modal
close_box.onclick = function () {
    modal.close();
}

// submit content
submitBtn.onclick = function () {
    if (!task_input.value) {
        alert("至少要输入一个字符");
        modal.close();
        return;
    }

    // generate array
    task.unshift({ taskname: task_input.value, type: 'uncompleted' });

    task.forEach((taskItem) => {
        // 1. create
        var li = document.createElement("li");
        var span = document.createElement("span");

        // 2. render
        span.className = 'delete-item';
        span.textContent = '删除';
        li.textContent = taskItem.taskname;
        li.appendChild(span);
        task_wrap.appendChild(li);
    });
    modal.close();
}


/*
var taskData = new Array();
var wrap = document.querySelector('.wrap');
var taskWrap = document.querySelector(".task-list");

// 点击添加，弹出输入框
function addTask() {
    wrap.querySelector("#task-edit-box").style.display = "block";
    document.querySelector(".task-title-detail").focus();
}
// 关闭输入框
function closeWrite() {
    document.getElementById("task-edit-box").style.display = "none";
}


// 在页面中显示新添加的数组元素
var inputVal = document.querySelector(".task-title-detail");
function submitCon() {
    if (!inputVal.value) {
        alert("不能为空");
        closeWrite();
    } else {
        taskData.unshift(inputVal.value);
        document.querySelector(".task-title-detail").value = "";
        document.getElementById("task-edit-box").style.display = "none";
        taskWrap.innerHTML += "<li>" + taskData[0] + "<span class='delete-item'>删除</span></li>";
        taskWrap.setAttribute("isNull", "false");
        itemDelete();
    }
}
inputVal.onkeypress = function () {
    if (event.keyCode == 13) {
        submitCon();
    }
}

// 在页面中不显示 删除对应数组中的元素
function itemDelete() {
    var taskItem = document.querySelectorAll(".task-list li");
    var deleteBtn = document.querySelectorAll(".delete-item");
    deleteBtn.forEach((item, index) => {
        item.onclick = function () {
            var r = confirm("确定要删除吗")
            if (r == true) {
                taskItem[index].remove();
                taskData.splice(index, 1);
                if (taskData.length == 0) {
                    taskWrap.setAttribute("isNull", "true");
                }
            }
        }
    });
}
itemDelete();

*/