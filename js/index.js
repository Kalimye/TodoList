var task = new Array();
var task_edit = document.querySelector("#task-edit-box");
var task_input = document.querySelector(".task-title-detail");
var task_wrap = document.querySelector(".task-list");
var submitBtn = document.querySelector(".submit-task");
var addTask = document.querySelector(".addTask");
var close_box = document.querySelector(".close-box");
var list_blank = document.querySelector(".list-blank");

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
    if (task_wrap.contains(task_wrap.querySelector('li'))) {
        list_blank.textContent = "您还有" + (task_wrap.childNodes.length - 1) + "个待办任务";
    } else {
        list_blank.textContent = "还没有添加过任务…";
    }
}

// submit content
const submitTask = function () {
    if (!task_input.value) {
        alert("至少要输入一个字符");
        task_input.value = "";
        task_input.focus();
        // modal.close();
        return;
    }

    // 1. 创建虚拟 DOM
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.className = 'delete-item';
    span.textContent = '删除';

    // 2. 生成数组
    task.unshift({ taskname: task_input.value, type: 'uncompleted' });

    // 3. 把数组中的第一个元素渲染到创建的虚拟 DOM 中
    li.textContent = task[0].taskname;
    li.appendChild(span);

    // 4. 把虚拟 DOM 渲染到页面结构中
    task_wrap.insertBefore(li, task_wrap.childNodes[0]);

    // 判断是否删除
    isDisplay();
    // 添加成功后，关闭 modal
    modal.close();
    itemDelete();
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

// 删除功能

// 点击删除的时候，页面中删除，数组中不删除
function itemDelete() {
    // var taskItem = document.querySelectorAll(".task-list li");
    var deleteBtn = document.querySelectorAll(".delete-item");
    deleteBtn.forEach((item, index) => {
        item.onclick = function () {
            console.log(item.parentElement);
            item.parentElement.remove();

            // 设置状态
            task[index].type = "deleted";

            // 显示剩余任务的个数
            isDisplay();
        }
    });
}