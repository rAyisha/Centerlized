import './index.scss'
import { Image } from 'primereact/image';

const EmptyTableIcon=()=>{
    return(
        <div className="nodatafound_container">
      <Image
        src="https://i.ibb.co/PCwDgVr/Group-1000013951-1.pngg"
        alt="Image"
        width="162px"
      />
      <div>No Data Available</div>
    </div>
    )
}
export default EmptyTableIcon;