(function () {
  var headerSlot = document.querySelector("[data-site-header]");

  if (!headerSlot) {
    return;
  }

  var currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
  var propertiesPages = ["sale.html", "sale-2025-09-05.html", "lease.html", "close.html"];
  var activePage = currentPage === "aboutus-25.html" ? "about.html" : currentPage;
  var homeActive = activePage === "index.html";
  var aboutActive = activePage === "about.html";
  var propertiesActive = propertiesPages.indexOf(activePage) !== -1;
  var servicesActive = activePage === "services.html";
  var contactActive = activePage === "contact.html";

  headerSlot.outerHTML = `
    <div class="site-header">
      <div class="py-1 bg-primary site-contact-bar">
        <div class="container">
          <div class="row no-gutters d-flex align-items-center px-md-0">
            <div class="col-md pr-4 d-flex topper align-items-center">
              <span class="icon mr-2 d-flex justify-content-center align-items-center" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" focusable="false"><path d="M6.6 2.8 9.3 2.2l2 4.8-2.1 1.5a15 15 0 0 0 6.3 6.3l1.5-2.1 4.8 2-.6 2.7a3 3 0 0 1-3.3 2.3A18.5 18.5 0 0 1 4.3 6.1a3 3 0 0 1 2.3-3.3Z"/></svg></span>
              <a class="text" href="tel:+12144557623">+1 214-455-7623</a>
            </div>
            <div class="col-md pr-4 d-flex topper align-items-center">
              <span class="icon mr-2 d-flex justify-content-center align-items-center" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" focusable="false"><path d="M3 5.5h18v13H3z"/><path d="m3.5 6 8.5 7 8.5-7"/></svg></span>
              <a class="text" href="mailto:venkat@land-star.us">venkat@land-star.us</a>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html" aria-label="Land-Star home">
            <img src="Images/logo.png" alt="">
            <span>Land-Star<small>Land &amp; real estate</small></span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <svg class="ui-icon menu-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 6h16M4 12h16M4 18h16"/></svg> Menu
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item${homeActive ? " active" : ""}"><a href="index.html" class="nav-link"${homeActive ? ' aria-current="page"' : ""}>Home</a></li>
              <li class="nav-item${aboutActive ? " active" : ""}"><a href="about.html" class="nav-link"${aboutActive ? ' aria-current="page"' : ""}>About</a></li>
              <li class="nav-item dropdown${propertiesActive ? " active" : ""}">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"${propertiesActive ? ' aria-current="page"' : ""}>Properties</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="sale.html">Sale</a>
                  <a class="dropdown-item" href="lease.html">Lease</a>
                  <a class="dropdown-item" href="close.html">Closed Properties</a>
                </div>
              </li>
              <li class="nav-item${servicesActive ? " active" : ""}"><a href="services.html" class="nav-link"${servicesActive ? ' aria-current="page"' : ""}>Our Services</a></li>
              <li class="nav-item${contactActive ? " active" : ""}"><a href="contact.html" class="nav-link"${contactActive ? ' aria-current="page"' : ""}>Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `;
}());
