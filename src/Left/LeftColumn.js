const LeftColumn = () => {
    return ( 
        <nav className="left-menu">
                <h4>Admin</h4>
                <ul>
                    <li> <a href="category">Create Category</a> </li>
                    <li> <a href="topic">Create Topic</a> </li>
                    <li> <a href="close">Close Topic</a> </li>
                    <li> <a href="delete">delete Topic</a> </li>
                </ul>
        </nav>
     );
}
 
export default LeftColumn;