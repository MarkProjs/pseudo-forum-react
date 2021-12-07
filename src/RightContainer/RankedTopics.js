import { useEffect } from "react";


const RankedTopics = (props) => {
    let forumData = props.forumData;
    useEffect(()=>{
        getTopicFrom(forumData);
    })
    function  getTopicFrom(forumData){
        let author = forumData.filter((forumId)=>{ 
        return  (forumId.resp.toLowerCase() === forumData); 
        });
      return author;
    }  

// let nasrForum = getTopicFrom('2');
//return

//     function getTopic(forumData){
//         for(let i in forumData){
//             let author = forumData.filter((forumId)=>{ 
//                         return  (forumId.resp.toLowerCase() === forumData); 
//                         });
//                       return author; 
//         }
//     }
//  let topic = getTopic('2');

    return (  
        <section id="ranked-topics">
            <h4>Ranked Topics</h4> 
                <label htmlFor="">Topic:</label>
                <label htmlFor="">Topic: </label> 
                <label htmlFor="">Topic: </label> 
        </section>
     );
}
 
export default RankedTopics;