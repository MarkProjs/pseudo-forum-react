import MiddleBottom from "../MiddleMainContainer/MiddleBottom";
import MiddleCenter from "../MiddleMainContainer/MiddleCenter";
import MiddleTop from "../MiddleMainContainer/MiddleTop";


const MainColumn = () => {
    return ( 
        <section className="middle-main">
            <MiddleTop />
            <MiddleCenter />
            <MiddleBottom />
            
        </section>
     );
}
 
export default MainColumn;