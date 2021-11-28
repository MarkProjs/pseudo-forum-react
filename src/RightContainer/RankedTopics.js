
const RankedTopics = (props) => {
   let forumList = props.forumList;

    function  getTopicFrom(forumMaker){
        let author = forumList.filter((forumId)=>{ 
        return  (forumId.author.toLowerCase()===forumMaker); 
        });
      return author;
    }  

let nasrForum = getTopicFrom('nasr');
//return

    return (  
        <section id="ranked-topics">
            <h6>Here I think we need table </h6>
            <h4>Ranked Topics</h4> 
                <label htmlFor="">Topic: {nasrForum["author"]}</label>
                <label htmlFor="">Topic: {nasrForum["author"]}</label> 
                <label htmlFor="">Topic: {nasrForum["author"]}</label> 
        </section>
     );
}
 
export default RankedTopics;