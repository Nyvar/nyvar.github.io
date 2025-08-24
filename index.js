const weather = {
    name: "Weather website",
    video: ["video/weather.mp4"],
    detail: `<p>user be able to search the city. if the city is not found it will show the 404 error on site, if it found
                it will show 2Taps</p><br>
            <ul>
                <li>The first Tap showing today current weather and forecast 7pm-12am in today</li>
                <li>The second Tap showing 5 days forecast and if user click on each day it will list down all the
                    forecast of each hour</li>
            </ul>`,
    code: "https://github.com/Nyvar/weather"
};
const bookclub = {
    name: "BookClub website",
    video: ["video/bookclub.mp4"],
    detail: `<p>This Website are provide for all the reader to connect with each other all over the world</p><br>
            <ul>
                <li>Home Page is a friendly welcoming and some Top nominated club, club runner, genra</li>
                <li>Find Book tab is all the eBook that are aviable</li>
                <li>Community tab is the bookclub site</li>
                <li>Blog tab is the tab that are allow user to read blog and upload Blog as text or video</li>
                <li>Sign in is to sign in and sign up</li>
            </ul>`,
    code: "https://github.com/Nyvar/bookclub"
};
const pos = {
    name: "Cafe POV systeme",
    video: ["video/casher.mp4","video/admin.mp4"],
    detail: `<div >
            <ul>
                <h2>Cashier side</h2>
                (user: harry, password:7)
                <li>show all the dialog in the menu</li>
                <li>when click it will show in the Order</li>
                <p>cashier be able to edit the order of the customer (size, sugar, delete..)</p>
                <li>click checkout will be lead to the calculator page which will automaticlly calculate the change</li>
                <li>Then when everything is ready, the reciept page will pop us and cashier need to click print</li>
                <li>After print the reciept, the order data will be saved in json file and show in the Admin side</li>
            </ul>
            <ul>
                <h2>Admin side</h2>
                (user:me , password:0)
                <li>using passcode 911 will lead you to the admin management dashboard</li>
                <li>using passcode 000 will lead you to the add more empployee's page </li>
            </ul>
        </div>`,
    code: "https://github.com/Nyvar/SiveChanyvar_finalProject_winform-POS-"
};

let proj = [weather, pos, bookclub];
proj.forEach(project => {
    generateProjectSide(project.name, project.video, project.detail || "No details provided", project.code);
});
function generateProjectSide(title, videos, detail, code) {
  let videoHTML = videos.map(video => `
    <video controls class="w-100 mb-3">
      <source src="${video}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `).join('');

  document.getElementById("project").innerHTML += `
    <section class="row align-items-stretch my-4">
      <div class="col-12">
        <h2 class="mb-3">${title}</h2>
      </div>
      <div class="col-md-6 mb-3">
        ${videoHTML}
      </div>
      <div class="col-md-6 mb-3">
        <div class="p-3 border rounded">${detail}</div>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <a href=${code} target="_blank" class="btn btn-primary" id="source-btn">Source Code</a>
      </div>
    </section>
  `;
}


let moreproj = [
  { name: "Tamagochi", link: "https://github.com/Nyvar/Tamagochi.git" },
  { name: "AirPlane Controller", link: "https://github.com/Nyvar/final.git" },
  { name: "vouge", link: "https://github.com/Nyvar/vouge.github.io.git" }
];

moreproj.forEach(project => {
  showmoreproj(project);
});

function showmoreproj(project) {
  document.getElementById("moreproj").innerHTML += `
    <a href=${project.link} target="_blank"><button class="btn btn-success">${project.name}</button></a>
  `;
}
