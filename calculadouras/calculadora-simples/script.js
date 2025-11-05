  function insert(num) {
            document.getElementById('resultado').value += num;
        }

        function limpar() {
            document.getElementById('resultado').value = '';
        }

        function  apagar() {
            let apagar = document.getElementById('resultado').value;
            document.getElementById('resultado').value = apagar.slice(0, -1);
        }

        function calcular() {
            let resultado = document.getElementById('resultado').value;
            if (resultado) {
                document.getElementById('resultado').value = eval(resultado);
            }
        }
