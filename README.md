
<h1>
<img src="public/pokeball.png" width="25" alt="poke-bola">
Pokémon</h1>


<p>Nosso site é uma ferramenta divertida e educacional para todos os fãs de Pokemon.</p> 
 <p>Com base na temperatura de uma cidade informada pelo usuário, nossa aplicação web exibe um Pokemon correspondente com base nas regras
 de clima associadas aos diferentes tipos como Pokemon gelo, água, grama, terra, inseto, pedra, fogo.</p>
 <p>Os usuários podem inserir o nome de qualquer cidade do mundo e descobrir qual tipo de Pokemon que lá habita.</p> 
 <p>Além disso, se estiver chovendo na região, um Pokemon elétrico será exibido independentemente da temperatura.</p>
 <p>O Pokemon exibido é aleatório e não será repetido consecutivamente.</p>
 <p>Após a consulta, nossa aplicação exibe a temperatura atual da cidade em graus Celsius, além de indicar se está chovendo ou não.</p> 
 <p>Nosso site é uma maneira divertida de explorar o mundo com base nos Pokemons e nas condições climáticas, e é perfeito para aqueles que desejam aprender mais sobre essas criaturas fascinantes.</p>

 <br>
 <hr>

 <h2>
<img src="public/pngwing.com.png" width="25" alt="react logo">       
Tecnologias do projeto</h2>

<ul>
   <li><h4>React</h4></li>
   <li><h4>Vite</h4></li>
   <li><h4>Axios</h4></li>
   <li><h4>JavaScript</h4></li>
   <li><h4>Docker</h4></li>
</ul>


<h2>:gear: Instruções de projeto</h2>

<p><strong>Para rodar este projeto local será preciso ter o Node com Npm ou Yarn</strong></p>

<p>1 - Faça o clone do projeto em sua máquina.</p>

```git clone https://github.com/FranGJ7/ebb-web.git```

<p>2 - No terminal, navegue até a pasta raiz do projeto e execute o comando abaixo para instalar as dependências.</p>

```npm install```

<p>3 - Em seguida, execute o comando abaixo para iniciar a aplicação.</p>

```npm run dev```

<p>4 - Verifique se o arquivo .env está disponível na raiz do projeto, pois ele contém a chave da API utilizada pela aplicação.
    Caso não esteja presente, crie-o e adicione a chave no formato VITE_OPENWEATHERMAP_API_KEY=sua-chave-da-api.</p>

<p>5 - Por fim, a aplicação já deve estar rodando localmente no endereço http://localhost:5173/</p>

<br/>

<p><Strong>É importante ressaltar que o projeto também está hospedado no servidor Netlify e pode ser acessado através do link: https://ebb-web-teste.netlify.app/</Strong></p>

<br/>
<hr/>

<h2>
    <img src="public/kisspng-docker-python-software-deployment-xebialabs-container-5aca273fc5e6e6.4176210715231977598106.png" width="70" alt="logo docker">
    Instruções de imagem Docker
</h2>

<p>1 - Instale o Docker em sua máquina. Você pode encontrar as instruções para fazer isso no site oficial do Docker.</p>

<p>2 - Abra o terminal ou o prompt de comando na sua máquina.</p>

<p>3 - Baixe a imagem do Docker do repositório utilizando o seguinte comando:</p>

```docker pull fransergiogj7/ebb-docker:v1.0```

<p>4 - Após a imagem ser baixada, execute-a utilizando o seguinte comando:</p>

```docker run -p 5173:3000 fransergiogj7/ebb-docker:v1.0```

<p>5 - Aguarde alguns instantes para que a aplicação seja iniciada.</p>

<p>6 - Acesse a aplicação pelo seu navegador de internet, utilizando o seguinte endereço: http://localhost:3000</p>
