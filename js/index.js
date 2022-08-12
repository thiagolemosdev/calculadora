function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear-display"),
    total: 0,

    inicia() {
      this.cliqueBotoes();
    },

    btnParaDisplay(valor) {
      console.log((this.display.value = this.display.value += valor));
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUltimo() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta(el) {
      conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          this.display.value = "Calculo invalido";
          return;
        }
        this.display.value = conta;
      } catch (e) {
        this.display.value = "Calculo invalido";
        return;
      }
    },

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
