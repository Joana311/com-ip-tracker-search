import Search from './Search';
const Sidebar = props => {
//    const loading = props.loading;

   return (
      <sidebar className="sidebarStyle">
         <h1>IP Address Tracker</h1>
         <Search handleSubmit={props.handleSubmit} />
      </sidebar>
   );
};

export default Sidebar;
