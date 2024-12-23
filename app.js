var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (const tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (const tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("side-menu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => {
        console.log("service worker registered");
        Notification.requestPermission().then(res => {
          if (Notification.permission == "granted") {
            console.log("Granted permission");
            return;
          }
          console.log(res);
        });
      })
      .catch((err) => console.log("service worker not registered", err));
  });
  navigator.serviceWorker.ready.then((swReg)=>{
   
    var options = {
      body :'this is message title',
      icon : 'images/WhatsApp Image 2024-11-11 at 1.01.06 AM.jpeg',
    };
    swReg.showNotification('MY portfolio Website' , options)
  })
}
