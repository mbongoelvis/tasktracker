const welcome = document.querySelector(".welcome");
const adding = document.querySelector(".add");
const taskname = document.querySelector(".task-name");
const dayandtime = document.querySelector(".day-time");
const checkbox = document.querySelector(".checkbox");
const newtask = document.querySelector(".newtask");
const deletetask = document.querySelectorAll(".deletetask");



// function to initiate task
const addTask = () => {
  if (
    welcome.classList.contains("hidden") &&
    !adding.classList.contains("hidden")
  ) {
    welcome.classList.remove("hidden");
    adding.classList.add("hidden");
  } else {
    welcome.classList.add("hidden");
    adding.classList.remove("hidden");
  }
};

// call back
const savetask = () => { 
  if (taskname.value === "") {
    alert("A field can not be empty");
  } else {
    // creating the elements
    const addedtaskDiv = document.createElement("div");
    const firstchild = document.createElement("div");
    const closingicon = document.createElement("span");
    const firstchildren = document.createElement("p");
    const secondchildren = document.createElement("p");

    // adding texts to the elements
    firstchildren.textContent = taskname.value;
    secondchildren.textContent = dayandtime.value

    // appending the newly created elements
    addedtaskDiv.appendChild(firstchild);
    addedtaskDiv.appendChild(closingicon);
    firstchild.appendChild(firstchildren);
    firstchild.appendChild(secondchildren);
    newtask.appendChild(addedtaskDiv);


    // checkbox section
    if (checkbox.checked) {
      addedtaskDiv.classList.add("border-l-4");
    }

    // adding the styles to each of the created elements
    addedtaskDiv.classList.add(
      "flex",
      "justify-between",
      "mt-2",
      "items-center",
      "bg-gray-100",
      "px-4",
      "py-2",
      "rounded",
      "border-green-500",
      "cursor-pointer",
      "doubleclicking"
    );
    firstchildren.classList.add("font-medium");
    closingicon.classList.add(
      "material-symbols-outlined", "text-red-500", "font-bold", "cursor-pointer");
    closingicon.innerHTML = "close"
    localStorage.setItem("task", addedtaskDiv.innerHTML);
  }
  taskname.value = "";
  dayandtime.value = "";
}
