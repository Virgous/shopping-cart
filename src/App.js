import './App.css';

function App() {
  return (
    <div className="App">

      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">Shopping cart</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">

          <div class="row">
            <main class="col-md-9">
              <div class="card">

                <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">Quantity</th>
                      <th scope="col" width="120">Price</th>
                      <th scope="col" class="text-right" width="200"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside"><img src="assets/images/items/1.jpg" class="img-sm" /></div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">Some name of item goes here nice</a>
                            <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                            <a href="" class="btn btn-light btn-round btn-sm"> REMOVE ITEM</a>
                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2 btn-sm" data-toggle="tooltip"> <i class="fa fa-heart"> MOVE TO WISH LIST</i></a>

                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                        {/* <div class="col-lg-2">
                          <div class="input-group">
                            <span class="input-group-btn">
                              <button type="button" class="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field="">
                                -
                              </button>
                            </span>
                            <input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100"></input>
                              <span class="input-group-btn">
                                <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                  +
                                </button>
                              </span>
                          </div>
                        </div> */}

                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$1156.00</var>
                          <small class="text-muted"> $315.20 each </small>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside"><img src="assets/images/items/2.jpg" class="img-sm" /></div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">Product name  goes here nice</a>
                            <p class="text-muted small">Size: XL, Color: blue, <br /> Brand: Gucci</p>
                            <a href="" class="btn btn-light btn-round btn-sm"> REMOVE ITEM</a>
                            <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2 btn-sm" data-toggle="tooltip"> <i class="fa fa-heart"> MOVE TO WISH LIST</i></a>

                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$149.97</var>
                          <small class="text-muted"> $75.00 each </small>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </main>
            <aside class="col-md-3">
              <div class="card">
                <div class="card-body">
                  <dl class="dlist-align">
                    <dt>Total price:</dt>
                    <dd class="text-right">USD 568</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Discount:</dt>
                    <dd class="text-right">USD 658</dd>
                  </dl>
                  <dl class="dlist-align">
                    <dt>Total:</dt>
                    <dd class="text-right  h5"><strong>$1,650</strong></dd>
                  </dl>
                  <hr />
                  <p class="text-center mb-3">
                    <img src="assets/images/misc/payments.png" height="26" />
                  </p>

                </div>
              </div>
              <div class="card mb-3">
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <label>Have coupon?</label>
                      <div class="input-group">
                        <input type="text" class="form-control" name="" placeholder="Coupon code" />
                        <span class="input-group-append">
                          <button class="btn btn-primary">Apply</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </aside>
          </div>

        </div>
      </section>


    </div>
  );
}

export default App;