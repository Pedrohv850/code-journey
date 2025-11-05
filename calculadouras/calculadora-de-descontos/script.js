     function calcularDesconto() {
            const valor = parseFloat(document.getElementById("valor").value);
            const desconto = parseFloat(document.getElementById("desconto").value);
            const resultado = document.getElementById("resultado");
            const check = document.getElementById("check");

            if (isNaN(valor) || isNaN(desconto) || valor <= 0 || desconto < 0) {
                resultado.style.opacity = 1;
                resultado.textContent = "Por favor, insira valores válidos.";
                check.style.display = "none";
                return;
            }

            const valorDesconto = (valor * desconto) / 100;
            const valorFinal = valor - valorDesconto;

            resultado.innerHTML = `
                Valor original: R$ ${valor.toFixed(2)} <br>
                Desconto: ${desconto}% <br>
                Você economiza: <strong>R$ ${valorDesconto.toFixed(2)}</strong> <br>
                Valor final: <strong>R$ ${valorFinal.toFixed(2)}</strong>
            `;

            resultado.style.opacity = 1;
            check.style.display = "block";

            // some o check depois de 2 segundos
            setTimeout(() => {
                check.style.display = "none";
            }, 2000);
        }

        function limparCampos() {
            document.getElementById("valor").value = "";
            document.getElementById("desconto").value = "";
            document.getElementById("resultado").style.opacity = 0;
            document.getElementById("check").style.display = "none";
        }