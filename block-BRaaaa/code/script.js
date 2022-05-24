let form = document.querySelector('form')
let movie = document.querySelector('#movie');
let list = document.querySelector('.list');

function watch(event){
    event.preventDefault()
   // let movielist=[]
    let value = event.target.elements.movie.value;
    console.log(value)
  

    // movielist.push({
    //     movie:value,
    //     watch:`To Watch`,
    // })
    let p = document.createElement('p');
    let button = document.createElement('button');
    button.addEventListener('click',function(){
        if(button.innerText==='To Watch'){
            button.innerText='Watched'
        }else if(button.innerText==='Watched'){
            button.innerText='To Watch'
        }
    })
    let div = document.createElement('div');
    p.innerText= value;
    button.innerText = 'To Watch';
    div.append(p,button);
    list.append(div);
    

    event.target.elements.movie.value="";

// createUI(movielist);
   
}


// function createUI(arr){
//     let list = document.querySelector('.list');
//     arr.forEach((elm)=>{
       
//         let p = document.createElement('p');
//         let button = document.createElement('button');
//         button.addEventListener('click',function(){
//             if(button.innerText==='To Watch'){
//                 button.innerText='Watched'
//             }else if(button.innerText==='Watched'){
//                 button.innerText='To Watch'
//             }
//         })
//         let div = document.createElement('div');
//         p.innerText= elm.movie;
//         button.innerText = elm.watch;
//         div.append(p,button);
//         list.append(div);
//     })
// }

// function change(event){

// }

form.addEventListener('submit',watch)

