function Pessoa () {
    this.idade = 0 

    setInterval(() => {
       this.idade++
       console.log(this.idade) 
    }, 1000);
}

new Pessoa

// o this nao vareia de acordo com quem esta chamando, vantagem de usar a funcao arrow