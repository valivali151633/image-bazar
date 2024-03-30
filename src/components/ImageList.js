import CustomImage from "./CustomImage";


const ImageList = ({list}) =>{

    if(!list) return <h1>fetching...</h1>
    return(
        <section className="images-list">
        {
            list.map(item =>{
                return(
                    <div className="image-wrapper">
                         <CustomImage url={item.urls.regular} key={item.id}/>
                    </div>
                );
            })
           }
        </section>
    )
}

export default ImageList;