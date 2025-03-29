"use strict";
// & Today's task area
const btnNewTaskEvent = document.querySelector(".btnNewTask");

// & Modal Window
const blurryBackground = document.querySelector(".flex2");
const modalMain = document.querySelector(".modal-main");
const mdCloseBtn = document.querySelector(".md_closeBtn");
const mdtaskName = document.querySelector("#md_task-name");
const description = document.querySelector("#Description");
const todaysDate = document.querySelector("#today_Date");
const mdTaskLists = document.querySelector(".md_taskLists");
const mdSelectLists = document.querySelector(".md_selectLists");
const mdDueDate = document.querySelector(".md_dueDate");
const mdDeleteSave = document.querySelector(".md_delete-save");

console.log(description);

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
const selectedTask = document.querySelector(".selected-task");
const currentTasksList = document.querySelector(".current-tasks-list");
