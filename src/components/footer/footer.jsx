import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        <div class="tooltip-container">
          <div class="text">
            <a class="iconsocials" href="">
              <div class="linkedin">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="linkedinSVG">
                  <svg viewBox="0 0 448 512" height="1em">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </span>
              </div>
              <div class="text litxt">LinkedIn</div>
            </a>
          </div>
        </div>
        <div class="tooltip-container">
          <div class="text">
            <a class="iconsocials" href="">
              <div class="github">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="githubSVG">
                  <svg
                    class="w-5"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="text gitxt">Github</div>
            </a>
          </div>
        </div>
        <div class="tooltip-container">
          <div class="text">
            <a class="iconsocials" href="#">
              <div class="gmail">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="gmailSVG">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                    <path
                      fill="#4285f4"
                      d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                    />
                    <path
                      fill="#34a853"
                      d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                    />
                    <path
                      fill="#fbbc04"
                      d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                    />
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                    <path
                      fill="#c5221f"
                      d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                    />
                  </svg>
                </span>
              </div>
              <div class="text gmailtxt">Gmail</div>
            </a>
          </div>
        </div>
        <div class="tooltip-container">
          <div class="text">
            <a class="iconsocials" href="#">
              <div class="whatsapp">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="whatsappSVG">
                  <svg viewBox="0 0 32 32" class="whatsapp-ico">
                    <path
                      d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="text whatsapptxt">Whatsapp</div>
            </a>
          </div>
        </div>
        <div class="tooltip-container">
          <div class="text">
            <a class="iconsocials" href="#">
              <div class="discord">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="discordSVG">
                  <svg
                    viewBox="0 0 16 16"
                    class="bi bi-discord"
                    height="23"
                    width="23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                  </svg>
                </span>
              </div>
              <div class="text discordtxt">Discord</div>
            </a>
          </div>
        </div>
        <div class="tooltip-container">
          <div class="text">
            <a class="iconsocials" href="#">
              <div class="facebook">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span class="facebookSVG">
                  <svg
                    viewBox="0 0 40 40"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                      y2="407.5726"
                      y1="406.6018"
                      x2="-277.375"
                      x1="-277.375"
                      id="a"
                    >
                      <stop stop-color="#0062e0" offset="0"></stop>
                      <stop stop-color="#19afff" offset="1"></stop>
                    </linearGradient>
                    <path
                      d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                      fill="url(#a)"
                    ></path>
                    <path
                      d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                      fill="#fff"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="text fbtxt">Facebook</div>
            </a>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
