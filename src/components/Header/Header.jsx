import Info from './Info';
import Search from './Search';

const Header = props => {
   const loading = props.loading;

   return (
      <header className="header">
         <h1>IP Address Tracker</h1>
         <Search handleSubmit={props.handleSubmit} />
         <Info
            ip={loading ? 'loading...' : props.ip}
            city={loading ? 'loading...' : props.city}
            country={props.country}
            timezone={loading ? 'loading...' : props.timezone}
            isp={loading ? 'loading...' : props.isp}
         />
      </header>
   );
};

export default Header;
