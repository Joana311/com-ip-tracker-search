const infoBox = props => {
   return (
      <div className="header__info-box">
         <h2>{props.title}</h2>
         <h3>{props.info}</h3>
      </div>
   );
};

export default infoBox;
