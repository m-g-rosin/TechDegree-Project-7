const alertBanner = document.getElementById("alert");
const bell = document.querySelector(".bell");
const a = document.getElementById("popup_a");
const b = document.getElementById("popup_b");
const navLinks = document.getElementsByClassName("traffic-nav-link");
const searchField = document.querySelector(".form-field");
const names = ["Victoria Chambers", "Michael Michaels", "Sarah Victors", "John Johns"];
const autoDisplay = document.querySelector(".widget-container");
const switchA = document.getElementById("switch-a");
const switchB = document.getElementById("switch-b");
const timezone = document.getElementById("timezone");
alertBanner.innerHTML = 
`
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>
`

//click to close banner
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";        
    }
});

//bell alert to display popups
bell.addEventListener('click', e => {
    if(a.style.display = "none") {
        a.style.display = "";
    }
    if(b.style.display = "none") {
        b.style.display = "";
    }
});

const trafficCanvas = document.getElementById("traffic-chart");

//traffic data
let trafficWeekly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointBorderWidth: 3,
        pointBorderColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'white',
        pointRadius: 10
    }]
    
};

let trafficHourly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [7, 12, 10, 20, 5, 15, 12, 18, 2, 10, 50],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointBorderWidth: 3,
        pointBorderColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'white',
        pointRadius: 10
    }]
};

let trafficDaily = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [75, 125, 100, 200, 50, 150, 120, 180, 20, 100, 50],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointBorderWidth: 3,
        pointBorderColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'white',
        pointRadius: 10
    }]
    
};

let trafficMonthly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [7510, 11250, 10000, 12000, 15000, 17500, 12500, 18500, 22050, 15000, 25000],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
        lineTension: 0,
        pointBorderWidth: 3,
        pointBorderColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'white',
        pointRadius: 10
    }]
    
};


let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficWeekly,
    options: trafficOptions
});


const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S","M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend : {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions

});

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ],
        
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        
        labels: {
            align: 'center',
            boxWidth: 20,
            fontStyle: 'bold',
            fontSize: 20,
            padding: 10
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

//popups to make sure forms are completed
send.addEventListener('click', () => {
    //ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if(user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message sucessfully sent to: ${user.value}`);
    }
});

//fuction to change trafficdata displays
for(let link of navLinks){
    link.addEventListener('click', e => {
        if(e.target.innerHTML == "Daily") {
             new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDaily,
                options: trafficOptions
            });
         }  else if (e.target.innerHTML == "Weekly") {
                new Chart(trafficCanvas, {
                type: 'line',
                data: trafficWeekly,
                options: trafficOptions
            });
         } else if (e.target.innerHTML == "Weekly") {
                new Chart(trafficCanvas, {
                type: 'line',
                data: trafficWeekly,
                options: trafficOptions
            });
         }   else if (e.target.innerHTML == "Hourly") {
                new Chart(trafficCanvas, {
                type: 'line',
                data: trafficHourly,
                options: trafficOptions
            });
         } else if (e.target.innerHTML == "Monthly") {
                new Chart(trafficCanvas, {
                type: 'line',
                data: trafficMonthly,
                options: trafficOptions
            });
         }
    });
}

//autocomplete feature
searchField.addEventListener("input", e => {
    let input = e.target.value.toUpperCase();
    let i = 0;
 
    
    let a = document.createElement("DIV");
    a.setAttribute("class", "autocomplete-items");
    closeLists();
    for(let ele of names) {
        
        
        if(input == ele.substr(0, input.length).toUpperCase()) {
        
           console.log(ele.substr(0, input.length))
            let b = document.createElement("DIV");
            
            b.innerHTML = "<strong>" + ele.substr(0, input.length) + "</strong>";
            b.innerHTML += ele.substr(input.length);
            b.innerHTML += "<input type='hidden' value='" + ele + "'>";
            
            autoDisplay.appendChild(a);
            a.appendChild(b);
            closeLists(input, input);
            i++;
            b.addEventListener("click", function(e) {
            
                document.querySelector(".form-field").value = ele;
                console.log( ele)
                closeLists();
            } );
            
        }
    }
     

        
    
});

document.addEventListener("click", function (e) {
    closeLists(e.target);
});
//strongly borrowed from https://www.w3schools.com/howto/howto_js_autocomplete.asp
function closeLists(c, input) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (c != x[i] && c != input) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
 }

 //save settings to localstorage
 function save() {	
    localStorage.setItem("switch-a", switchA.checked);
    localStorage.setItem("switch-b", switchB.checked);
    localStorage.setItem("timezone", timezone.value);
}
 


  let checked = JSON.parse(localStorage.getItem("switch-a"));
  let checkedb = JSON.parse(localStorage.getItem("switch-b"));
  let timeSave = localStorage.getItem("timezone");
     document.getElementById("switch-a").checked = checked;
     document.getElementById("switch-b").checked = checkedb;
     document.getElementById("timezone").value = timeSave;
