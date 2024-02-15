let start = async () => {
  try {
    let res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    let data = await res.json();
    console.log(data);
    append_data(data);
  } catch (error) {
    console.log(error);
  }
};
start();
let append_data = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = "Title" + " : " + el.title;
    let body = document.createElement("p");
    body.innerText = "Body" + " : " + el.body;

    let add_bulk = document.createElement("button");
    add_bulk.innerText = "Add bulk";
    let download = document.createElement("button");
    download.innerText = "Download in Excel";
    open.onclick = () => {
      window.location.replace("postpage.html");
    };
    div.append(title, body, add_bulk, download);
    container.append(div);
  });
};
