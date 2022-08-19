import './styles.css';
import { CalendarOutlined } from '@ant-design/icons';


const Header = ({title="Calendar"}) => {
  return(
    <div className="app-header">
      <div className="app-header-left">
        <div className="app-header-logo">
        <CalendarOutlined  className='calendar-icon' />        
        </div>
        <div className="app-header-title">
          {title}
        </div>
      </div>
  </div>)
}


export default Header;