
const RankedTopics = (props) => {
    let forumData = props.forumData;

    function  getTopicFrom(forumData){
        console.log(forumData.topicList);
    //     let author = forumList.filter((forumId)=>{ 
    //     return  (forumId.author.toLowerCase()===forumMaker); 
    //     });
    //   return author;
    }  

let nasrForum = getTopicFrom('nasr');
//return

    return (  
        <section id="ranked-topics">
            <h6>Here I think we need table </h6>
            <h4>Ranked Topics</h4> 
                <label htmlFor="">Topic: </label>
                <label htmlFor="">Topic: </label> 
                <label htmlFor="">Topic: </label> 
        </section>
     );
}
 
export default RankedTopics;