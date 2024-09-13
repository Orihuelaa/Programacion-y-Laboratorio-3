// Ejercicio 1
async function getUserData() {
    try{
    const responser = await fetch("https://randomuser.me/api/")
    const data = await responser.json();
    const person = data.results[0];
    const nombre =`${person.name.first} ${person.name.last}`;
    const ubicacion = `${person.location.country}, ${person.location.state}`;
    const urlImage = person.picture.medium;

    console.log (nombre);
    console.log (ubicacion);
    console.log (urlImage);
    const divInfo = document.getElementById("userInfo");
    divInfo.innerHTML = `
    <p> Nombre: ${nombre}</p>
    <p>Ubicacion: ${ubicacion}</p>
    <img src = ${urlImage} width ="150" >`
    } catch (error){
        console.log(error)
    }
}
getUserData();

// Ejercicio 2
async function listPosts() {
    try{
        const responser2 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data2 = await responser2.json();
        const pri10post = data2.slice(0,10);
        const divPosts = document.getElementById("postsList");

        pri10post.forEach(post => {
            const li = document.createElement('li');
            li.textContent = post.title;
            divPosts.appendChild(li);
        });
    } catch (error) {
        console.log(error)
    }  
}
listPosts();
