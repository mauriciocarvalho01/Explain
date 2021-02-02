import Navbar from '../Navbars/Navbar';
import ContentDashboard from '../Contents/ContentDashboard/ContentDashboard';
import ContentProfile from '../Contents/ContentProfile/ContentProfile';
import Footer from '../Footer/Footer';




export default function MainPanel(props) {

  const { user } = props;

  return (
    <div className="main-panel">
      <Navbar
        user={user}
      />
      {props.local === 'dashboard' && <ContentDashboard />}
      {props.local === 'profile' && <ContentProfile 
      user = {user}/>}
      <Footer />
    </div>
  );
}