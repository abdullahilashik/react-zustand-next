"use server"

export async function getProducts() {
    try{
        const url = `http://localhost:3001/products`;
        const response = await fetch(url, {
            method: 'GET'
        });
        const jsondata = await response.json();
        return jsondata;

    }catch(error){
        console.log('Found error: ', error);
        return {
            "success" : false,
            "message" : "Failed to get data",
            "data" : null
        }
    }
}