
const createDadosCadastrais = () => {

    //falta puxar os dados de cidade e completar os campos pelo cep via API

    let data = new Date();
    let html ='';
    document.title = "Paciente - Atualizar Cadastro";

    //limpa o conteudo na div
    let conteudo = document.getElementById('conteudo-gerado');
    conteudo.innerHTML = '';

    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onload = function(){
        var json = JSON.parse(this.responseText);

        console.log(json);
    };

    xmlhttp.open("GET", "/paciente/dados_atualizacao", false);
    xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xmlhttp.send(); 

    //titulo da pagina
    document.title = "Paciente - Dashboard";

    html = `
    
    <form method="POST" action="/paciente/atualizar">
        
      
            <h2>Informacao Pessoal</h2>

            <div class="basicInfo"> <!--Inicio basicInfo-->

                <div class="skinColorData">
                    <label>Cor:</label> 
                    <select name="cor" id="cor">
                    <option selected value="">------</option>
                    <option value="Branco">Branco</option>
                    <option value="Negro">Negro</option>
                    <option value="Pardo">Pardo</option>
                    <option value="Amarelo">Amarelo</option>
                    </select>
                </div>


                <div class="birthData">
                    <label for="data">Data de Nascimento:</label> 
                    <input
                    type="date"
                    id="data"
                    name="data"
                    value="${data.toLocaleDateString()}"
                    min="1910-01-01"
                    
                    />
                </div>
                

                <div class="genderData">
                    <label>Sexo: </label>
                    <select name="sexo" id="sexo">
                    <option value="">------</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                    </select>
                </div>

            </div> <!--fim basicInfo-->

            <h2>Endereco</h2>  

            <div class="adressInfo"> <!--Inicio de informacoes de endereco-->

            

                <div class="cepData">
                <input type="text" name="cep" placeholder="CEP">
                </div>

                <div class="ruaData">
                <input type="text" name="rua" placeholder="Rua...">
                </div>

                <div class="bairroData">
                <input type="text" name="bairro" placeholder="Bairro">
                </div>

                <div class="numeroData">
                <input type="text" name="numero" placeholder="Numero">
                </div>

                <div class="complementoData">
                <input type="text" name="complemento" placeholder="Complemento">
                </div>

                <div class="cidadeData">
                <select id="cidade" name="cidade">
                    <option selected disabled value="">Cidade</option>
                </select>

                <select id="uf" name="uf">
                    <option selected disabled value="">UF</option>
                </select>

                </div>

            </div> <!--Fim de informacoes de endereco-->

            <h2>Contato</h2>

            <div class="contactInfo">

                <div class="phoneData">
                    <label>Telefone</label>
                    <input
                    type="text"
                    name="telefone"
                    id="telefone"
                    placeholder="(00)0 0000-0000"
                    />
                </div>

                <div class="emailData">
                    <label>E-mail</label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="xxxxxx@xxxxxxx.com"
                    />
                </div>

            </div>

            <h2>Login</h2>

            <div class ="loginInfo">
                <div class="nameData">
                    <input
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Insira seu nome"
                    />
                </div>

                <div class="pwdData">
                    <input
                    type="password"
                    name="senha"
                    id="senha"
                    placeholder="Insira sua senha"
                    />
                </div>
            </div>


            <div class="btnAccept">
                    <input 
                        type="submit"           
                        value="Modificar Dados"
                        
                    />
            </div>


            
        
  </form>
    
    `
    
    conteudo.innerHTML = html;
    
}

export default createDadosCadastrais;