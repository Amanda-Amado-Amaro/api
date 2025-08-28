// fetch("https://dog.ceo/api/breeds/image/random")
// .then((Response) => Response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log("erro ao buscar os dados" , error));

//async/awit

async function carregarUsuarios() {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();
 
    document.getElementById("imgcao"), src = data.menssage;
  } catch (error) {
    console.log("erro ao buscar os dados : ", error);
  }
}
let botao = document.getElementById("btcao");
botao.addEventListener("click", carregarUsuarios);
