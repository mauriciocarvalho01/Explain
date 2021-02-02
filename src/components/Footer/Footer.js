

export default function Footer(props) {
  return (
    <footer class="footer">
    <div className="container-fluid">
      <nav class="float-left">
        <ul>
          <li>
            <a href="https://www.creative-tim.com">
              Explain Co. 
            </a>
          </li>
          <li>
            <a href="https://creative-tim.com/presentation">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="http://blog.creative-tim.com">
              Blog
            </a>
          </li>
          <li>
            <a href="https://www.creative-tim.com/license">
              Licenças
            </a>
          </li>
        </ul>
      </nav>
      <div className="copyright float-right">
        &copy;
        <script>
          document.write(new Date().getFullYear())
        </script>, Feito com <i class="material-icons">favorite</i> by
        <a href="https://www.creative-tim.com" target="_blank"> Explain</a> uma forma inteligente de gerar informação. 
      </div> 
    </div>
  </footer>
  );
}
