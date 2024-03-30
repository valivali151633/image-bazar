// import "../index.css";
import 'material-icons/iconfont/material-icons.css';



const Pagination = ({pageNumber , setPageNumber , apiStatus}) =>{
    
    const disable = (apiStatus === 'pending') || (apiStatus === 'init')
    return (
        <div className="pagenation-box">
           <button 
                className="material-icons"
                disabled = {disable || (pageNumber===1)}
                onClick={() =>{
                setPageNumber(prev => prev - 1)
            }}
            >chevron_left</button>

            <p>{pageNumber}</p>

        <button 
            disabled={disable
            }
            className="material-icons"
            onClick={()=>{
                setPageNumber(prev => prev + 1)
            }}
            >chevron_right</button>
        </div>
    )
}

export default Pagination;