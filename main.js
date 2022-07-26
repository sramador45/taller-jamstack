
    /*
  esta funcion es para recibir el parametro que es el id del elemento 
  const list repos arrow function para poder acceder accesar a un request de  la api  de github 
  */
const button = document.getElementById('buscar');
const listRepos = username => {
    //va a llamar const repos cuando este listo
    const repos= await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`) .then(res => res.json());
    const content=document.getElementById("contenido");
    const markup =listRepos.map((repo)=>`<li>
    <a href="${repo.html_url}">${repo.name}</a>
    (⭐️ ${repo.stargazers_count})
    </li>`)

 //sirve para concatenar todos los elementos del arreglo en un string
    content.innerHTML=`${markup.join((''))}`


};

//evento para cuando se haga click
button.onclick=function(){
    const nameRepo=document.getElementById("name").value;
    listRepos(nameRepo)
}

