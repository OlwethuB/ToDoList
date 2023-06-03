function fix() {
  let sortOptions = document.querySelector("task");
  sortOptions.innerHtml
    sortOptions.find("span").sort(function (span1, span2) {
      return document.getElementsByElement(span1).text() < document.getElementByElement(span2).text() ? -1 : 1;
    })
  ;
}

document.querySelector("#addTask").onclick = function () {
  let line = document.querySelector("#tasks");
  if (document.querySelector("#input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
              <div class="task">
                  <button class="done" onclick='strike()'>
                  </button>
                  <span id="name">
                      ${document.querySelector("#input").value}
                  </span>
                  <button class="remove">
                      <img class="redx" src="https://i.postimg.cc/K860PG8c/gie5-B478-T-removebg-preview.png"/>
                  </button>
              </div>
          `;

    let putted = document.querySelectorAll(".remove");
    for (let i = 0; i < putted.length; i++) {
      putted[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    line.addEventListener(("click"), function (){
      line.style.textDecoration = "line-through";
    })
  }
};


// function strike() {
//  let ele = document.getElementsByClassName("name");
//  ele.style.textDecoration = "line-through";

// }

// let list = document.getElementsByClassName("task");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "span") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );