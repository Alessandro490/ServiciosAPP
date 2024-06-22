import React from "react";
import "./Add.css";

const Add = () => {
    return (
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="sections">
            <div className="info">
              <label htmlFor="">Title</label>
              <input
                type="text"
                placeholder="Please type yor service title name here"
              />
              <label htmlFor="">Category</label>
              <select name="cats" id="cats">
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Data analyst</option>
                <option value="music">QA</option>
                <option value="music">Music</option>
                <option value="music">Gardener</option>
              </select>
              <label htmlFor="">Gigs Cover Image</label>
              <input type="file" />
              <label htmlFor="">Upload Images</label>
              <input type="file" multiple />
              <label htmlFor="">Description</label>
              <textarea name="" id="" placeholder="Brief description to introduce your service and qualities to customers " cols="0" rows="16"></textarea>
              <button>Create</button>
            </div>
            <div className="details">
              <label htmlFor="">Service Title</label>
              <input type="text" placeholder="Full stack web page" />
              <label htmlFor="">Short Description</label>
              <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
              <label htmlFor="">Delivery Time (e.g. 3 days)</label>
              <input type="number" />
              <label htmlFor="">Revision Number</label>
              <input type="number" />
              <label htmlFor="">Add Features</label>
              <input type="text" placeholder="Page design" />
              <input type="text" placeholder="Upload a file" />
              <input type="text" placeholder="Add some effects" />
              <label htmlFor="">Price</label>
              <input type="number" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Add;