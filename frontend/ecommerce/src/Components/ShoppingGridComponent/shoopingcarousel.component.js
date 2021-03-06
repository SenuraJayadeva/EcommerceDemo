import React from "react";

export default function ShoopingcarouselComponent() {
  return (
    <div>
      <div
        data-aos="fade-right"
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://blauberg.com/wp-content/uploads/2020/11/ecommerce.png"
              class="d-block w-100"
              alt="carousel1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://blauberg.com/wp-content/uploads/2020/11/ecommerce.png"
              class="d-block w-100"
              alt="carousel2"
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>
          <div class="carousel-item">
            <img
              src="https://blauberg.com/wp-content/uploads/2020/11/ecommerce.png"
              class="d-block w-100"
              alt="carousel3"
            />
            {/* <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div> */}
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}
