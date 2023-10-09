class GoogleTasks{
   
  
    static getTasks(){
      return fetch("https://tasks.googleapis.com")
      .then( response => response.json() )
      .catch( error => console.log(error.message) )
    };
    update(){

    }
    get(){

    }
    delete(){

    }
    set(){
        
    }

}




/// AIzaSyDS_i51b6x4ffd4amg12xsQiaLqKXm519A//////