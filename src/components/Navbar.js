import React from "react";

export default function Navbar(props) {
  return (
    <nav
      class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          {props.title}
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a class='nav-link active' aria-current='page' href='#'>
                {props.home}
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                {props.about}
              </a>
            </li>
          </ul>
          <div
            class={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              class='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              onClick={props.toggleMode}
            />
            <label class='form-check-label' for='flexSwitchCheckDefault'>
              Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
