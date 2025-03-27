"use strict";

// ! raw data

const allTasks = [
  {
    id: 1,
    title: "Task 1",
    status: "Incomplete",
    list: "Personal",
    deadline: "2022-01-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 1st task",
  },

  {
    id: 2,
    title: "Task 2",
    status: "Completed",
    list: "Work",
    deadline: "2022-02-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 2nd task",
  },

  {
    id: 3,
    title: "Task 3",
    status: "Completed",
    list: "Time for friends",
    deadline: "2022-03-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 3rd task",
  },

  {
    id: 4,
    title: "Task 4",
    status: "Incomplete",
    list: "Work",
    deadline: "2022-04-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 4th task",
  },

  {
    id: 5,
    title: "Task 5",
    status: "Incomplete",
    list: "Work",
    deadline: "2022-05-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 5th task",
  },

  {
    id: 6,
    title: "Task 6",
    status: "Completed",
    list: "Personal",
    deadline: "2022-06-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 6th task",
  },

  {
    id: 7,
    title: "Task 7",
    status: "Completed",
    list: "Health",
    deadline: "2022-07-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 7th task",
  },

  {
    id: 8,
    title: "Task 8",
    status: "Completed",
    list: "Health",
    deadline: "2022-08-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 8th task",
  },

  {
    id: 9,
    title: "Task 9",
    status: "Upcoming",
    list: "List",
    deadline: "2022-09-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 9th task",
  },

  {
    id: 10,
    title: "Task 10",
    status: "Upcoming",
    list: "Hobby",
    deadline: "2022-10-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 10th task",
  },

  {
    id: 11,
    title: "Task 11",
    status: "Upcoming",
    list: "Health",
    deadline: "2022-11-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 11th task",
  },

  {
    id: 12,
    title: "Task 12",
    status: "Upcoming",
    list: "Personal",
    deadline: "2022-12-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 12th task",
  },

  {
    id: 13,
    title: "Task 13",
    status: "Today",
    list: "Hobby",
    deadline: "2023-01-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 13th task",
  },

  {
    id: 14,
    title: "Task 14",
    status: "Today",
    list: "Hobby",
    deadline: "2023-02-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 14th task",
  },

  {
    id: 15,
    title: "Task 15",
    status: "Today",
    list: "Time for friends",
    deadline: "2023-03-15",
    priority: "high",
    assignee: "User 1",
    description: "This is 15th task",
  },
];
// console.log(Object.keys(allTasks));

// ! Handlers

const addNewTaskBtn = document.querySelector(".btnNewTask");
const modalWindow = document.querySelector(".modal-main");
const md_closeBtnX = document.querySelector(".md_closeBtn");
const blurBag = document.querySelector(".felx2");
const allTaskList = document.querySelector(".current-tasks-list");

const incompleteTask = document.querySelector(".st_IncompleteTasks");
const completedTask = document.querySelector(".st_Completed_Tasks");
const upcoming_Task = document.querySelector(".st_Upcoming");
const todays_Task = document.querySelector(".st_Toady");

const selectedTaskLists = document.querySelector(".selected-task");
const personalList = document.querySelector(".personalLeftLst");
const workList = document.querySelector(".workLeftLst");
const healthList = document.querySelector(".healthLeftLst");
const hobbyList = document.querySelector(".hobbyLeftLst");
const time4FriendsList = document.querySelector(".time4FriendsLeftLst");
const indetailTaskEl = document.querySelector(".indetailTask");
// const makeChangesBtn = document.querySelector(".makeChaneBtn");
// const overviewTasksEl = document.body.querySelector(".overviewTasks");
// console.log(overviewTasksEl);

//? Modal Page Selecters

const md_title = document.querySelector("#md_task-name");
const md_Description = document.querySelector("#Description");
let md_todayDate = document.querySelector("#today_Date");
const md_status = document.querySelector("#md_selectTasks");
console.log(md_status.value);
const md_List = document.querySelector("#md_selectLists");
const md_deadline = document.querySelector("#dueDate");
const md_createTask = document.querySelector(".md_delete-save");
console.log(md_createTask);

// !!! Code

