var task = [
  {
    taskName: "drink water",
    id: 1,
  },
  {
    taskName: "sleep time ",
    id: 1,
  },
];

let id = 0;

const createList = (task) => {
  const taskList = document.getElementById("task_list");
  const li = document.createElement("li");
  li.classList.add("list")
  li.setAttribute("id", id);
  id += 1;
  const para = document.createElement("span");
  para.classList.add("input");
  para.innerText = task;
  const checkB = document.createElement("input");
  checkB.type = "checkbox";
  const ebutton = document.createElement("button");
  ebutton.type = "button";
  ebutton.classList.add("edit_task_button");
  const itag = document.createElement("i");
  itag.classList.add("fa");
  itag.classList.add("fa-pencil");
  itag.setAttribute("aria-hidden", true);
  ebutton.appendChild(itag);
  const dbutton = document.createElement("button");
  dbutton.type = "button";
  dbutton.classList.add("delete");
  const dtag = document.createElement("i");
  dtag.classList.add("fa");
  dtag.classList.add("fa-trash-o");
  dtag.setAttribute("aria-hidden", true);
  dbutton.appendChild(dtag);

  li.appendChild(checkB);
  li.appendChild(para);
  li.appendChild(ebutton);
  li.appendChild(dbutton);

  taskList.appendChild(li);
};

const deleteTask = (id) => {
  const taskList = document.getElementById("task_list");
  const li = document.getElementById(1);
  taskList.removeChild(li);
};


// add new task
const submitButton = document.querySelector(".one_list form");

submitButton.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(submitButton);
  const newEvent = Array.from(formData.entries()).reduce((accum, item) => {
    accum[item[0]] = item[1];
    return accum;
  }, {});
  const inputField = document.getElementById("input_task");
  inputField.value = "";
  createList(newEvent.task);
});

// delete task
const taskList = document.getElementById("task_list");
taskList.addEventListener("click", (e) => {
  if (
    e.target.nodeName === "BUTTON" &&
    (e.target.classList.contains("delete") ||
      e.target.classList.contains("fa-trash-o"))
  ) {
    const li =  e.target.closest(".list");
    taskList.removeChild(li);
  }
});


// update the task
const editTaskList = document.getElementById("task_list");
editTaskList.addEventListener("click", (e) => {
  if (
    e.target.nodeName === "BUTTON" &&
    (e.target.classList.contains("edit_task_button") ||
      e.target.classList.contains("fa fa-pencil"))
  ) {
    const editForm = document.getElementById("edit-form");
    editForm.classList.remove("hide");
    editForm.classList.add("show");
    const lis = e.target

    const li=lis.closest(".list");
  


  

    const submitButton = document.getElementById("edit_task");

    submitButton.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(submitButton);
      const newEvent = Array.from(formData.entries()).reduce((accum, item) => {
        accum[item[0]] = item[1];
        return accum;
      }, {});

      li.children[1].innerText = newEvent.task;
      editForm.classList.remove("show");
      editForm.classList.add("hide");
      
    });
  }
});
