function post() {
  let form = document.getElementsByClassName("todoForm");

  form[0].addEventListener("submit", event => {
    event.preventDefault();
    let text = document.getElementsByClassName("newTodo");

    if (text[0].value === "") {
      alert("Add a todo item");
      return false;
    }
    var panel = document.getElementsByClassName("listOfTodos");

    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "todo");

    let newContent = document.createElement("span");
    let node = document.createTextNode(text[0].value);
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.checked = false;

    newContent.appendChild(node);
    newDiv.append(check);
    newDiv.append(newContent);
    panel[0].appendChild(newDiv);

    console.log("Submitting...");
  });
}

$(".markAllButton").on("click", function(e) {
  e.preventDefault();
  let child = $(".listOfTodos").children();
  for (var i = 0; i < child.length; ++i) {
    child[i].children[0].checked = true;
  }
});
$(".clearButton").on("click", function(e) {
  e.preventDefault();
  let child = $(".listOfTodos").children();
  for (var i = 0; i < child.length; ++i) {
    child[i].children[0].checked = false;
  }
});
$(".deleteButton").on("click", function(e) {
  e.preventDefault();
  const listNode = document.getElementById("listOfTodos");
  while (listNode.firstChild) {
    listNode.removeChild(listNode.firstChild);
  }
});

function init() {
  post();
}

init();
