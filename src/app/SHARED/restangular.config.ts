const FFCApi ='https://ffc-server.herokuapp.com/api/';
const HHApi ='https://happyhour-safaris.herokuapp.com/'
const FFCLocal ='http://localhost:3000'
const playerLocal = 'http://localhost:3000/api/players'

export function restangularConfigFactory(RestangularProvider){
    RestangularProvider.setBaseUrl(HHApi)
}