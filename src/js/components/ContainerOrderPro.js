import React, {Fragment} from 'react';
import Navbar from './Navbar';
import TitleHead from './TitleHead';
import ListOrdenProcess from './ListOrdenProcess';


const ContainerOrderPro = ({ordenes}) => {
  return ( 
    <Fragment>
      <Navbar />
      <main>
        <TitleHead />
        <ListOrdenProcess ordenes={ordenes}/>
      </main>
    </Fragment>
   );
}
 
export default ContainerOrderPro;