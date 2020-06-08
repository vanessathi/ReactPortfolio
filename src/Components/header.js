/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
      <div>
   <nav class="navbar navbar-expand-lg static-top mb-5 shadow">
    <div class="container">
      <a class="navbar-brand font-weight-light text-white" href="#">VP | PORTFOLIO PAGE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto font-weight-light font-italic text-white">
          <li class="nav-item active">
            <a class="nav-link" href="#">home
                  <span class="sr-only">(current)</span>
                </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/vaepham/">linkedin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/vanessathi">github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://pdfhost.io/v/..6Dz2FIw_Microsoft_Word_Resume2020docx.pdf">resume</a>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
      </div>
  
    )
  }