document.body.addEventListener("click", function (e) {
  const overviewBtn = e.target.closest(".overviewTasks");
  console.log(overviewBtn);
  if (!overviewBtn) {
    return;
  }
  const text = overviewBtn.childNodes[1].children[1].innerText;

  if (e.target.classList.contains("overviewClass")) {
    // console.log("Overview clicked", e.target);
    indetailTaskEl.style.display = "block";
    const overview_t = allTasks.filter(
      (overviewTask) => overviewTask.title === text
    );

    overview_t.forEach((overviewTsk) => {
      indetailTaskEl.innerHTML = `<div class="aboutTask">
            <h3>About your ${overviewTsk.title}</h3>
          </div>
          <div class="task-name">
            <h2>Your Aim</h2>
            <br />
            <h5 class="idtTitle">${overviewTsk.title}</h5>

            <h2>Focus on Why and What</h2>
            <br />
            <p class="idtDescription">
    ${overviewTsk.description}
            </p>

            <h2>The Deadline of your Struggle ends in</h2>
            <br />
            <h5>${overviewTsk.deadline}</h5>
            <br />
          </div>
          <!-- ! Additional Lists -->

          <h3 class="makeChanges">If You Want To make Any changes</h3>
          <hr />
          <div class="additional-lists">
            <div class="selectLists">
              <div class="naming">
                <h3>List</h3>
              </div>

              <label for="selectLists">Select Lists</label><br />
              <select name="selectLists" id="selectLists">
                <option value="Personal" class="SelectList">
                    Select List
                  </option>
                  <option value="Personal" class="personalOpt">Personal</option>
                  <option value="Work" class="md_workOpt">Work</option>
                  <option value="Health" class="md_healthOpt">Health</option>
                  <option value="Hobby" class="md_hobbyOpt">
                    Hobby
                  </option>
                  <option value="SmallTasks" class="md_smallTasksOpt">
                    Small Tasks
                  </option>
              </select>
            </div>

            <div class="dueDate">
              <div class="naming">
                <h3>Due Date</h3>
              </div>
              <input type="date" name="dueDate" id="dueDate" /><br />
            </div>
          </div>

          <!-- ! Delete and Save Buttons -->

          <div class="makeChaneBtn"><button>Make Changes</button><br /></div>`;
    });
  } else if (e.target.classList.contains("deleteTask")) {
    // !!! Delete Button
    const deleteBtn = e.target.closest(".overviewTasks");
    if (!deleteBtn) {
      return;
    }

    // ? Just showcasing the approach of parent and sibling elements
    // const rmSpecificTask = e.target.parentElement.previousElementSibling.firstElementChild.name;

    const rmSpecificTask = e.target
      .closest(".overviewTasks")
      .querySelector("input").name;
    const taskIndex = allTasks.findIndex((t) => t.title === rmSpecificTask);

    if (taskIndex !== -1) {
      const deletedTask = allTasks.splice(taskIndex, 1);
      console.log(deletedTask);
      console.log(allTasks);
      // Reduce the count for the deleted task's status
      if (deletedTask.status in statusCounts) {
        statusCounts[deletedTask.status]--;
      } else {
        statusCounts.Today--; // Handle the case where status is "Today" or unknown
      }

      // Optionally hide the task from the UI
      deleteBtn.closest(".overviewTasks").style.display = "none";

      // console.log(statusCounts);
    }
  }
  updateStatusCounts();
});

// ! Events

allTasks.forEach((task) => {
  allTaskList.innerHTML += `<ul>
                            <div class="overviewTasks">
                            <li><input type="checkbox" name="${task.title}" id="${task.title}">
                                <label for="1st-Task">${task.title}
                                </label>
                                <br>
                            </li>
                            <div class="overviewNaming">
                                <h5 id="overviewId" class="overviewClass">Overview</h5>
                                <h5 id="deleteTask" class="deleteTask">Delete task</h5>
                            </div>
                            </div>
                            </ul>
                            `;
});

// ! Manipulating Left Tasks Column

const rev_status = allTasks.map((statuss) => {
  return statuss.status;
});

// console.log(incompleteTask.firstElementChild.textContent = 2)
// console.log(rev_status);

// let completedCount = 0;
// let incompleteCount = 0;
// let upcomingCount = 0;
// let todayCount = 0;

// rev_status.forEach((stat) => {
//   if (stat === "Completed") {
//     completedCount++;
//   } else if (stat === "Incomplete") {
//     incompleteCount++;
//   } else if (stat === "Upcoming") {
//     upcomingCount++;
//   } else {
//     todayCount++;
//   }
// });

// console.log('Completed:', completedCount);
// console.log('Incomplete:', incompleteCount);
// console.log('Upcoming:', upcomingCount);
// console.log('Today:', todayCount);

// ! Function

const modalWindowOC = function (value, grayscale) {
  md_todayDate.value = new Date().toISOString().split("T")[0];
  modalWindow.style.display = `${value}`;
  blurBag.style.filter = `${grayscale}`;
};
// modalWindowOC()

const addId = function (priority) {
  md_createTask.addEventListener("click", () => {
    console.log("clicked");
    const newId =
      allTasks.length > 0
        ? Math.max(...allTasks.map((task) => task.id)) + 1
        : 1;
    const newTask = {
      id: newId,
      title: md_title.value,
      status: md_status.value,
      list: md_List.value,
      deadline: md_deadline.value,
      priority,
      assignee: "user 1",
      description: md_Description.value,
    };
    allTasks.push(newTask);
    console.log(allTasks);
    modalWindow.style.display = "none";
    blurBag.style.filter = "none";
    updateStatusCounts();
  });
};
addId();

