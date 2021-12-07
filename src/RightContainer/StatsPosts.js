import { useState } from "react";
import { useEffect} from "react";

const StatsPsts = () => {
    let [userList, setUserList] = useState(null);
 // npx json-server --watch data/users.json --port 3002
  useEffect(()=> {
        let url = 'http://localhost:3002/users';
           fetch (url)
           .then((resp) => {
             console.log('resp', resp);
             if (!resp.ok){
               throw new Error('http pbm status', resp.Error);
             }else{
               return resp.json();
             }
           })
           .then((data) => {
            setUserList(data);
           })
           .catch((err) => {
            console.log(err.message)
           }); 
       },[]);
//{user.user_id}     {user.nberPosts}
    return ( 
      <section id="stats-posts">
            <h4>Stats Posts</h4>
            <section id="statHeader">
                <label htmlFor="">Name</label>
                <label htmlFor="">Post#</label>

            </section>
            { userList.map((user)=> (
                <section className="stats-row">
                  
                    <label htmlFor="">{user.user_id}</label>
                    <label htmlFor="">{user.nberPosts}</label>
                </section>
            ) )}

      </section>
     );
}
 
export default StatsPsts;