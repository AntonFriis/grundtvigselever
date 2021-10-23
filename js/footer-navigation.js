class FooterNavigation extends HTMLElement {

    connectedCallback() {
            this.render();
        }

    render() {
        this.innerHTML = `
        <div class="space"></div>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h4 class="white-text">Grundtvigselever</h4>
              </div>
              <div class="col l4 offset-l2 s12">
                <h6 class="white-text">Hjælp</h6>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="help.html">Ofte stillede spørgsmål</a></li>
                  <h6>Kontakt</h6>
                    <li><a class="grey-text text-lighten-3" href="about_us.html">Om os</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright footer-color">
                <div class="container">
                © 2021 Bestyrelsen for Grundtvigselever
                <a class="grey-text text-lighten-4 right" href="#top">Tilbage til toppen</a>
                </div>
          </div>
        </footer>`;
    }
}

$(document).ready(function(){
  $('.sidenav').sidenav();
});

customElements.define("nav-footer", FooterNavigation);