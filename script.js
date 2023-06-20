class Password{
    weakPass(){
     let weak = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
     let pass ='';
     for(let i =0 ; i<=4; i++){
     let a = Math.floor(Math.random()* weak.length)
     let element = weak[a];
     pass += element
     }
     return pass;
    }
    numPass(){
     let num = ['1','2','3','4','5','6','7','8','9','0'];
     let pass ='';
     for(let i =0 ; i<=5; i++){
     let a = Math.floor(Math.random()* num.length)
     let element = num[a];
     pass += element
     }
     return pass;
    }
    strongPass(){
        let strong = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let pass ='';
     for(let i =0 ; i<=6; i++){
     let a = Math.floor(Math.random()* strong.length)
     let element = strong[a];
     pass += element
     }
     return pass;
   }
    superStrongPass(){
        let supStrong = ['$',"%",'1','2','3','4','5','6','0','a','@','#',"&","*",'b','c','d','e','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','W','X','Y','Z','~','!'];
        let pass ='';
     for(let i =0 ; i<=10; i++){
     let a = Math.floor(Math.random()* supStrong.length)
     let element = supStrong[a];
     pass += element
     }
     return pass;
    }
}

let a = new Password()

let weakP = document.getElementById('weak')
let numP = document.getElementById('num')
let strongP = document.getElementById('strong')
let supStrongP = document.getElementById('supStrong')

weakP.addEventListener('click' ,function(){
    passBox.innerHTML=`
    <span class="text">${a.weakPass()}</span>
   `
})

numP.addEventListener('click' ,function(){
    passBox.innerHTML=`
     <span class="text">${a.numPass()}</span>
    `
})

strongP.addEventListener('click' ,function(){
    passBox.innerHTML=`
    <span class="text">${a.strongPass()}</span>
   `
})

supStrongP.addEventListener('click' ,function(){
    passBox.innerHTML=`
    <span class="text">${a.superStrongPass()}</span>
   `
})