const updateStatusCounts = () => {
  const statusCounts = allTasks.reduce(
    (counts, task) => {
      if (counts[task.status] !== undefined) {
        counts[task.status]++;
      } else {
        counts.Today++; // Default to "Today" for any unknown status
      }
      return counts;
    },
    { Completed: 0, Incomplete: 0, Upcoming: 0, Today: 0 }
  );

  // Update the DOM with the correct counts
  document.querySelector(".st_totalUC").textContent = statusCounts.Upcoming;
  document.querySelector(".st_totalTdy").textContent = statusCounts.Today;
  document.querySelector(".st_totalCT").textContent = statusCounts.Completed;
  document.querySelector(".st_totalIT").textContent = statusCounts.Incomplete;
};

const statusCounts = rev_status.reduce(
  (counts, stat) => {
    // console.log(stat)
    if (counts[stat] !== undefined) {
      counts[stat]++;
    } else {
      counts.Today++; // Default to "Today" for any unknown status
    }
    return counts;
  },
  { Completed: 0, Incomplete: 0, Upcoming: 0, Today: 0 }
);
// console.log(statusCounts);
document.querySelector(".st_totalUC").textContent = statusCounts.Upcoming;
document.querySelector(".st_totalTdy").textContent = statusCounts.Today;
document.querySelector(".st_totalCT").textContent = statusCounts.Completed;
document.querySelector(".st_totalIT").textContent = statusCounts.Incomplete;

const upcomingFn = function (status) {
  allTaskList.innerHTML = "";
  const upcomingTasks = allTasks.filter((stat) => stat.status === status);
  const taskListHTML = upcomingTasks.map((task) => task.title);

  taskListHTML.forEach((task) => {
    allTaskList.innerHTML += `<ul>
                            <div class="overviewTasks">
                            <li><input type="checkbox" name="${task}" id="${task}">
                                <label for="1st-Task">${task}
                                </label>
                                <br>
                            </li>
                            <div class="overviewNaming">
                                <h5 id="overviewId" class="overviewClass">Overview</h5>
                                <h5 id="deleteTask" class="deleteTask">Delete task</h5>
                            </div>
                            </div>
                            </ul>
                            `;
  });
};

const listOverview = function (listName) {
  selectedTaskLists.innerHTML = "";
  const lists_lc = allTasks.filter((list) => list.list === listName);
  const showLists = lists_lc.map((showList) => {
    return showList.title;
  });
  // console.log(showLists)
  showLists.forEach((lst) => {
    selectedTaskLists.innerHTML += `
              <div class="current-tasks-list" style="height: auto">
                <ul>
                  <div class="overviewTasks">
                    <li>
                      <input type="checkbox" name="${lst}" id="generalTaskId" />
                      <label for="${lst}">${lst} </label>
                      <br />
                    </li>
                    <div class="overviewNaming">
                                <h5 id="overviewId" class="overviewClass">Overview</h5>
                                <h5 id="deleteTask" class="deleteTask">Delete task</h5>
                            </div>
                  </div>
                </ul>
              </div>`;
  });
};

// ! Use Of Functions
upcoming_Task.addEventListener("click", function () {
  upcomingFn("Upcoming");
});
todays_Task.addEventListener("click", function () {
  upcomingFn("Today");
});
completedTask.addEventListener("click", function () {
  upcomingFn("Completed");
});
incompleteTask.addEventListener("click", function () {
  upcomingFn("Incomplete");
});

personalList.addEventListener("click", function () {
  listOverview("Personal");
});

workList.addEventListener("click", function () {
  listOverview("Work");
});

healthList.addEventListener("click", function () {
  listOverview("Health");
});

hobbyList.addEventListener("click", function () {
  listOverview("Hobby");
});

time4FriendsList.addEventListener("click", function () {
  listOverview("Time for friends");
});

const addid = document.querySelector(".sub-tags");
addid.addEventListener("click", function () {
  const newId =
    allTasks.length > 0 ? Math.max(...allTasks.map((task) => task.id)) + 1 : 1;
  const newTask = {
    id: newId,
    name: `Task ${newId}`,
  };
  allTasks.push(newTask);
  console.log(allTasks);
});

// Modal Window
addNewTaskBtn.addEventListener("click", () => {
  modalWindowOC("block", "grayscale(100%)" + "blur(1.3px)");
});

md_closeBtnX.addEventListener("click", () => {
  modalWindowOC("none", "none");
});

const makeChangesBtn = document.querySelector(".makeChaneBtn");
console.log(makeChangesBtn);

document.body.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  const makeChangesBtn = target.closest(".makeChaneBtn");
  makeChangesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("hi");
  });
});

document.body.addEventListener("click", (e) => {
  console.log(e);
});
