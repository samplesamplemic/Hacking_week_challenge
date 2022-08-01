// // const search = document.querySelector(".search");
// // let dat3= [];

// // //fetch api and create pagination
// // async function fetchArticoloSito2() {
// //     await fetchArticoloSito();
  
// //   console.log(dat);
// //   const title = document.querySelectorAll(".title-news");
// // search.onkeyup = function() {
// //     let query = search.value;
// //     title.forEach(el => {
// //         if(el.toLowerCase().includes(query.toLowerCase())) {
// //             el.closest('td').style.display = '';
// //         } else{
// //             el.closest('td').style.display = 'none';
// //         }
// //     })
// // }

// //   }

// //   fetchArticoloSito2();


// const container = document.querySelector("tbody");
// const bottone = document.querySelector("#genera-news");
// const search = document.querySelector(".search");
// const searchBtn = document.querySelector(".search-btn");
// const dataFilter = document.querySelector(".data-filter");
// let dat = [];


// //pagination
// function template(el) {
//   el.forEach((element) => {
//     let card = document.createElement("tr");
//     container.appendChild(card);
//     card.innerHTML = `
//              <td>${element.publishedAt.slice(0, 10)}</td>
//              <td class="title-news">${element.title}</td>
//              <td><a href = "${
//                element.url
//              }" target = '_blank'>Read more</a></td>
//              <td><a class="btn btn-primary bla2" data-toggle="popover" data-bs-trigger="focus" 
//              data-img="${element.imageUrl}" href=${
//       element.imageUrl
//     } target="_blank">View Image</a></td>
//              `;

//     $('[data-toggle="popover"]').popover({
//       html: true,
//       trigger: "hover",
//       placement: "left",
//       content: function () {
//         return (
//           '<img class="bla" src="' +
//           $(this).data("img") +
//           '" style="width:200px;" />'
//         );
//       },
//     });
//   });
// }


// //fetch api and create pagination
// async function fetchArticoloSito() {
//   const response = await fetch(
//     `https://api.spaceflightnewsapi.net/v3/articles?_limit=-1`
//   );
//   const element = await response.json();
//   dat = element;

  
//   //filter by search on click highlight
//   // search.onclick = function () {
//   //   $("table").pagination({
//   //     dataSource: dat,
//   //     totalNumber: dat.length,
//   //     pageSize: 100,
//   //     callback: function (data, a) {
//   //     container.innerHTML = "";
//   //       var html = template(data);
//   //       $("tbody").html(html);
//   //     },
//   //   });
//   //   const title = document.querySelectorAll(".title-news");
//   //   let query = search.value.trim();
//   //   title.forEach((el) => {
//   //     if (el.textContent.toLowerCase().includes(query.toLowerCase())) {
//   //      let re = new RegExp(query, 'i');
//   //      let text = el.innerText;
//   //      let newtext = text.replace(re, `<mark>${query}</mark>`);
//   //      el.innerHTML = newtext;
//   //      el.closest("tr").style.display = "";
//   //     } else {
//   //       el.closest("tr").style.display = "none";
//   //     }
//   //   });
//   // }; 

//   //create select element with News Site of API
//   let siteList = [];
//   dat.forEach((element) => {
//     if (!siteList.includes(element.newsSite)) {
//       siteList.push(element.newsSite);
//       const tag = document.createElement("option");
//       document.querySelector(".dropdown-content").appendChild(tag);
//       tag.innerHTML = element.newsSite;
//       tag.setAttribute("value", element.newsSite);
//     }
//   });
  
