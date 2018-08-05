// var taskData = [{
//     msg: "写代码",
//     status: "待办"
// }, {
//     msg: "写代码2",
//     status: "待办2"
// }];

var taskData = ["112", "544"];

// 点击添加，弹出输入框
function addTask() {
    document.getElementById("task-edit-box").style.display = "block";
    document.querySelector(".task-title-detail").focus();
}
// 关闭输入框
function closeWrite() {
    document.getElementById("task-edit-box").style.display = "none";
}
// 在ul中遍历数组元素
var taskWrap = document.querySelector(".task-list");
for (var i = 0; i < taskData.length; i++) {
    taskWrap.innerHTML += "<li>" + taskData[i] + "<span class='delete-item'>删除</span></li>";
}
// 在页面中显示新添加的数组元素
function submitCon() {
    var taskCon = document.querySelector(".task-title-detail").value;
    taskData.unshift(taskCon);
    document.querySelector(".task-title-detail").value = "";
    document.getElementById("task-edit-box").style.display = "none";
    taskWrap.innerHTML += "<li>" + taskData[0] + "<span class='delete-item'>删除</span></li>";
}

// 在页面中不显示 删除对应数组中的元素
var taskItem = document.querySelectorAll(".task-list li");
var deleteBtn = document.querySelectorAll(".delete-item");
deleteBtn.forEach((item, index) => {
    item.onclick = function () {
        deleteBtn[index].style.display = "none";
        taskItem[index].style.display = "none";
        taskData.splice(index, 1);
    }
});

// 加判断 如果ul里面有li显示 隐藏 “还没有添加过任务”
// 页面中添加删除元素 是不是要用节点来控制呢？