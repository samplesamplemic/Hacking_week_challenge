const load = document.querySelector('#spinner');
//const load2 = document.querySelector('#container-load');
let datafilter = [];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dicember'];
       
async function chart() {
    try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=-1');
        const data = await response.json();
        console.log(data);
        datafilter = data
    } catch (err) {
        console.log(err);
    } finally {
        load.style.display = 'none';
        //load2.style.display = 'none';

        let arrMonth = []
        let nameSite = [];
        for (let i of datafilter) {
            arrMonth.push(Number(i.publishedAt.slice(5, 7)));
            nameSite.push(i.newsSite);
        }
        console.log(arrMonth);
        let objMonth = arrMonth.reduce(function (a, b) {
            if (b in a) {
                a[b]++
            } else {
                a[b] = 1
            }
            return a;
        }, {});
        console.log(objMonth);
        

        let objSite = nameSite.reduce(function (a, b) {
            if (b in a) {
                a[b]++
            } else {
                a[b] = 1
            }
            return a
        }, {});
        console.log(objSite);
        let y = Object.values(objMonth);
        let x = Object.keys(objMonth);
        console.log(y);
        
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Dicember'];
        const ctx = document.getElementById('canvas').getContext("2d")
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: month,
                datasets: [{
                    label: 'Articles per month',
                    backgroundColor: '#2e896c',
                    data: y,
                }]
            },
            options: {
                indexAxis: 'y',
                y: {
                    beginAtZero: true
                },
                ooltips: {
                    callbacks: {
                      label: month
                    }
                  },
                
            }
        })

        let siteList = [];
        datafilter.forEach((element) => {
            if (!siteList.includes(element.newsSite)) {
                siteList.push(element.newsSite);
                const tag = document.createElement("option");
                document.querySelector(".dropdown-content").appendChild(tag);
                tag.innerHTML = element.newsSite;
                tag.setAttribute("value", element.newsSite);
            }
        });

        let testSelect = document.querySelector(".dropdown-content");
        testSelect.addEventListener("change", select);
        function select() {
            let datfilter2 = [];
            datafilter.forEach((el) => {
                if (el.newsSite == testSelect.value) {
                    datfilter2.push(el);
                } else if (testSelect.value == "qualsiasi") {
                    datfilter2.push(el);
                }
            });
            console.log(datfilter2);


            let arrMonth = []
            let nameSite = [];
             for (let i of datfilter2) {
                arrMonth.push(Number(i.publishedAt.slice(5, 7)));
                nameSite.push(i.newsSite);
            }
            let objMonth = arrMonth.reduce(function (a, b) {
                if (b in a) {
                    a[b]++
                } else {
                    a[b] = 1
                }
                return a;
            }, {});
            console.log(objMonth);

            let objSite = nameSite.reduce(function (a, b) {
                if (b in a) {
                    a[b]++
                } else {
                    a[b] = 1
                }
                return a
            }, {});
            console.log(objSite);
            let y = Object.values(objMonth);
            let x = Object.keys(objMonth);
            console.log(y);
            

            myChart.data.labels = month;
            myChart.data.datasets[0].data = y;
            myChart.update();
        };
    }
}

chart();