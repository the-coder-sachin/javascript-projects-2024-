let userList = document.querySelector(".user-list");
let searchBar = document.querySelector('.search-bar');
let userArr = [];


searchBar.addEventListener('input', (e)=>{
    let query = e.target.value;
    console.log(query);
     userArr.filter((curElem) => {
        
       curElem.innerText.toLowerCase().includes(query.toLowerCase())
         ? curElem.style.display = `flex`
         : curElem.style.display = 'none';
     });
    
})


async function getUsers() {
  let res = await fetch("https://api.github.com/users");
  let users = await res.json();
  if (users) {
    userList.innerHTML = "";
  }
  users.map((user) => {
    const li = document.createElement("li");
    li.classList.add('user', 'none')
    
    li.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="img">
                          <img src=${user.avatar_url} alt="profile"/>
                      </div>
                      <div class="content">
                          <div class="name">
                              <h2>${user.login}</h2>
                          </div>
                          <div class="link">link:
                              <a href=${user.html_url} class="none">
                              <i>${user.html_url}</i></a>
                          </div>
                      </div>`
    );

    userArr.push(li);
    userList.appendChild(li);
  });
}

// console.log(userArr);
getUsers();


// error: userArr is showing undefiened


