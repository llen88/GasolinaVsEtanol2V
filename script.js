mportScripts (Math)
 
function Consultar (){
    let numero = document.getElementById('numero');
    let valor = Number(numero.value);
    let selecao = document.getElementById('porcentagem');
    let valores = selecao.options [selecao.selectedIndex];
    let porcetagem = valores.value;
 
   
    let calculogasolina = (valor*(porcetagem/100));  // conta para calcular o valor da gasolina
   
    let calculoetanol = valor*(1/porcetagem) ; // conta para calcular o valor do etanol
 
   // const totalgasolina = calculogasolina.toFixed(2);
   // const totaletanol = calculoetanol.toFixed(2);
    const calcgasolina = calculogasolina.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const calcetanol = calculoetanol.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   
    let resultado = document.getElementById('resposta');
 
    if(document.getElementById('gasolina').checked){
      resposta.innerHTML = `Abasteça com <strong>ETANOL</strong> se seu preço for igual ou menor a: ${calcgasolina}`;
    }
 
    else if (document.getElementById('etanol').checked){
        resposta.innerHTML = `Abasteça com <strong>GASOLINA</strong> se seu preço for igual ou menor a: ${calcetanol}`;
    }
 
    else{
        resposta.innerHTML = "Nenhum valor encontrado";
    }
}
 