//import logo from './logo.svg';
//import './App.css';
import custsatisfaction from './customer-satisfaction.png'
import quality from './shield.png'
import values from './values.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const handleClick = (e, sectionId) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/61196420/react-navigation-that-will-smooth-scroll-to-section-of-the-page

    let element = document.getElementById(sectionId);
    element && element.scrollIntoView({ behavior: "smooth", block: "start"});
  };

  // https://nordicgiant2.github.io/react-nice-resume-page/index.html#about
  const spanStyle = {
    borderBottom: '2px solid #0762f9',
    paddingBottom: '6px',
    fontSize: '1.2rem',
  }

  const navStyle = {
    backgroundColor: '#fff',
  }

  return (
    <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style={navStyle}>
          <div class="container-fluid container">
            <a class="navbar-brand" href="">Hutomo Sugianto</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto me-auto- mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link text-body" aria-current="page" onClick={(e) => handleClick(e, "about")} href="#" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-body" onClick={(e) => handleClick(e, "education")} href="#">Education</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-body" onClick={(e) => handleClick(e, "experience")} href="#">Experience</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-body" onClick={(e) => handleClick(e, "skills")} href="#">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-body" onClick={(e) => handleClick(e, "portfolio")} href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-body" onClick={(e) => handleClick(e, "connect")} href="#">Connect</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container col-xxl-8 px-4 py-5" id="about">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
              <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">Motivated Software Engineer</h1>
              <p class="lead">
                Highly motivated software engineer with 7 years of professional experience. 
                Experienced in building IT team from scratch by creating technical and non-technical standards. 
                Migrating painful insurance paperworks into a computerized system resulting in increasing productivity of marketing team to generate more revenue.</p>
              <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" onClick={(e) => handleClick(e, "education")}>Explore More</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={(e) => handleClick(e, "connect")}>Connect</button>
              </div>
            </div>
          </div>
        </div>

        <div class="container col-xxl-8 px-4 py-5" id="education">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Education</span>
              </h4>
            </div>

            <div class="col-md-9">
              <h5>Universitas Indonesia</h5>
              <p>Bachelor of Engineering (Computer Engineering)</p>
              <span className="d-block">GPA 3.38 of 4.00</span>
              <span className="d-block">Graduated in July 2014</span>
            </div>
            
          </div>

          <div className="row mb-5"></div>

          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Certification</span>
              </h4>
            </div>

            <div class="col-md-9 pt-1">
              <h5>UX Indonesia (uxindo.com)</h5>
              <p>UX Essentials</p>
              <span className="d-block">Training Completed in January 2018</span>
            </div>
            
          </div>

        </div>

        <hr className="col-6 container" />

        <div class="container col-xxl-8 px-4 py-5" id="corevalues">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Core Values</span>
              </h4>
            </div>

            <div class="col-md-9">
              <div className="row">
                <div className="col-md-4">
                  <img src={quality} class="img-fluid p-5" alt="Commitment to Quality" />
                  <h5>Commitment to Quality</h5>
                  <p>We are not creating a perfect software, but we will do our best to deliver high quality code that can be used for a long-term period.</p>
                </div>

                <div className="col-md-4">
                  <img src={custsatisfaction} class="img-fluid p-5" alt="Customer Centric Approach" />
                  <h5>Customer Centric Approach</h5>
                  <p>Our strategy in developing software is to understand the needs, wants and pain points of the customer. We expect our target market can use our product to satisfy their need, want and pain.</p>
                </div>

                <div className="col-md-4">
                  <img src={values} class="img-fluid p-5" alt="Focus on Business Value" />
                  <h5>Focus on Business Value</h5>
                  <p>Priority management is very important in every business. We collaborate with product and business team to prioritize on projects and tasks that bring the maximum value for your business.</p>
                </div>
              </div>
            </div>
            
          </div>

        </div>

        <hr className="col-6 container" />

        {/* experience section */}
        <div class="container col-xxl-8 px-4 py-5" id="experience">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Experience</span>
              </h4>
            </div>

            
            <div class="col-md-9 pt-1">
              <h5>IT Manager</h5>
              
              <span className="d-block">Premiro.com (PT Mitra Ibisnis Terapan)</span>
              <span className="d-block">April 2020 - December 2021</span>
              <span className="d-block mb-3"></span>

              <ul class="icon-list">
                <li>Managing Product and Technology Team as A Scrum Master and Tech Lead</li>
                <li>Create printed Standard Operating Procedure for SDLC</li>
                <li>Improve communication both in Tech Team and outside of Tech Team</li>
                <li>Improve documentation standards for Technical Team and Product Specifications</li>
                <li>Mentoring for subordinates by regular 1-on-1 and code review</li>
              </ul>

              <div className="row mb-3"></div>

              <h5>Lead Web Developer</h5>
              <span className="d-block">Premiro.com (PT Mitra Ibisnis Terapan)</span>
              <span className="d-block">October 2017 - March 2021</span>
              <span className="d-block mb-3"></span>

              <ul class="icon-list">
                  <li>Migrate System from On Premise to Alibaba Cloud</li>
                  <li>Implementation of VT Snap with ReactJS, ExpressJS and GraphQL</li>
                  <li>Create Brute Force Handler for User Login Module</li>
                  <li>Developing a New Backend Platform using Slim 4 Framework and Stateless Architecture</li>
                  <li>Processing Bulk Transaction Using php7 and Redis Queue</li>
                  <li>Maintain Legacy System written in Codeigniter Framework</li>
              </ul>

              <div className="row mb-3"></div>

              <h5>Web Developer</h5>
              <span className="d-block">Cekaja.com (PT Puncak Finansial Utama)</span>
              <span className="d-block">April - September 2017</span>
              <span className="d-block mb-3"></span>

              <ul class="icon-list">
                  <li>Manage and Improve Partnership Project with MSIG Online (msigonline.co.id)</li>
                  <li>Manage and Improve Partnership Project with Premiro (premiro.com)</li>
              </ul>

              <div className="row mb-3"></div>

              <h5>Web Developer</h5>
              <span className="d-block">KUDO (PT Kudo Teknologi Indonesia)</span>
              <span className="d-block">December 2015 - April 2017</span>
              <span className="d-block mb-3"></span>

              <ul class="icon-list">
                  <li>Prepare the system architecture and tools for the project</li>
                  <li>Develop applications using Laravel PHP Framework and Wordpress</li>
                  <li>Implement better web and automation technologies (ReactJS, Grunt)</li>
              </ul>

              <div className="row mb-3"></div>

              <h5>Web Developer</h5>
              <span className="d-block">Detik.com (PT Agranet Multicitra Siberkom)</span>
              <span className="d-block">September 2014 - November 2015</span>
              <span className="d-block mb-3"></span>

              <ul class="icon-list">
                  <li>Developer team of SolusiUKM using Panada PHP Framework and PostgreSQL. SolusiUKM is a native ads platform of detik.com.</li>
                  <li>Operational and maintenance team of myTrans (VOD and livestreaming platform)</li>
              </ul>


            </div>
            
          </div>
        </div>

        <hr className="col-6 container" />

        <div class="container col-xxl-8 px-4 py-5" id="skills">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Skills</span>
              </h4>
            </div>

            <div class="col-md-9">

              <div className="row">
                  <div className="col-md-4 mb-4">
                    <div class="card">
                      <div class="card-body">
                        <h5 className="card-title">Programming Languages</h5>
                        <ul class="icon-list">
                          <li>JavaScript</li>
                          <li>PHP</li>
                          <li>Python</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                          <h5>Front End</h5>
                          <ul class="icon-list">
                            <li>ReactJS</li>
                            <li>Webpack</li>
                            <li>Bootstrap</li>
                          </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <h5>Query Language</h5>
                          <ul class="icon-list">
                            <li>GraphQL</li>
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                          <h5>Database Engines</h5>
                          <ul class="icon-list">
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Redis</li>
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                      <div class="card">
                        <div class="card-body">
                          <h5>Web Frameworks</h5>
                          <ul class="icon-list">
                            <li>Laravel</li>
                            <li>Slim</li>
                            <li>Django</li>
                            <li>ExpressJS</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  <div className="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                        <h5>Deployment</h5>
                        <ul class="icon-list">
                          <li>CentOS</li>
                          <li>Ubuntu</li>
                          <li>nginx</li>
                          <li>php-fpm</li>
                          <li>Ansible</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
            
          </div>
        </div>

        <hr className="col-6 container" />

        <div class="container col-xxl-8 px-4 py-5" id="portfolio">
          <div class="row g-5">
            
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Portfolio</span>
              </h4>
            </div>

            <div className="col-md-9">
                <h5>Premiro.com Web Platform</h5>
                
                <span className="d-block">Premiro.com has some platform services to support the business</span>
                <span className="d-block mb-3"></span>

                <ul class="icon-list">
                  <li>Premiro Web in <a href="https://www.premiro.com" target="_blank">https://www.premiro.com</a></li>
                  <li>Premiro Slim Dashboard for Back Office Service</li>
                  <li>Premiro Slim API as Back End Services for Premiro Web (Internal) and External Partners</li>
                </ul>

                <div className="row mb-3"></div>

                <h5>Abc App</h5>
                
                <span className="d-block">Lorem Ipsum</span>
                <span className="d-block mb-3"></span>

                <ul class="icon-list">
                  <li>Abc App Live Demo <a href="#" target="_blank">#</a></li>
                  <li>Abc App Github <a href="#" target="_blank">#</a></li>
                </ul>

            </div>
          </div>
        </div>

        <hr className="col-6 container" />

        <div class="container col-xxl-8 px-4 py-5" id="connect">
          <div class="row g-5">
            <div class="col-md-3">
              <h4>
                <span style={spanStyle}>Connect with Me</span>
              </h4>
            </div>
          </div>
        </div>

        <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="container">
              <p>Personal Profile Template by <a href="https://instagram.com/hutomo.sugianto">Hutomo Sugianto</a>.</p>
              <p>Icons created by <a href="https://www.flaticon.com/free-icons/" title="Icons" target="_blank">Freepik - Flaticon</a></p>
            </div>
        
        </footer>


    </div>
  );
}

export default App;
