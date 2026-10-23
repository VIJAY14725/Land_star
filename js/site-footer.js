(function () {
  var footerSlot = document.querySelector("[data-site-footer]");

  if (!footerSlot) {
    return;
  }

  footerSlot.outerHTML = `
    <footer class="ftco-footer ftco-section bg-light">
      <div class="container">
        <div class="row">
          <div class="mouse">
            <a href="#" class="mouse-icon" aria-label="Back to top">
              <div class="mouse-wheel back-to-top-icon" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" focusable="false"><path d="m6 14 6-6 6 6"/></svg></div>
            </a>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">LAND-STAR</h2>
              <p>At Land Star Real Estate, we understand that each client is unique, with specific goals and preferences.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="https://linkedin.com/company/land-star1/" target="_blank" rel="noopener noreferrer" aria-label="Land-Star on LinkedIn"><svg class="ui-icon social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 9v10M5 5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 10v9"/></svg></a></li>
                <li class="ftco-animate"><a href="https://www.facebook.com/TexasLands" target="_blank" rel="noopener noreferrer" aria-label="Land-Star on Facebook"><svg class="ui-icon social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5c-.8-.1-1.8-.2-3-.2-3 0-5 1.8-5 5V9H7v4h3v8z"/></svg></a></li>
                <li class="ftco-animate"><a href="#" aria-label="Instagram"><svg class="ui-icon social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Explore</h2>
              <div class="d-flex">
                <ul class="list-unstyled mr-4">
                  <li><a href="sale.html" class="py-2 d-block">Investment Sales</a></li>
                  <li><a href="lease.html" class="py-2 d-block">Investment Leasing</a></li>
                  <li><a href="close.html" class="py-2 d-block">Closed Properties</a></li>
                  <li><a href="services.html" class="py-2 d-block">Services</a></li>
                </ul>
                <ul class="list-unstyled">
                  <li><a href="index.html" class="py-2 d-block">Home</a></li>
                  <li><a href="about.html" class="py-2 d-block">About</a></li>
                  <li><a href="contact.html" class="py-2 d-block">Contact</a></li>
                  <li><a href="terms-and-conditions.html" class="py-2 d-block">Terms</a></li>
                  <li><a href="privacy-policy.html" class="py-2 d-block">Privacy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Have a Question?</h2>
              <div class="block-23 mb-3">
                <ul>
                  <li><span class="contact-icon" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" focusable="false"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span class="text">5 Cowboys Way, Ste #300, Frisco, TX 75034</span></li>
                  <li><a href="tel:+12144557623"><span class="contact-icon" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" focusable="false"><path d="M6.6 2.8 9.3 2.2l2 4.8-2.1 1.5a15 15 0 0 0 6.3 6.3l1.5-2.1 4.8 2-.6 2.7a3 3 0 0 1-3.3 2.3A18.5 18.5 0 0 1 4.3 6.1a3 3 0 0 1 2.3-3.3Z"/></svg></span><span class="text">+1 214-455-7623</span></a></li>
                  <li><a href="mailto:venkat@land-star.us"><span class="contact-icon" aria-hidden="true"><svg class="ui-icon" viewBox="0 0 24 24" focusable="false"><path d="M3 5.5h18v13H3z"/><path d="m3.5 6 8.5 7 8.5-7"/></svg></span><span class="text">venkat@land-star.us</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>LAND-STAR Copyright &copy;<span class="site-current-year"></span> All rights reserved | Designed with care by <a href="https://webslavery.com" target="_blank" rel="noopener noreferrer">webslavery</a></p>
          </div>
        </div>
      </div>
    </footer>
  `;

  var currentYear = document.querySelector(".site-current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
}());
