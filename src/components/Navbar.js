import React from 'react';





const Navbar =() => {

    return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">SINIT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="nav navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link"> <h4> Home</h4> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" ><h4>About</h4></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"> <h4>Pages</h4></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><h4>Contacts</h4></a>
      </li>
   </ul>
  </div>
</nav>
    );
}


export default Navbar