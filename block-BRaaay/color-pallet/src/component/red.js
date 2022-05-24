import data from '../data/colors.json'

function Red(){

return(
    <>
   
    {
        data.red.map((color)=>{
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

export default Red;