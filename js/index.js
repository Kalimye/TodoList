// var taskData = [{
//     msg: "写代码",
//     status: "待办"
// }, {
//     msg: "写代码2",
//     status: "待办2"
// }];

var taskData = ["112", "544"];

function addTask() {
    document.getElementById("task-edit-box").style.display = "block";
}
function closeWrite() {
    document.getElementById("task-edit-box").style.display = "none";
}
var taskWrap = document.querySelector(".task-list");

for (i = 0; i < taskData.length; i++) {
    taskWrap.innerHTML += "<li>" + taskData[i] + "</li>";
}
function submitCon() {
    var taskCon = document.querySelector(".task-title-detail").value;
    taskData.unshift(taskCon);
    document.querySelector(".task-title-detail").value = "";
    document.getElementById("task-edit-box").style.display = "none";
    taskWrap.innerHTML += "<li>" + taskData[0] + "</li>";
}


// taskWrap.innerHTML = "<li>"+taskData[0].msg+"</li>";
// 使用unshift

