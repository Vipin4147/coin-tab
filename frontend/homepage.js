let user = document.getElementById("users");

user.onclick = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
    append_data(data);
  } catch (error) {
    console.log(error);
  }
};

let append_data = (data) => {
  let container = document.getElementById("container");
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = "Name" + " : " + el.name;
    let email = document.createElement("p");
    email.innerText = "Email" + " : " + el.email;
    let phone = document.createElement("p");
    phone.innerText = "Phone" + " : " + el.phone;
    let website = document.createElement("p");
    website.innerText = "Website" + " : " + el.website;
    let city = document.createElement("p");
    city.innerText = "City" + " : " + el.address.city;
    let company = document.createElement("p");
    company.innerText = "Company" + " : " + el.company.name;

    let open = document.createElement("button");
    open.innerText = "Open";
    let add = document.createElement("button");
    add.innerText = "Add";
    open.onclick = () => {
      window.location.replace("postpage.html");
    };
    div.append(name, email, phone, website, city, company, open, add);
    container.append(div);
  });
};
