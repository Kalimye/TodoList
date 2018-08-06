// var taskData = [{
//     msg: "写代码",
//     status: "待办"
// }, {
//     msg: "写代码2",
//     status: "待办2"
// }];
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
// 在ul中遍历数组元素
// for (var i = 0; i < taskData.length; i++) {
// const li = document.createElement('li');
// const span = document.createElement('span');
// span.className = 'delete-item';
// span.textContent = '删除';

// li.appendChild(span);
// console.log(li);
//     taskWrap.innerHTML += "<li>" + taskData[i] + "<span class='delete-item'>删除</span></li>";
//     taskWrap.innerHTML += `<li>${taskData[i]}<span class='delete-item'>删除</span><li>`;
// }


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
inputVal.onkeypress = function(){
    if(event.keyCode == 13){
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
                if (taskData[0] == undefined) {
                    taskWrap.setAttribute("isNull", "true");
                }
            } else {
                console.log("未删除")
            }
        }
    });
}
itemDelete();


// 加判断 如果ul里面有li显示 隐藏 “还没有添加过任务”
// 页面中添加删除元素 是不是要用节点来控制呢？