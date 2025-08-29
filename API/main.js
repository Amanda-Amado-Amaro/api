// fetch("https://dog.ceo/api/breeds/image/random")
// .then((Response) => Response.json())
// .then((data) => console.log(data))
// .catch((error) => console.log("erro ao buscar os dados" , error));

//async/awit

let intervalo = null;
let emExecucao = false;

async function carregarImagem() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const img = document.getElementById("imgcao");
    img.src = data.message;
  } catch (error) {
    console.log("Erro ao buscar os dados:", error);
  }
}

const botao = document.getElementById("btcao");

botao.addEventListener("click", () => {
  if (!emExecucao) {
 
    carregarImagem(); 
    intervalo = setInterval(carregarImagem, 3000);
    botao.textContent = "Parar";
  } else {
  
    clearInterval(intervalo);
    intervalo = null;
    botao.textContent = "Clique";
  }

  emExecucao = !emExecucao;
});

