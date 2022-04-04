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
  { image: "member1", name: "Crocin", price: "Rs 100", expiry: "1 year" },
  { image: "member1", name: "Crocin", price: "Rs 100", expiry: "1 year" },
  { image: "member1", name: "Crocin", price: "Rs 100", expiry: "1 year" },
  { image: "member1", name: "Crocin", price: "Rs 100", expiry: "1 year" },
  { image: "member1", name: "Crocin", price: "Rs 100", expiry: "1 year" },
  { image: "member1", name: "Crocin", price: "Rs 100", expiry: "1 year" },
]

const Pharmacy = () => {
  return <SearchExample items={libraries} />
}

export default Pharmacy