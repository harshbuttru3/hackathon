// ==========for dark mode ==========
let dark = document.getElementById('toggle');

dark.addEventListener("click", ()=> {
    document.body.classList.toggle('darkmode')
})

// =======fetching api and displaying the content=====

let url = "https://kontests.net/api/v1/all"

let response = fetch(url)
response.then((contest)=>{
    return contest.json()
}).then((contest)=>{
   ihtml = ""
    for(item in contest){
        console.log(contest[item])
        ihtml += `
        <div id="cards">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPEQ7ZAc4J7p35SmxeONesFvoTtI7g8T5pIEDh9I&s" alt="card image">
  <div id="text">
    <h2>${contest[item].name}</h2> <hr>
    <ul>
  <li><p><b>Start time is:</b>  ${contest[item].start_time}</p></li>
  <li><p><b>End time is:</b>  ${contest[item].end_time}</p></li>
  <li><p> In 24 hours?  ${contest[item].in_24_hours}</p></li>
  <li><p> <b>Site:</b> ${contest[item].site}</li>
  </ul>
  </div>
  <div id="btn">
  <button><a href="${contest[item].url}" target = "_blank">Visit Page</a></button>
  </div>
</div>
        `
    }
    cardcontainer.innerHTML = ihtml
})
