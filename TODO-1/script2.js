"use strict";
// & Today's task area
const taskCreate = document.querySelector(".created_task");
const btnNewTaskEvent = document.querySelector(".btnNewTask");
const overviewBtn = document.querySelector(".overviewNaming");

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

  console.log(mdtaskName.value, description.value, todaysDate.value);
  console.log(mdTaskLists.lastElementChild.value);
  modalWindow("none", "none");
});

taskCreate.addEventListener("click", (e) => {
  const dueDate = mdDueDate.querySelector("input[name='dueDate']");
  if (e.target.closest(".overviewNaming")) {
    if (e.target.tagName === "H5" && e.target.textContent === "Overview") {
      console.log(indetailTaskEve);
      indetailTaskEve.style.display = "block";
      indetailTaskEve.innerHTML += `
        <div class="aboutTask">
              <h3>About your Task: ${mdtaskName.value}</h3>
            </div>
            <div class="task-name">
              <h2>Your Aim</h2>
              <br />
              <h5 class="idtTitle">${mdtaskName.value}</h5>

              <h2>Focus on Why and What</h2>
              <br />
              <p class="idtDescription">
                ${description.value}
              </p>

              <h2>The Deadline of your Struggle ends in</h2>
              <br />
              <h5>${dueDate.value}</h5>
              <br />
            </div>

            <!-- ! Additional Lists -->

          <!-- <h3 class="makeChanges">If You Want To make Any changes</h3>
          <hr />
          <div class="additional-lists">
            <div class="selectLists">
              <div class="naming">
                <h3>List</h3>
              </div>

              <label for="selectLists">Select Lists</label><br />
              <select name="selectLists" id="selectLists">
                <option value="Personal" class="personalOpt">Personal</option>
                <option value="Work" class="workOpt">Work</option>
                <option value="List" class="ListOpt">List</option>
                <option value="Add-List" class="AddListOpt">+ Add List</option>
              </select>
            </div>

            <div class="dueDate">
              <div class="naming">
                <h3>Due Date</h3>
              </div>
              <input type="date" name="dueDate" id="dueDate" /><br />
            </div>
          </div> -->

           <!-- ! Delete and Save Buttons -->

                <div class="makeChaneBtn">
            <button class="changesbtn">Make Changes</button><br />
        </div>
          `;
    }
  }
});
