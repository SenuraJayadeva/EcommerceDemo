import React from "react";
import { Link } from "react-router-dom";

import "./categoryaccordion.css";

export default function CategoryaccordionComponent() {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Eletronics
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul className="categotyUL">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Power Banks</Link>
                </li>
                <li>
                  <Link>SD Card</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Fashion & Beauty
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Power Banks</Link>
                </li>
                <li>
                  <Link>SD Card</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accessories
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Power Banks</Link>
                </li>
                <li>
                  <Link>SD Card</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Services
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Power Banks</Link>
                </li>
                <li>
                  <Link>SD Card</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              University
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {" "}
              <ul className="categotyUL">
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Laptop</Link>
                </li>
                <li>
                  <Link>Power Banks</Link>
                </li>
                <li>
                  <Link>SD Card</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
