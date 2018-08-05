function addTask() {
    document.getElementById("task-edit-box").style.display = "block";
}
function closeWrite() {
    document.getElementById("task-edit-box").style.display = "none";
}
function submitCon() {
    var taskCon = document.querySelector(".task-title-detail").textContent;
    console.log(taskCon)
}
var taskData = [{
    msg: "写代码",
    status: "待办"
}, {
    msg: "写代码2",
    status: "待办2"
}]
var taskWrap = document.querySelector(".task-list");

for (i = 0; i < taskData.length; i++) {
    taskWrap.innerHTML += "<li>" + taskData[i].msg + "</li>";
}
// taskWrap.innerHTML = "<li>"+taskData[0].msg+"</li>";
// 使用unshift

