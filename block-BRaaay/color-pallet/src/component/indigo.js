import data from '../data/colors.json'

function Indigo(){

return(
    <>
   
    {
        data.indigo.map((color)=>{
            return <div className='color'  style={{

            backgroundColor:`${color}`,
            height:"200px",
            width:"200px"
                

            }}>
                
                <p>{color}</p>
            </div>
           

        })
    }
    </>
)

}

export default Indigo;