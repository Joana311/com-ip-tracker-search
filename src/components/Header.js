import ModelSearch from './ModelSearch';

const Header = ({setModelData}) => {
//    const loading = props.loading;

   return (
      <header className="header">
         <h1>Commune IP Address Tracker</h1>
         <ModelSearch setModelData={setModelData}/>
         
      </header>
   );
};

export default Header;
