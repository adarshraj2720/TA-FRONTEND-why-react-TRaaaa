import data from '../data'

function Article(){
    return(
        <>
        {
            data.map((article)=>{
               return (
                   
                   <div className='article'>
               <Articles {...article} />
               </div>
             
               )
            })
        }
        </>
    )
}

function Articles(props){
    return(
        <div>
       <img src={props.urlToImage} alt='Image'/>
       <h2>{props.title}</h2>
       </div>
    )
}


export default Article