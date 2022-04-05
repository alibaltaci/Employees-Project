export class Request{

    constructor(url){
        this.url = url;
    }

    // get request 
    async get(){
        const response = await fetch(this.url);
        const responseData = await response.json();
        return responseData; 
    } 

    // post request
    async post(data){
        const response = await fetch(this.url, {
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "content-type": "application/json; charset=UTF-8"
            }
        });
        const responseData = await response.json();
        return responseData;
    }

    // put request
    async put(id, data){
        const response = await fetch(this.url + `/${id}`, {
            method : "PUT",
            body : JSON.stringify(data),
            headers : {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        const responseData = await response.json();
        return responseData;
    }

    // delete request
    async delete(id){
        const response = await fetch(this.url + `/${id}`, {
            method : "DELETE"
        })
        return `id ${id} verileri silindi`;
    }
}