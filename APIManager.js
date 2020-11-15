//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }
    
    getQuote() {
        $.ajax({
            method: 'get',
            url: 'https://api.kanye.rest/',
            success: (kanyeQuote) => {
                this.data.kanyeQuote = kanyeQuote.quote
            }
        })
    }

    addUser() {
        $.ajax({
            method: 'get',
            url: 'https://randomuser.me/api/',
            success: (data) => {
                this.data.mainUser.name = data.results[0].name.first + " " + data.results[0].name.last
                this.data.mainUser.city = data.results[0].location.city
                this.data.mainUser.country = data.results[0].location.country
                this.data.mainUser.image = data.results[0].picture.large

            }
        })
    }

    addFriends() {
        this.data.userFriends = []
        for (let friend = 1; friend < 7; friend++) {
            $.ajax({
                method: 'get',
                url: 'https://randomuser.me/api/',
                success: (data) => {
                    let friendName = (data.results[0].name.first + " " + data.results[0].name.last)
                    this.data.userFriends.push(friendName)
                }
            })
        }
    }
    getBacon() {
        
        $.ajax({
            method: 'get',
            url: 'https://baconipsum.com/api/?type=meat-and-filler/',
            success: (baconQuote) => {
                this.data.about = baconQuote[0]
                 }

        })
    }
    addPokemon() {
        const pokeId = Math.floor(Math.random() * 100)
        $.ajax({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
            success: (pokemon) => {
                this.data.pokemon.name = pokemon.name
                this.data.pokemon.image = pokemon.sprites.front_default
            }
        })
    }
    getAllInfo() {
        this.getQuote()
        this.addUser()
        this.addFriends()
        this.getBacon()
        this.addPokemon()

    }

}





