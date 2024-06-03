//Block scope and setTimeout

function a (){
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
          console.log(i);
        }, 1000);
      }

}




//solution for it using var only and not let


for(var i=0;i<3;i++)
    {
        function inner(i){
            setTimeout(function log(){
                console.log(i);
            },i*1000)
        }
        inner(i);
    }

