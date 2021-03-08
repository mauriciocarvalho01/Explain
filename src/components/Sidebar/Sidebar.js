import Redirect from '../../utils/Redirect';
import { useState, useEffect } from 'react';
import LabelBottomNavigation from '../Navbars/BottomNavigation/BottomNavigation';
import Courses from '../Contents/ContentCourses/ContentCourses';



export default function Sidebar(props) {

  const [page, toPage] = useState("");
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const { local } = props;

  switch (page) {
    case 'dashboard':
      return <Redirect to="/dashboard" />
      break;
    case 'profile':
      return <Redirect to="/perfil" />
      break;
    case 'sincronizar':
      return <Redirect to="/sincronizar" />
      break;
    default:
      <Redirect to="/login" />
  }




  return (
    <div className="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <div className="logo"><a onClick={() => toPage("dashboard")} class="simple-text logo-normal">
        Expl.AI.n
    </a></div>
      <div className="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item active" onClick={() => local !== 'dashboard' ? toPage("dashboard") : false}>
            <a class="nav-link">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item" onClick={() => local !== 'profile' ? toPage("profile") : false}>
            <a class="nav-link">
              <i class="material-icons">person</i>
              <p>Perfil</p>
            </a>
          </li>
          <li class="nav-item " onClick={() => local !== 'sincronizar' ? toPage("sincronizar") : false}>
            <a class="nav-link">
              <i class="material-icons">sync</i>
              <p>Sincronizar</p>
            </a>
          </li>
          <li class="nav-item " onClick={() => setHandleOpen({ open: true })}>
            <a class="nav-link">
              <i class="material-icons">school</i>
              <p>Cursos</p>
            </a>
          </li>
          {open ? <Courses
            handleOpen={handleOpen}
            setHandleOpen={setHandleOpen} />
            : false}
          <li class="nav-item active-pro" align="center">
            <a className="nav-link" align="center">
              <LabelBottomNavigation />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}