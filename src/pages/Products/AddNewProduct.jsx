import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import './Products.css'

const AddNewProduct = () => {
  return (
    <div className='AddProduct-Page'>
      <div className="add-page-header">
        <h4>Add New Product</h4>
        <p style={{display: 'flex' }}>Dashboard <MdArrowRight size={20}/><span>add new product</span></p>
      </div>
        <div className="main-page">
          <div className="product-details">
            <h4>Product Details</h4>
            <form action="">
              <label htmlFor="">Title</label>
              <input type="text" placeholder='write product title' />
              <label htmlFor="">Short Description</label>
              <textarea name="" id="" placeholder='write short product description'></textarea>
              <label htmlFor="">Full Description</label>
              <textarea name="" id="" placeholder='write full product description'></textarea>
              <label htmlFor="">Product Image</label>
              <input className='product-img' type="file" accept='image/jpeg' />
            </form>
          </div>
          <div className="right">
            <div className="properties">
              <h4>Properties</h4>
              <form action="">
                <div className="flex">
                  <div className="left-flex">
                      <label htmlFor="">Code</label>
                      <input type="text" placeholder='input product code...'/>
                      <label htmlFor="">Quantity</label>
                      <input type="number" placeholder='Enter product code'/>
                  </div>
                  <div className="right-flex">
                      <label htmlFor="">SKU</label>
                      <input type="text" placeholder='Enter product sku...'/>
                      <label htmlFor="">Categories</label>
                      <input type="text"  placeholder='Choose product categories'/>
                  </div>
              </div>
                  <label htmlFor="">Tags</label>
                  <input className='tag' type="text" placeholder='Enter product tags...'/>
              </form>
            </div>
            <div className="seo">
              <h4>SEO</h4>
              <form>
                <div className="flex">
                  <div className="flex-left">
                      <label htmlFor="">Meta Tittle</label>
                      <input type="text" placeholder='Write meta title...'/>
                  </div>
                  <div className="flex-right">
                      <label htmlFor="">Meta Key-word</label>
                      <input type="text" placeholder='Enter meta keyword...' />
                  </div>
                </div>
                  <label htmlFor="">Meta Description</label>
                  <textarea name="" id="" placeholder='Write meta description'></textarea>
              </form>
            </div>
            <div className="pricing">
              <h4>Pricing</h4>
              <form>
                <div className="flex">
                  <div className="left-flex">
                    <label htmlFor="">Regular Price</label>
                    <input type="number" placeholder='$0.00'/>
                    <label htmlFor="">Tax</label>
                    <input type="number" name="" id="" placeholder='$0.00'/>
                  </div>
             
                <div className="right-flex">
                  <label htmlFor="">Sale Price</label>
                  <input type="number" placeholder='$0.00'/>
                  <label htmlFor="">Shipping Fee</label>
                  <input type="number" placeholder='$0.00'/>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddNewProduct
