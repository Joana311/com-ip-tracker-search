import InfoBox from './InfoBox';

const Info = props => {
   return (
      <div className="header__info">
         <InfoBox title="Ip Address" info={props.ip || 'Invalid Ip'} />
         <InfoBox
            title="Location"
            info={
               `${props.country ? props.country : 'Invalid ip'}, ${
                  props.city ? props.city : 'Invalid ip'
               }` || 'Invalid Ip'
            }
         />
         <InfoBox title="Timezone" info={props.timezone || 'Invalid Ip'} />
         <InfoBox title="Isp" info={props.isp || 'Invalid Ip'} />
      </div>
   );
};

export default Info;
