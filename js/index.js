var task = new Array();
var task_edit = document.querySelector("#task-edit-box");
var task_input = document.querySelector(".task-title-detail");
var taskNow = document.querySelector(".task-Now .task-list");
var submitBtn = document.querySelector(".submit-task");
var addTask = document.querySelector(".addTask");
var close_box = document.querySelector(".close-box");
var list_blank = document.querySelector(".list-blank");

const bottomBtn = document.querySelectorAll(".function-box a");

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

// 判断ul里面是否有内容
function isDisplay() {
    if (taskNow.contains(taskNow.querySelector('li'))) {
        list_blank.innerHTML = "您还有" + "<span class='task-length'>" + (taskNow.childNodes.length - 1) + "</span>" + "个待办任务";
    } else {
        list_blank.innerHTML = "您添加的任务都已经完成啦~";
    }
}

// 提交方法
const submitTask = function () {
    // 判断为空
    if (!task_input.value) {
        alert("至少要输入一个字符");
        task_input.value = "";
        task_input.focus();
        // modal.close();
        return;
    }

    // 1. 创建虚拟 DOM
    const li = document.createElement('li');

    // 创建 删除 按钮
    const span_delete = document.createElement('span');
    span_delete.className = 'delete-item';
    span_delete.textContent = '删除';

    // 创建修改状态按钮
    const span_complete = document.createElement('span');
    span_complete.className = 'complete-item';
    span_complete.textContent = '完成';

    // 2. 生成数组
    task.unshift({
        taskname: task_input.value,
        type: 'uncompleted'
    });

    // 3. 把数组中的第一个元素渲染到创建的虚拟 DOM 中
    li.textContent = task[0].taskname;
    li.appendChild(span_delete);
    li.appendChild(span_complete);

    // 4. 把虚拟 DOM 渲染到页面结构中
    taskNow.insertBefore(li, taskNow.childNodes[0]);

    // 判断是否删除
    isDisplay();
    // 添加成功后，关闭 modal
    modal.close();
    itemDelete();
    itemComplete();
}

// submit content
submitBtn.onclick = function () {
    submitTask();
}

// 按 ENTER 键提交
task_input.onkeypress = function () {
    if (event.keyCode == 13) {
        submitTask();
    }
}

// 点击删除 状态变为 deleted
function itemDelete() {
    var deleteBtn = document.querySelectorAll(".delete-item");
    deleteBtn.forEach((item, index) => {
        item.onclick = function () {
            item.parentElement.remove();

            // 设置状态
            task[index].type = "deleted";

            // 显示剩余任务的个数
            isDisplay();
        }
    });
}

// 点击完成 状态变为 completed
function itemComplete() {
    var completeBtn = document.querySelectorAll(".complete-item");
    completeBtn.forEach((item, index) => {
        item.onclick = function () {
            item.parentElement.remove();

            // 设置状态
            task[index].type = "completed";

            // 显示剩余任务的个数
            isDisplay();
        }
    });
}

// tab切换样式

for (var i = 0; i < bottomBtn.length; i++) {
    var btn = bottomBtn[i];
    btn.onclick = function () {
        for (var j = 0; j < bottomBtn.length; j++) {
            bottomBtn[j].className = '';
        }
        this.className = 'active';
    }
}

// 获取到 显示所有 按钮
const displayallBtn = document.querySelector(".displayAll");

// 点击显示所有执行
displayallBtn.onclick = function () {
    if (task.length === 0) {
        alert("您还没有添加过任务呢~");
    } else {
        
    }
}

const displayCom = document.querySelector(".displayCom");
displayCom.onclick = function () {}