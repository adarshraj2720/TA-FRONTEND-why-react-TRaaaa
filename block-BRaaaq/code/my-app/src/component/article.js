import data from '../data'

import PropTypes from 'prop-types';

function Article(){
    return(
        <>
        {
            data.map((article)=>{
               return (
                   
                   <div className='article'>
               <Articles key={article.id} {...article} />
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



Articles.PropType ={
    img:PropTypes.string.isRequired,
    title:PropTypes.number.isRequired
}


export default Article