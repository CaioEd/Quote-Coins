const url = `https://economia.awesomeapi.com.br/json/last/BRL-USD,USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,GBP-BRL`

const coinsText = [
    real = document.querySelector('#real'),
    dollar = document.querySelector('#dollar'),
    euro = document.querySelector('#euro'),
    lb = document.querySelector('#lb'),
    bitcoin = document.querySelector('#bitcoin'),
    ethereum = document.querySelector('#ethereum')
]

const func = () => {
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(body =>{
            console.log(body)
            coinsText[0].innerHTML = `$ ${body.BRLUSD.ask}`
            coinsText[1].innerHTML = `R$ ${body.USDBRL.ask}`
            coinsText[2].innerHTML = `R$ ${body.EURBRL.ask}`
            coinsText[3].innerHTML = `R$ ${body.GBPBRL.ask}`
            coinsText[4].innerHTML = `R$ ${body.BTCBRL.ask}`
            coinsText[5].innerHTML = `R$ ${body.ETHBRL.ask}`
        })
}

func()