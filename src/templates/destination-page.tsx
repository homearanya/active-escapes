import React from 'react'

const DestinationPage = () => (
  <>
    <section
      className="banner banner-inner parallax"
      data-stellar-background-ratio="0.5"
      id="list-view-detail"
    >
      <div className="banner-text">
        <div className="center-text">
          <div className="container">
            <h1>Adventures in Thailand</h1>
            <strong className="subtitle">
              The most detailed and modern Adventure theme!
            </strong>
            <nav className="breadcrumbs">
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">DESTINATION</a>
                </li>
                <li>
                  <a href="#">asia</a>
                </li>
                <li>
                  <span>THAILAND</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <div className="content-intro">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-9 text-holder">
            <h2 className="title-heading">
              Discover Thailand with Entrada guided Tours
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{' '}
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className="col-sm-4 col-md-3 map-col">
            <div className="holder">
              <div className="map-holder">
                <img
                  src="img/generic/map.png"
                  height="308"
                  width="168"
                  alt="image description"
                />
              </div>
              <div className="info">
                <div className="slot">
                  <strong>Best Season:</strong>
                  <span className="sub">Jan-Feb, Mar-Jun, Oct-Dec</span>
                </div>
                <div className="slot">
                  <strong>Popular Location:</strong>
                  <span className="sub">Phuket, Bangkok, Ching Mai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="content-block content-sub">
      <div className="container">
        <div className="filter-option">
          <strong className="result-info">
            179 TRIPS MATCHES YOUR SEARCH CRITERIA
          </strong>
          <div className="layout-holder">
            <div className="layout-action">
              <a href="#" className="link link-list active">
                <span className="icon-list"></span>
              </a>
              <a href="#" className="link link-grid">
                <span className="icon-grid"></span>
              </a>
            </div>
            <div className="select-holder">
              <a href="#" className="btn btn-primary btn-filter">
                <i className="fa fa-sliders"></i> Filter
              </a>
              <div className="filter-slide">
                <div className="select-col">
                  <select className="filter-select">
                    <option value="Holiday Type">Holiday Type</option>
                    <option value="Holiday Type">Beach Holidays</option>
                    <option value="Holiday Type">Weekend Trips</option>
                    <option value="Holiday Type">Summer and Sun</option>
                    <option value="Holiday Type">Water Sports</option>
                    <option value="Holiday Type">Scuba Diving</option>
                  </select>
                </div>
                <div className="select-col">
                  <select className="filter-select">
                    <option value="Difficulty">Difficulty</option>
                    <option value="Difficulty">Fairly Easy</option>
                    <option value="Difficulty">Moderate</option>
                    <option value="Difficulty">Challenging</option>
                    <option value="Difficulty">Difficult</option>
                    <option value="Difficulty">Very Difficult</option>
                  </select>
                </div>
                <div className="select-col">
                  <select className="filter-select">
                    <option value="Price Range">Price Range</option>
                    <option value="Price Range">$1 - $499</option>
                    <option value="Price Range">$500 - $999</option>
                    <option value="Price Range">$1000 - $1499</option>
                    <option value="Price Range">$1500 - $2999</option>
                    <option value="Price Range">$3000+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-holder list-view">
          <article className="article has-hover-s1">
            <div className="thumbnail">
              <div className="img-wrap">
                <img
                  src="img/listing/img-35.jpg"
                  height="240"
                  width="350"
                  alt="image description"
                />
              </div>
              <div className="description">
                <div className="col-left">
                  <header className="heading">
                    <h3>
                      <a href="#">Beach &amp; Resort Holiday in Thailand</a>
                    </h3>
                    <div className="info-day">17 Days</div>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                  <div className="reviews-holder">
                    <div className="star-rating">
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span className="disable">
                        <span className="icon-star"></span>
                      </span>
                    </div>
                    <div className="info-rate">Based on 75 Reviews</div>
                  </div>
                  <footer className="info-footer">
                    <ul className="ico-list">
                      <li className="pop-opener">
                        <span className="icon-beach"></span>
                        <div className="popup">Beach</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-boat"></span>
                        <div className="popup">Boat</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-food-wine"></span>
                        <div className="popup">Food Wine</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-water"></span>
                        <div className="popup">Water</div>
                      </li>
                    </ul>
                    <ul className="ico-action">
                      <li>
                        <a href="#">
                          <span className="icon-share"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-favs"></span>
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
                <aside className="info-aside">
                  <span className="price">
                    from <span>$2749</span>
                  </span>
                  <div className="activity-level">
                    <div className="ico">
                      <span className="icon-level2"></span>
                    </div>
                    <span className="text">EASY - LEISURLY</span>
                  </div>
                  <a href="#" className="btn btn-default">
                    explore
                  </a>
                </aside>
              </div>
            </div>
          </article>
          <article className="article has-hover-s1">
            <div className="thumbnail">
              <div className="img-wrap">
                <img
                  src="img/listing/img-36.jpg"
                  height="240"
                  width="350"
                  alt="image description"
                />
              </div>
              <div className="description">
                <div className="col-left">
                  <header className="heading">
                    <h3>
                      <a href="#">Beach &amp; Resort Holiday in Thailand</a>
                    </h3>
                    <div className="info-day">17 Days</div>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                  <div className="reviews-holder">
                    <div className="star-rating">
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span className="disable">
                        <span className="icon-star"></span>
                      </span>
                    </div>
                    <div className="info-rate">Based on 75 Reviews</div>
                  </div>
                  <footer className="info-footer">
                    <ul className="ico-list">
                      <li className="pop-opener">
                        <span className="icon-beach"></span>
                        <div className="popup">Beach</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-boat"></span>
                        <div className="popup">Boat</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-food-wine"></span>
                        <div className="popup">Food Wine</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-water"></span>
                        <div className="popup">Water</div>
                      </li>
                    </ul>
                    <ul className="ico-action">
                      <li>
                        <a href="#">
                          <span className="icon-share"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-favs"></span>
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
                <aside className="info-aside">
                  <span className="price">
                    from <span>$2749</span>
                  </span>
                  <div className="activity-level">
                    <div className="ico">
                      <span className="icon-level4"></span>
                    </div>
                    <span className="text">EASY - LEISURLY</span>
                  </div>
                  <a href="#" className="btn btn-default">
                    explore
                  </a>
                </aside>
              </div>
            </div>
          </article>
          <article className="article has-hover-s1">
            <div className="thumbnail">
              <div className="img-wrap">
                <img
                  src="img/listing/img-37.jpg"
                  height="240"
                  width="350"
                  alt="image description"
                />
              </div>
              <div className="description">
                <div className="col-left">
                  <header className="heading">
                    <h3>
                      <a href="#">Beach &amp; Resort Holiday in Thailand</a>
                    </h3>
                    <div className="info-day">17 Days</div>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                  <div className="reviews-holder">
                    <div className="star-rating">
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span className="disable">
                        <span className="icon-star"></span>
                      </span>
                    </div>
                    <div className="info-rate">Based on 75 Reviews</div>
                  </div>
                  <footer className="info-footer">
                    <ul className="ico-list">
                      <li className="pop-opener">
                        <span className="icon-beach"></span>
                        <div className="popup">Beach</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-boat"></span>
                        <div className="popup">Boat</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-food-wine"></span>
                        <div className="popup">Food Wine</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-water"></span>
                        <div className="popup">Water</div>
                      </li>
                    </ul>
                    <ul className="ico-action">
                      <li>
                        <a href="#">
                          <span className="icon-share"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-favs"></span>
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
                <aside className="info-aside">
                  <span className="price">
                    from <span>$2749</span>
                  </span>
                  <div className="activity-level">
                    <div className="ico">
                      <span className="icon-level5"></span>
                    </div>
                    <span className="text">EASY - LEISURLY</span>
                  </div>
                  <a href="#" className="btn btn-default">
                    explore
                  </a>
                </aside>
              </div>
            </div>
          </article>
          <article className="article has-hover-s1">
            <div className="thumbnail">
              <div className="img-wrap">
                <img
                  src="img/listing/img-38.jpg"
                  height="240"
                  width="350"
                  alt="image description"
                />
              </div>
              <div className="description">
                <div className="col-left">
                  <header className="heading">
                    <h3>
                      <a href="#">Beach &amp; Resort Holiday in Thailand</a>
                    </h3>
                    <div className="info-day">17 Days</div>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                  <div className="reviews-holder">
                    <div className="star-rating">
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span className="disable">
                        <span className="icon-star"></span>
                      </span>
                    </div>
                    <div className="info-rate">Based on 75 Reviews</div>
                  </div>
                  <footer className="info-footer">
                    <ul className="ico-list">
                      <li className="pop-opener">
                        <span className="icon-beach"></span>
                        <div className="popup">Beach</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-boat"></span>
                        <div className="popup">Boat</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-food-wine"></span>
                        <div className="popup">Food Wine</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-water"></span>
                        <div className="popup">Water</div>
                      </li>
                    </ul>
                    <ul className="ico-action">
                      <li>
                        <a href="#">
                          <span className="icon-share"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-favs"></span>
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
                <aside className="info-aside">
                  <span className="price">
                    from <span>$2749</span>
                  </span>
                  <div className="activity-level">
                    <div className="ico">
                      <span className="icon-level7"></span>
                    </div>
                    <span className="text">EASY - LEISURLY</span>
                  </div>
                  <a href="#" className="btn btn-default">
                    explore
                  </a>
                </aside>
              </div>
            </div>
          </article>
          <article className="article has-hover-s1">
            <div className="thumbnail">
              <div className="img-wrap">
                <img
                  src="img/listing/img-39.jpg"
                  height="240"
                  width="350"
                  alt="image description"
                />
              </div>
              <div className="description">
                <div className="col-left">
                  <header className="heading">
                    <h3>
                      <a href="#">Beach &amp; Resort Holiday in Thailand</a>
                    </h3>
                    <div className="info-day">17 Days</div>
                  </header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  </p>
                  <div className="reviews-holder">
                    <div className="star-rating">
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span>
                        <span className="icon-star"></span>
                      </span>
                      <span className="disable">
                        <span className="icon-star"></span>
                      </span>
                    </div>
                    <div className="info-rate">Based on 75 Reviews</div>
                  </div>
                  <footer className="info-footer">
                    <ul className="ico-list">
                      <li className="pop-opener">
                        <span className="icon-beach"></span>
                        <div className="popup">Beach</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-boat"></span>
                        <div className="popup">Boat</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-food-wine"></span>
                        <div className="popup">Food Wine</div>
                      </li>
                      <li className="pop-opener">
                        <span className="icon-water"></span>
                        <div className="popup">Water</div>
                      </li>
                    </ul>
                    <ul className="ico-action">
                      <li>
                        <a href="#">
                          <span className="icon-share"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-favs"></span>
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
                <aside className="info-aside">
                  <span className="price">
                    from <span>$2749</span>
                  </span>
                  <div className="activity-level">
                    <div className="ico">
                      <span className="icon-level8"></span>
                    </div>
                    <span className="text">EASY - LEISURLY</span>
                  </div>
                  <a href="#" className="btn btn-default">
                    explore
                  </a>
                </aside>
              </div>
            </div>
          </article>
        </div>
        <nav className="pagination-wrap">
          <div className="btn-prev">
            <a href="#" aria-label="Previous">
              <span className="icon-angle-right"></span>
            </a>
          </div>
          <ul className="pagination">
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="active">
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>...</li>
            <li>
              <a href="#">7</a>
            </li>
          </ul>
          <div className="btn-next">
            <a href="#" aria-label="Previous">
              <span className="icon-angle-right"></span>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <aside className="recent-block recent-list recent-wide-thumbnail">
      <div className="container">
        <h2 className="text-center text-uppercase">RECENTLY VIEWED</h2>
        <div className="row">
          <article className="col-sm-6 col-md-3 article">
            <div className="thumbnail">
              <h3 className="no-space">
                <a href="#">Everest Basecamp Trek</a>
              </h3>
              <strong className="info-title">Everest Region, Nepal</strong>
              <div className="img-wrap">
                <img
                  src="img/listing/img-31.jpg"
                  height="210"
                  width="250"
                  alt="image description"
                />
              </div>
              <footer>
                <div className="sub-info">
                  <span>5 Days</span>
                  <span>$299</span>
                </div>
                <ul className="ico-list">
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-hiking"></span>
                      <span className="popup">Hiking</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-mountain"></span>
                      <span className="popup">Mountain</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-level5"></span>
                      <span className="popup">Level 5</span>
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </article>
          <article className="col-sm-6 col-md-3 article">
            <div className="thumbnail">
              <h3 className="no-space">
                <a href="#">Everest Basecamp Trek</a>
              </h3>
              <strong className="info-title">Everest Region, Nepal</strong>
              <div className="img-wrap">
                <img
                  src="img/listing/img-32.jpg"
                  height="210"
                  width="250"
                  alt="image description"
                />
              </div>
              <footer>
                <div className="sub-info">
                  <span>5 Days</span>
                  <span>$299</span>
                </div>
                <ul className="ico-list">
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-hiking"></span>
                      <span className="popup">Hiking</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-mountain"></span>
                      <span className="popup">Mountain</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-level5"></span>
                      <span className="popup">Level 5</span>
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </article>
          <article className="col-sm-6 col-md-3 article">
            <div className="thumbnail">
              <h3 className="no-space">
                <a href="#">Everest Basecamp Trek</a>
              </h3>
              <strong className="info-title">Everest Region, Nepal</strong>
              <div className="img-wrap">
                <img
                  src="img/listing/img-33.jpg"
                  height="210"
                  width="250"
                  alt="image description"
                />
              </div>
              <footer>
                <div className="sub-info">
                  <span>5 Days</span>
                  <span>$299</span>
                </div>
                <ul className="ico-list">
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-hiking"></span>
                      <span className="popup">Hiking</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-mountain"></span>
                      <span className="popup">Mountain</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-level5"></span>
                      <span className="popup">Level 5</span>
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </article>
          <article className="col-sm-6 col-md-3 article">
            <div className="thumbnail">
              <h3 className="no-space">
                <a href="#">Everest Basecamp Trek</a>
              </h3>
              <strong className="info-title">Everest Region, Nepal</strong>
              <div className="img-wrap">
                <img
                  src="img/listing/img-34.jpg"
                  height="210"
                  width="250"
                  alt="image description"
                />
              </div>
              <footer>
                <div className="sub-info">
                  <span>5 Days</span>
                  <span>$299</span>
                </div>
                <ul className="ico-list">
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-hiking"></span>
                      <span className="popup">Hiking</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-mountain"></span>
                      <span className="popup">Mountain</span>
                    </a>
                  </li>
                  <li className="pop-opener">
                    <a href="#">
                      <span className="icon-level5"></span>
                      <span className="popup">Level 5</span>
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </aside>
  </>
)

export default DestinationPage