//   //pagination
//   // function template(el) {
//   //   el.forEach((element) => {
//   //     // if(value == element.newsSite || value == 'qualsiasi') {
//   //     let card = document.createElement("tr");
//   //     container.appendChild(card);
//   //     card.innerHTML = `
//   //                <td>${element.publishedAt.slice(0, 10)}</td>
//   //                <td class='title-news'>${element.title}</td>
//   //                <td><a href = "${
//   //                  element.url
//   //                }" target = '_blank'>Read more</a></td>
//   //                <td><a class="btn btn-primary bla2" data-toggle="popover" data-bs-trigger="focus" 
//   //                data-img="${element.imageUrl}" href=${
//   //       element.imageUrl
//   //     } target="_blank">View Image</a></td>
//   //                `;
//   //     $('[data-toggle="popover"]').popover({
//   //       html: true,
//   //       trigger: "hover",
//   //       placement: "left",
//   //       content: function () {
//   //         return (
//   //           '<img class="bla" src="' +
//   //           $(this).data("img") +
//   //           '" style="width:200px;" />'
//   //         );
//   //       },
//   //     });
//   //   });
//   // }

//   $("table").pagination({
//     dataSource: dat,
//     totalNumber: dat.length,
//     pageSize: 30,
//     callback: function (data, a) {
//       // template method of yourself
//       container.innerHTML = "";
//       var html = template(data);
//       $("tbody").html(html);
//     },
//   });
// }

// fetchArticoloSito();

// dataFilter.onclick = function a(){
//    dat = dat.reverse();
  
//   //  function template(el) {
//   //   el.forEach((element) => {
//   //     let card = document.createElement("tr");
//   //     container.appendChild(card);
//   //     card.innerHTML = `
//   //              <td>${element.publishedAt.slice(0, 10)}</td>
//   //              <td class="title-news">${element.title}</td>
//   //              <td><a href = "${
//   //                element.url
//   //              }" target = '_blank'>Read more</a></td>
//   //              <td><a class="btn btn-primary bla2" data-toggle="popover" data-bs-trigger="focus" 
//   //              data-img="${element.imageUrl}" href=${
//   //       element.imageUrl
//   //     } target="_blank">View Image</a></td>
//   //              `;

//   //     $('[data-toggle="popover"]').popover({
//   //       html: true,
//   //       trigger: "hover",
//   //       placement: "left",
//   //       content: function () {
//   //         return (
//   //           '<img class="bla" src="' +
//   //           $(this).data("img") +
//   //           '" style="width:200px;" />'
//   //         );
//   //       },
//   //     });
//   //   });
//   // }

//   $("table").pagination({
//     dataSource: dat,
//     totalNumber: dat.length,
//     pageSize: 30,
//     callback: function (data, a) {
//       // template method of yourself
//       container.innerHTML = "";
//       var html = template(data);
//       $("tbody").html(html);
//     },
//   });
// }

// //create pagination and filter news by News site in select element
// let testSelect = document.querySelector(".dropdown-content");
// testSelect.addEventListener("change", () => {
//   container.innerHTML = "";
//   let datfilter = [];
//   dat.forEach((el) => {
//     if (el.newsSite == testSelect.value) {
//       datfilter.push(el);
//     }
//   });

//   // function template(el) {
//   //   el.forEach((element) => {
//   //     let card = document.createElement("tr");
//   //     container.appendChild(card);
//   //     card.innerHTML = `
//   //              <td>${element.publishedAt.slice(0, 10)}</td>
//   //              <td class="title-news">${element.title}</td>
//   //              <td><a href = "${
//   //                element.url
//   //              }" target = '_blank'>Read more</a></td>
//   //              <td><a class="btn btn-primary bla2" data-toggle="popover" data-bs-trigger="focus" 
//   //              data-img="${element.imageUrl}" href=${
//   //       element.imageUrl
//   //     } target="_blank">View Image</a></td>
//   //              `;

//   //     $('[data-toggle="popover"]').popover({
//   //       html: true,
//   //       trigger: "hover",
//   //       placement: "left",
//   //       content: function () {
//   //         return (
//   //           '<img class="bla" src="' +
//   //           $(this).data("img") +
//   //           '" style="width:200px;" />'
//   //         );
//   //       },
//   //     });
//   //   });
//   // }

