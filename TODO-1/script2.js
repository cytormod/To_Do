"use strict";
// & Today's task area
const taskCreate = document.querySelector(".created_task");
const btnNewTaskEvent = document.querySelector(".btnNewTask");

// & Modal Window
const blurryBackground = document.querySelector(".felx2");
const modalMain = document.querySelector(".modal-main");
const mdCloseBtn = document.querySelector(".md_closeBtn");
const mdtaskName = document.querySelector("#md_task-name");
const description = document.querySelector("#Description");
const todaysDate = document.querySelector("#today_Date");
const mdTaskLists = document.querySelector(".md_taskLists");
const mdSelectLists = document.querySelector(".md_selectLists");
const mdDueDate = document.querySelector(".md_dueDate");
const createTask = document.querySelector(".md_delete-save");

// & Menu - Task
const subTasks = document.querySelector(".sub-tasks");
/**
 * Upcoming
 * Today
 * completed Tasks
 * Incomplete Tasks
 */
// & Menu - List
const subLists = document.querySelector(".sub-lists");
/**
 * Personal
 * Work
 * Health
 * Hobby
 * Time For Friends
 */

// & Menu - Tags

// & Indetailed Tasks
const indetailTaskEve = document.querySelector(".indetailTask");

// & Overview
const currentTasksList = document.querySelector(".current-tasks-list");
const selectedTask = document.querySelector(".selected-task");

// ^ Functions

function modalWindow(value, grayscale) {
  todaysDate.value = new Date().toISOString().split("T")[0];
  modalMain.style.display = `${value}`;
  blurryBackground.style.filter = `${grayscale}`;
}

// ^ CODE

btnNewTaskEvent.addEventListener("click", () => {
  modalWindow("block", "blur(1.3px)" + "grayscale(100%)");
});

mdCloseBtn.addEventListener("click", () => {
  modalWindow("none", "none");
});

createTask.addEventListener("click", () => {
  taskCreate.innerHTML += `
  <div class="overviewTasks"> 
          <li>
                      <input type="checkbox" name="1st-Task" id="generalTaskId" />
                      <label for="1st-Task">${mdtaskName.value}</label>
                      <br />
                    </li>
                    <div class="overviewNaming">
                      <h5>Overview</h5>
                      <h5>Delete task</h5>
                    </div>
                  </div>
                  </div>
      `;
  console.log(taskCreate);
  console.log(mdtaskName.value, description.value, todaysDate.value);
  console.log(mdTaskLists.lastElementChild.value);
  modalWindow("none", "none");
});
