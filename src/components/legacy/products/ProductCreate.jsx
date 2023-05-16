import React from "react";
import { useForm } from "react-hook-form";
import {
  withRouter
} from 'react-router-dom'


export function ProductCreate({ addProduct, history }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      price: "",
      img: "",
      description: "",
    }
  })

  return <form onSubmit={handleSubmit((product) => {
    addProduct({ product });
    history.push('/');
  })} style={{ width: '100%' }}>
    <dl style={{ width: '100%' }}>
      <dt>Name</dt>
      <dd><input type="text" {...register('name')} /></dd>
      <dt>Price</dt>
      <dd><input type="number" {...register('price')} /></dd>
      <dt>Image</dt>
      <dd><input type="text" {...register('img')} /></dd>
      <dt>Description</dt>
      <dd>
        <textarea name="description" {...register('description')}></textarea>
      </dd>
    </dl>
    <input type="submit" value="Submit" />
  </form>;
}

export default withRouter(ProductCreate);
