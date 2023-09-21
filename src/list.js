 const List = ({things}) => {
return(
    <>
    {things.map((thing)=>{
        const {id, name, image} = thing;
        return <article key={id} className="thing">
           <img src={image} alt={name}></img> 
           <div>
            <h3>{name}</h3>
            </div>    

        </article>
         
    })}
    
    </>
)
}

export default List;