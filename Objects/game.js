class Game{
    constructor(){

    }

    getState(){
        db.ref("gamestate").on("value", function(data){
            gs = data.val();
        })
    }

    update(state){
        db.ref("/").update({
            gamestate:state

        })
    }

    start(){
        form=new Form()
        form.display()
    }
    
    play(){

    }

    end(){
        
    }


}



