var formElement = document.getElementById("myForm");


formElement.addEventListener('submit', function(e){
    e.preventDefault()
    
    var search = document.getElementById("search").value;
    var originalName = search.split(' ').join('');

    // document.getElementById("result").innerHTML = ""
    fetch("https://api.github.com/users/"+originalName)
    .then((result) => result.json())
    .then((data)=>{
        console.log(data)

        document.getElementById("result").innerHTML = `
        <a target="_blank"href="https://www.github.com/${originalName}"><img class="img" src="${data.avatar_url}"/></a>
        
        <div class="container info">
        <span>Username - ${data.login}</span>
        <span>Name - ${data.name}</span>
        <span>Repositry - ${data.public_repos}</span>
        <span>gist - ${data.public_gists}</span>
        <span>date - ${data.created_at}</span>
        </div>
        `
    })
})

// 


//<a target="_blank"href="https://www.github.com/${originalName}"><h3>Username - ${data.login}</></a>