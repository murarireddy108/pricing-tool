import "./App.css";


function App() {

  return (
     <div className="App">
      <Pricingcard />
    </div>
  );
}
function Pricingcard() {
  const value = [
    {
      name: "Free",
      price: "0",
      users: "Single Users",
      storage: "5GB"
    },
    {
      name: "Plus",
      price: "9",
      users: "5 Users",
      storage: "50GB"
    },
    {
      name: "Pro",
      price: "49",
      users: "Unlimited Users",
      storage: "150GB"
    }
  ];
  return (
    <div>
      <section class="pricing py-5">
        <div className="container">
          <div className="row">
            {value.map((val, index) => (
              <Card value={val} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


function Card({ value, type }) {
  const { name, price, users, storage } = value;
   var classs = "fa fa-check";
  var classs1 = "fa fa-check";
  if (name === "Free") {
    var styles = { opacity: 0.5 };
    classs = "fa fa-times";
    classs1 = "fa fa-times";
  } else if (name === "Plus") {
    var style1 = { opacity: 0.5 };
    classs1 = "fa fa-times";
  }

  return (
    <div className="col-lg-4 ">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">
          {name}
        </h5>
        <h6 className="card-price text-center">
          ${price}
          <span class="period">/month</span>
        </h6>
        <hr></hr>
        <ul>
          <li><i class="fa fa-check" aria-hidden="true"></i>{users}</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>{storage} Storage</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Unlimited Public Projects</li>
          <li><i class="fa fa-check" aria-hidden="true"></i>Community Access</li>

          <div style={styles}>
            <li><i class={classs} aria-hidden="true"></i>Unlimited Private Projects</li>
            <li><i class={classs} aria-hidden="true"></i>Dedicated Phone Support</li>
            <li><i class={classs} aria-hidden="true"></i>Free Subdomain</li>
            <li style={style1}><i class={classs1} aria-hidden="true"></i>Monthly Status Reports</li>
          </div>
        </ul>
        <div class="d-grid">
          <button class="btn btn-primary text-uppercase">Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;