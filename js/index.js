function criaCalculadora() {
  // Criando função que cria a calculadora

  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear-display"),
    // Pegando variavel e btnClear do DOM

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
      // a gente utiliza sempre o this para chamar uma função ou variavel
      // dentro da factory function
    },

    // Funçao inicia claculadora que chama a função de cliques de botão

    pressionaEnter() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },
    //Função que pega o clique do enter, quando clicar o enter ele chama a funçao
    // Realiza conta

    btnParaDisplay(valor) {
      this.display.value = this.display.value += valor;
    },
    // Funçao que atribui o valor ao display(input), da calculadora.

    clearDisplay() {
      this.display.value = "";
    },
    // Função que limpa o input

    apagaUltimo() {
      this.display.value = this.display.value.slice(0, -1);
    },
    //Funçao que apaga o ultimo valor do input, ultimo caractere

    realizaConta(el) {
      conta = this.display.value;
      // atribuindo valor da variavel conta

      try {
        conta = eval(conta);
        // fazendo a conta

        if (!conta) {
          this.display.value = "Calculo invalido";
          return;
        }
        this.display.value = conta;
      } catch (e) {
        this.display.value = "Calculo invalido";
        return;
      }

      // utilizando try catch para tratar erros
    },
    // função que realiza a conta

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (this.display.value === "Calculo invalido") {
          this.display.value = "";
        }

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-eq")) {
          this.realizaConta(el);
        }
        if (el.classList.contains("btn-clear-display")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.apagaUltimo();
        }
      });
    },
    // Funçao que pega o clique dos botoes e define o que fazer

    // Utilizando dessa forma não é necessario mudar o this,
    // a arrow function mantem o o this da factory

    // cliqueBotoes() {
    //   document.addEventListener(
    //     "click",
    //     function (e) {
    //       const el = e.target;
    //       if (el.classList.contains("btn-num")) {
    //         this.btnParaDisplay(el.innerText);
    //       }
    //     }.bind(this)
    //   );
    // },
    // se eu usar dessa forma eu preciso esse bind ou um outro metodo para mudar o this
    // para o this do constructor
  };
}
const calculadora = criaCalculadora();
calculadora.inicia();
// Criando variavel para funçao e chamando ela
