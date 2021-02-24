import Navbar from '../Navbars/Navbar';
import ContentDashboard from '../Contents/ContentDashboard/ContentDashboard';
import ContentProfile from '../Contents/ContentProfile/ContentProfile';
import SincTable from '../Contents/SincTable/SincTable';
import Footer from '../Footer/Footer';




export default function MainPanel(props) {

  const { user, message } = props;
 
  return (
    <div className="main-panel">
      <Navbar
        message = {message}
        user = {user}
      />
      {props.local === 'dashboard' && <ContentDashboard />}
      {props.local === 'profile' && <ContentProfile 
      user = {user}/>}
      {props.local === 'classroom' && <SincTable
      user={user}
      />}
      <Footer />
    </div>
  );
}