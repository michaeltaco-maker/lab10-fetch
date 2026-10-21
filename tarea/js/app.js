async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Haz el fetch a la URL de las publicaciones del usuario 1
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    // 2. Convierte la respuesta a JSON
    const posts = await res.json();
    // 3. Muestra los títulos en la lista con map, join e innerHTML
    lista.innerHTML = posts
      .map(p => `<li>${p.title}</li>`)
      .join("");
  }
}