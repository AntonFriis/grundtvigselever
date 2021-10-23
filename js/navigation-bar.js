class NavBar extends HTMLElement {
    connectedCallback() {
            this.render();
        }

    render() {
        this.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="../css/NavStyle.css">
        <nav>
            <div class="nav-wrapper header-color">
                <ul class="left hide-on-med-and-down">
                    <li><a href="../html/FrontPage.html"><img src="../Assets/Logo%20SVG%20.svg" alt="" class="icon logoText"/></a></li>
                    <li><a href="../html/FrontPage.html"><h2 class="logo">Grundtvigselever</h2></li>
                </ul>
                <ul class="left hide-on-med-and-down">
                    <li><a href="../html/FrontPage.html">Aktiviteter</a></li>
                    <li><a href="../html/FrontPage.html">Legatpulje</a></li>
                    <li><a href="../html/FrontPage.html">Årsskrift</a></li>
                    <li><a href="../html/FrontPage.html">Om os</a></li>
                    <li><a href="../html/FrontPage.html">Medlemskab</a></li>
                    <li><a href="../html/FrontPage.html">Kontakt</a></li>
                </ul>
            </div>
        </nav>
        <ul class="sidenav" id="burger-menu">
            <li><a href="../html/FrontPage.html">Log ud</a></li>
        </ul>`;
    }
}

$(document).ready(function(){
    $('.sidenav').sidenav();
});

customElements.define("nav-bar", NavBar);