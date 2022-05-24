import data from '../data/colors.json'

function Yellow(){

return(
    <>
   
    {
        data.yellow.map((color)=>{
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

export default Yellow;