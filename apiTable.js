const container = document.querySelector("tbody");
const btn = document.querySelector("#downloadbtn");
const search = document.querySelector(".search");
const searchBtn = document.querySelector(".search-btn");
const dataFilter = document.querySelector(".data-filter");
let dat = [];
let datfilter = [];
//pagination
function template(el) {
  el.forEach((element) => {
    let card = document.createElement("tr");
    container.appendChild(card);
    card.innerHTML = `
             <td>${element.publishedAt.slice(0, 10)}</td>
             <td class="title-news">${element.title}</td>
             <td><a href = "${element.url}" target = '_blank'>Read more</a></td>
             <td><a class="btn btn-primary bla2" data-toggle="popover" data-bs-trigger="focus" 
             data-img="${element.imageUrl}" href=${
      element.imageUrl
    } target="_blank">View Image</a></td>
             `;

    $('[data-toggle="popover"]').popover({
      html: true,
      trigger: "hover",
      placement: "left",
      content: function () {
        return (
          '<img class="bla" src="' +
          $(this).data("img") +
          '" style="width:200px;" />'
        );
      },
    });
  });
}

//fetch api and pagination option
async function fetchArticoloSito() {
  const response = await fetch(
    `https://api.spaceflightnewsapi.net/v3/articles?_limit=-1`
  );
  const element = await response.json();
  dat = element;

  //create select element with News Site of API
  let siteList = [];
  dat.forEach((element) => {
    if (!siteList.includes(element.newsSite)) {
      siteList.push(element.newsSite);
      const tag = document.createElement("option");
      document.querySelector(".dropdown-content").appendChild(tag);
      tag.innerHTML = element.newsSite;
      tag.setAttribute("value", element.newsSite);
    }
  });

  $("table").pagination({
    dataSource: dat,
    totalNumber: dat.length,
    pageSize: 30,
    callback: function (data, a) {
      // template method of yourself
      container.innerHTML = "";
      var html = template(data);
      $("tbody").html(html);
    },
  });
}

fetchArticoloSito();

//btn - filter by date
dataFilter.onclick = function a() {
  dat = dat.reverse();

  $("table").pagination({
    dataSource: dat,
    totalNumber: dat.length,
    pageSize: 30,
    callback: function (data, a) {
      // template method of yourself
      container.innerHTML = "";
      var html = template(data);
      $("tbody").html(html);
    },
  });
};

//filter news by News site in select element and pagination option
let testSelect = document.querySelector(".dropdown-content");
testSelect.addEventListener("change", () => {
  container.innerHTML = "";
  // let datfilter = [];
  datfilter = [];
  dat.forEach((el) => {
    if (el.newsSite == testSelect.value) {
      datfilter.push(el);
    } else if (testSelect.value == "qualsiasi") {
      datfilter.push(el);
    }
  });
  console.log(datfilter);

  //csv funcitonality

  function downloadbtn() {
    let csv = "Data;Titolo;Url;Immagine\n";

    for (let i = 0; i < datfilter.length; i += 4) {
      csv += `${datfilter[i].publishedAt.slice(0, 10)};${datfilter[i].title};${
        datfilter[i].imageUrl
      };${datfilter[i].url}\n`;
    }

    let hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";

    hiddenElement.download = "lista.csv";
    hiddenElement.click();
  }

  btn.addEventListener("click", downloadbtn);

  $("table").pagination({
    dataSource: datfilter,
    totalNumber: datfilter.length,
    pageSize: 30,
    callback: function (data, a) {
      // template method of yourself
      container.innerHTML = "";
      var html = template(data);
      $("tbody").html(html);
    },
  });
});

//funcitonality search-bar
searchBtn.onclick = function b() {
  //container.innerHTML = "";
  let datfilter2 = [];
  let query = search.value.trim();
  dat.forEach((el) => {
    if (el.title.toLowerCase().includes(query.toLowerCase())) {
      datfilter2.push(el);
    }
  });

  $("table").pagination({
    dataSource: datfilter2,
    totalNumber: datfilter2.length,
    pageSize: 30,
    callback: function (data, a) {
      container.innerHTML = "";
      var html = template(data);
      $("tbody").html(html);
    },
  });
};

//blog
async function createListTagBlog() {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v3/blogs?_limit=100"
  );
  const element = await response.json();
  let siteList = [];
  element.forEach((element) => {
    if (!siteList.includes(element.newsSite)) {
      siteList.push(element.newsSite);
      const tag = document.createElement("option");
      document.querySelector(".dropdown-content").appendChild(tag);
      tag.innerHTML = element.newsSite;
      tag.setAttribute("value", element.newsSite);
    }
  });
  console.log(siteList);
}

//reports
async function createListTagReports() {
  const response = await fetch(
    "https://api.spaceflightnewsapi.net/v3/reports?_limit=100"
  );
  const element = await response.json();
  let siteList = [];
  element.forEach((element) => {
    if (!siteList.includes(element.newsSite)) {
      siteList.push(element.newsSite);
      const tag = document.createElement("option");
      document.querySelector(".dropdown-content").appendChild(tag);
      tag.innerHTML = element.newsSite;
      tag.setAttribute("value", element.newsSite);
    }
  });
  console.log(siteList);
}
