import React, { component } from "react";
import "./carousel";
import "./carousel.css";

class Page extends React.Component {
  render() {
    return (
      <div>
        <div class="gallery">
          <div class="gallery-container">
            <img
              class="gallery-item gallery-item-1"
              src="https://images.unsplash.com/photo-1617349035633-952a8907bdb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              data-index="1"
            />
            <img
              class="gallery-item gallery-item-2"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
              data-index="2"
            />

            <img
              class="gallery-item gallery-item-3"
              src="https://tinyurl.com/3d8babnu"
              data-index="3"
            />
            <h1>Hello</h1>

            <img
              class="gallery-item gallery-item-4"
              src="https://images.unsplash.com/photo-1531547255897-f400dc1b7de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              data-index="4"
            />
            <img
              class="gallery-item gallery-item-5"
              src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              data-index="5"
            />
          </div>
          <div class="gallery-controls"></div>
        </div>
      </div>
    );
  }
}

export default Page;
