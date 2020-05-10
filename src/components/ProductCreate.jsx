import React from "react";

const ProductShow = () => {
  return <div class="card container" style={{ "border-width": "5px", "border-style": "solid" }}>
    <form>
      <dl>
        <dt>Name</dt>
        <dd><input type="text" name="name" /></dd>
        <dt>Image</dt>
        <dd>
          <img src={""} style={{ width: '400px' }} />
        </dd>
        <dt>Description</dt>
        <dd>
          <textarea name="description"></textarea>
        </dd>

      </dl>
      <input type="submit" value="Submit" />
    </form>


  </div>;
}

export default ProductShow;
