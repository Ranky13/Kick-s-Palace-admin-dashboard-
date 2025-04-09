<li className={`dropdown ${productsOpen ? 'open' : ''}`}>
                      <div className="dropdown-header" onClick={toggleProducts}>
                        <MdShoppingCart size={20} className="icon" />
                        <span>Products</span>
                        {productsOpen ? (
                          <MdArrowDropDown size={20} className="icon" /> ) :( 
                          <MdArrowRight size={20} className="icon" />)}
                      </div>
                      {productsOpen && (
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/products/list" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}>
                            <MdList size={18} className="icon" />
                            <span>Products List</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/grid" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}>
                            <MdGridOn size={18} className="icon" />
                            <span>Products Grid</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/products/add" className={({ isActive }) => `dropdown-link ${isActive ? 'active' : ''}`}>
                            <MdAdd size={18} className="icon" />
                            <span>Add New Product</span>
                          </NavLink>
                        </li>
                      </ul>
            )}
          </li>