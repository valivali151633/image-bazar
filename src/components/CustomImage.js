import { useEffect , useState} from 'react'
import '../styles/customImage.scss'




const CustomImage = ({ url }) => {
    const [status, setStatus] = useState(1);
    
    useEffect(() => {
        const image = new Image();
        image.onload = function(){
            setStatus(3);
        }
        image.onerror = function(){
            setStatus(2);
        }
        image.src = url;
    },[])

    if(status === 1) return <div className='image-loading-skleton'></div>;
    if(status === 2) return <p>loading Error</p>;

return ( 
        <img src={url} className='image' />
    );
}


export default CustomImage;