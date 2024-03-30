import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import Pagination from "./components/Pagination";
import "./styles/index.scss";
import data from './data';
import { useEffect, useState } from "react";
import axios from "axios";



const ImageBazar = () => {
    const [pageNumber , setPageNumber] = useState(1);
    const [query , setQuery] = useState('random');
    const [serverResponse , setServerResponse] = useState(null);
    const [apiStatus , setApiStatus] = useState('init');

    const updateQuery = (newQuery) =>{
        setQuery(newQuery);
        setPageNumber(1)
    }

    useEffect(()=>{
         setApiStatus('pending');
         (async function (){
            try{
                const response = await axios({
                    url:`https://api.unsplash.com/search/photos`,
                    params:{
                        page: pageNumber,
                        query,
                        client_id: "2WBalRkx7pYtI5eeK87A1GUQRj_NRH0vmMU2aGzK890"
                    },
                    method:"GET"

                });
                setServerResponse(response.data);
                setApiStatus('success');

            }
            catch (error){
                alert("something went wrong")
                setApiStatus('error')

            }
        })();
    },[pageNumber,query]);






    return (
        <div className = "container">
            <SearchBar updateQuery={updateQuery} apiStatus={apiStatus}/>
            <ImageList list={serverResponse?.results}/>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} apiStatus={apiStatus}/>
        </div>
    );
}
export default ImageBazar;