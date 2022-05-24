import data from '../data/colors.json'

function Gray() {

    return (
        <>

            {
                data.gray.map((color,i) => {
                    // [50, 100, 200].map((a) => {
                        
                    return <div className='color' style={{

                        backgroundColor: `${color}`,
                        height: "200px",
                        width: "200px"


                    }} >
                        <div className="number">

                        <p>{color}</p>

                   
                            <p>{more(i)}</p>
                        </div>



                    </div>


                })
            // })
            }
        </>
    )

}

function more(i) {
   
    
        var a=100
        if(i===0){
            return 50;
        }else{
            return a*i;
        }


}
export default Gray;