//   $("table").pagination({
//     dataSource: datfilter,
//     totalNumber: datfilter.length,
//     pageSize: 30,
//     callback: function (data, a) {
//       // template method of yourself
//       container.innerHTML = "";
//       var html = template(data);
//       $("tbody").html(html);
//     },
//   });
// });

// // search.onclick = function () {
// //   $("table").pagination({
// //     dataSource: dat,
// //     totalNumber: dat.length,
// //     pageSize: 100,
// //     callback: function (data, a) {
// //     container.innerHTML = "";
// //       var html = template(data);
// //       $("tbody").html(html);
// //     },
// //   });
// //   const title = document.querySelectorAll(".title-news");
// //   let query = search.value.trim();
// //   title.forEach((el) => {
// //     if (el.textContent.toLowerCase().includes(query.toLowerCase())) {
// //      let re = new RegExp(query, 'i');
// //      let text = el.innerText;
// //      let newtext = text.replace(re, `<mark>${query}</mark>`);
// //      el.innerHTML = newtext;
// //      el.closest("tr").style.display = "";
// //     } else {
// //       el.closest("tr").style.display = "none";
// //     }
// //   });
// // }; 



// searchBtn.onclick = function b() {
//   //container.innerHTML = "";
//   let datfilter2 = [];
//   let query = search.value.trim();
//   dat.forEach((el) => {
//     if (el.title.toLowerCase().includes(query.toLowerCase())) {
//       datfilter2.push(el);
//     }
//   });
//   // function template(el) {
//   //   el.forEach((element) => {
//   //     let card = document.createElement("tr");
//   //     container.appendChild(card);
//   //     card.innerHTML = `
//   //              <td>${element.publishedAt.slice(0, 10)}</td>
//   //              <td class="title-news">${element.title}</td>
//   //              <td><a href = "${
//   //                element.url
//   //              }" target = '_blank'>Read more</a></td>
//   //              <td><a class="btn btn-primary bla2" data-toggle="popover" data-bs-trigger="focus" 
//   //              data-img="${element.imageUrl}" href=${
//   //       element.imageUrl
//   //     } target="_blank">View Image</a></td>
//   //              `;

//   //     $('[data-toggle="popover"]').popover({
//   //       html: true,
//   //       trigger: "hover",
//   //       placement: "left",
//   //       content: function () {
//   //         return (
//   //           '<img class="bla" src="' +
//   //           $(this).data("img") +
//   //           '" style="width:200px;" />'
//   //         );
//   //       },
//   //     });
//   //   });
//   // }

//   $("table").pagination({
//     dataSource: datfilter2,
//     totalNumber: datfilter2.length,
//     pageSize: 30,
//     callback: function (data, a) {
//       // template method of yourself
//       container.innerHTML = "";
//       var html = template(data);
//       $("tbody").html(html);
//     },
//   });
// };


// //blog
// async function createListTagBlog() {
//   const response = await fetch(
//     "https://api.spaceflightnewsapi.net/v3/blogs?_limit=100"
//   );
//   const element = await response.json();
//   let siteList = [];
//   element.forEach((element) => {
//     if (!siteList.includes(element.newsSite)) {
//       siteList.push(element.newsSite);
//       const tag = document.createElement("option");
//       document.querySelector(".dropdown-content").appendChild(tag);
//       tag.innerHTML = element.newsSite;
//       tag.setAttribute("value", element.newsSite);
//     }
//   });
//   console.log(siteList);
// }

// //reports
// async function createListTagReports() {
//   const response = await fetch(
//     "https://api.spaceflightnewsapi.net/v3/reports?_limit=100"
//   );
//   const element = await response.json();
//   let siteList = [];
//   element.forEach((element) => {
//     if (!siteList.includes(element.newsSite)) {
//       siteList.push(element.newsSite);
//       const tag = document.createElement("option");
//       document.querySelector(".dropdown-content").appendChild(tag);
//       tag.innerHTML = element.newsSite;
//       tag.setAttribute("value", element.newsSite);
//     }
//   });
//   console.log(siteList);
// }
