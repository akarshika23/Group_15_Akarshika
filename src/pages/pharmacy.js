import React from "react"
import Layout from "../components/Layout/Layout"
import Image from "../components/Images/Images"
import { Search } from "react-bootstrap-icons"
 
class SearchExample extends React.Component {
  state = { searchString: "" }
  handleChange = e => {
    this.setState({ searchString: e.target.value })
  }
  render() {
    var libraries = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase()
    if (searchString.length > 0) {
      libraries = libraries.filter(function (i) {
        return i.name.toLowerCase().match(searchString)
      })
    }
    return (
      <Layout>
        <div className="container text-center py-5">
          <h2 className="pb-2 border-bottom text-center">Pharmacy</h2>
 
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search for Medicine"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={this.state.searchString}
              onChange={this.handleChange}
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              <Search />
            </button>
          </div>
 
          <div className="row justify-content-center py-5">
            {libraries.map(function (i) {
              return (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="card card-body shadow mb-4">
                    <Image
                      className="d-block mx-lg-auto img-fluid"
                      style={{
                        margin: "0 auto",
                        height: "200px",
                        width: "200px",
                        borderRadius: "100%",
                      }}
                      filename={`${i.image}.jpg`}
                      alt="1"
                    />
                    <h3 className="m-2">{i.name}</h3>
                    <h3 className="m-2">{i.price}</h3>
                    <h3 className="m-2">{i.expiry}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}
 
var libraries = [
  { image: "pharmacy1", name: "Crocin", price: "MRP.100", expiry: "Exp-01.2023" },
  { image: "pharmacy2", name: "Meftal-Spas", price: "Rs 200", expiry: " 1 year" },
  { image: "pharmacy3", name: "Antacids", price: "Rs 50", expiry: "1 year" },
  { image: "pharmacy4", name: "Antiseptic cream", price: "Rs 100", expiry: " 2 year" },
  { image: "pharmacy5", name: "Alosetron", price: "Rs 200", expiry: "2 year" },
  //{ image: "pharmacy6", name: "Pan-D", price: "Rs 70", expiry: "1 year" },
  { image: "pharmacy7", name: "Cotton", price: "Rs 90", expiry: "1 year" },
  { image: "pharmacy8", name: "Sanitary Pads", price: "Rs 299", expiry: "1 year" },
  { image: "pharmacy9", name: "Dettol", price: "Rs 70", expiry: "1 year" },
  { image: "pharmacy10", name: "Horlicks", price: "Rs 175", expiry: "1 year" },
  { image: "pharmacy11", name: "Mucinex", price: "Rs 36", expiry: "1 year" },
  { image: "pharmacy12", name: "Benadryl", price: "Rs 112", expiry: "1 year" },
  { image: "pharmacy13", name: "Glucose Monitoring", price: "Rs 6000", expiry: "1 year" },
  { image: "pharmacy14", name: "RTPCR Kit", price: "Rs 200", expiry: "1 year" },
  { image: "pharmacy15", name: "Band-aid", price: "Rs 190", expiry: "1 year" },
  { image: "pharmacy16", name: "Baby Diapers", price: "Rs 155", expiry: "1 year" },
  { image: "pharmacy17", name: "Diazen", price: "Rs 519", expiry: "1 year" },
  { image: "pharmacy18", name: "ENO", price: "Rs 399", expiry: "1 year" },
  { image: "pharmacy19", name: "ORS", price: "Rs 3.71", expiry: "1 month" },
  { image: "pharmacy20", name: "Glocon D", price: "Rs 152", expiry: "1 year" },
  { image: "pharmacy21", name: "Mask", price: "Rs 28.99", expiry: "1 year" },
  { image: "pharmacy22", name: "Sanitizer", price: "Rs 35", expiry: "1 year" },
  { image: "pharmacy23", name: "Move", price: "Rs 101", expiry: "2 year" },
  { image: "pharmacy24", name: "Vicks", price: "Rs 20", expiry: "1 year" },
  { image: "pharmacy25", name: "Complan", price: "Rs 175", expiry: "1 year" },
 
 
 
]
 
const Pharmacy = () => {
  return <SearchExample items={libraries} />
}
 
export default Pharmacy