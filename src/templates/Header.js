const Header = () => {
  const view = `
      <div class="Header-main">
        <div class="Header-logo">
          <h1>
            <a href="#">
            <img src="../../src/img/Logo.svg" alt="">
            </a>
          </h1>
        </div>
        <div class="Header-nav">
          <a href="#/about/">
            About Us
          </a>
        </div>
      </div>    
      `
  return view;
};

export default Header;