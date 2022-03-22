const products = [
    {id:'1',title:'product1',description:'description product 1',price:'$1000',pictureUrl:'picture1'},
    {id:'2',title:'product2',description:'description product 2',price:'$1000',pictureUrl:'picture2'},
    {id:'3',title:'product3',description:'description product 3',price:'$1000',pictureUrl:'picture3'},
    {id:'4',title:'product4',description:'description product 4',price:'$1000',pictureUrl:'picture4'},
    {id:'5',title:'product5',description:'description product 5',price:'$1000',pictureUrl:'picture5'},
    {id:'6',title:'product6',description:'description product 6',price:'$1000',pictureUrl:'picture6'},
    {id:'7',title:'product7',description:'description product 7',price:'$1000',pictureUrl:'picture7'},
    {id:'8',title:'product8',description:'description product 8',price:'$1000',pictureUrl:'picture8'},
    {id:'9',title:'product9',description:'description product 9',price:'$1000',pictureUrl:'picture9'},
    {id:'10',title:'product10',description:'description product 10',price:'$1000',pictureUrl:'picture10'}
]

export const getFetch = new Promise((resolve,reject)=>{
    let condition = true
    if(condition){
        setTimeout(()=>{
            resolve(products)
        },2000)
    }else{
        reject('400 not found')
    }
});