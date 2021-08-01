import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  InputGroup,
  FormControl,
  Navbar,
  Nav,
  Figure,
  Image,
  Carousel,
  Item,
  Caption,
} from "react-bootstrap";

import Admin from "../Admin/Admin";

export default class Home extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "Ariostea",
        type: "Tile",
        banner: "Ariostea Image",
        items: [
          {
            collection: "Marmi Classici",
            promo: false,
            lists: [
              {
                id: 1,
                name: "Bianco Calacatta",
                kind: "Marble",
                image: ["image1", "image2"],
                application: ["Living Room", "Kitchen", "Bath Room"],
                area: ["Indoor", "Outdoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Soft"],
                    sizes: ["120x60", "60x60,", "60x30"],
                    thickness: "8mm",
                    color: ["White"],
                    design: ["Vien Marble", "Marble Effect"],
                  },
                ],
              },
              {
                id: 2,
                name: "Bianco Covelano",
                kind: "Marble",
                image: ["image1", "image2"],
                application: ["Living Room", "Kitchen", "Bath Room"],
                area: ["Indoor", "Outdoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Soft"],
                    sizes: ["120x60", "60x60,", "60x30"],
                    thickness: "8mm",
                    color: ["White"],
                    design: ["Vien Marble", "Marble Effect"],
                  },
                ],
              },
              {
                id: 1,
                name: "Bianco Calacatta",
                kind: "Marble",
                image: ["image1", "image2"],
                application: ["Living Room", "Kitchen", "Bath Room"],
                area: ["Indoor", "Outdoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Soft"],
                    sizes: ["120x60", "60x60,", "60x30"],
                    thickness: "8mm",
                    color: ["White"],
                    design: ["Vien Marble", "Marble Effect"],
                  },
                ],
              },
              {
                id: 2,
                name: "Bianco Covelano",
                kind: "Marble",
                image: ["image1", "image2"],
                application: ["Living Room", "Kitchen", "Bath Room"],
                area: ["Indoor", "Outdoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Soft"],
                    sizes: ["120x60", "60x60,", "60x30"],
                    thickness: "8mm",
                    color: ["White"],
                    design: ["Vien Marble", "Marble Effect"],
                  },
                ],
              },
            ],
          },
          {
            collection: "ULTRA Marmi",
            promo: false,
            lists: [
              {
                id: 1,
                name: "ULTRA Bianco",
                kind: "Marble",
                image: ["image1", "image2"],
                application: ["Living Room", "Kitchen", "Bath Room"],
                area: ["Indoor", "Outdoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Soft"],
                    sizes: ["120x60", "60x60,", "60x30"],
                    thickness: "8mm",
                    color: ["White"],
                    design: ["Vien Marble", "Marble Effect"],
                  },
                ],
              },
              {
                id: 2,
                name: "ULTRA Covelano",
                kind: "Marble",
                image: ["image1", "image2"],
                application: ["Living Room", "Kitchen", "Bath Room"],
                area: ["Indoor", "Outdoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Soft"],
                    sizes: ["120x60", "60x60,", "60x30"],
                    thickness: "8mm",
                    color: ["White"],
                    design: ["Vien Marble", "Marble Effect"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Antolini",
        type: "Natural Stone",
        banner: "Antolini Image",
        items: [
          {
            collection: "Exclusive",
            promo: false,
            lists: [
              {
                id: 3,
                name: "Patagonia Original",
                kind: "Natural Quartz",
                image: ["image1", "image2"],
                application: [
                  "Living Room",
                  "Bath Room",
                  "Tops",
                  "Accent Wall",
                ],
                area: ["Indoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Lether"],
                    sizes: ["320x120"],
                    thickness: "20mm",
                    color: ["White", "Gold", "Yellow Gold"],
                    design: ["Stone Spot", "Quartz", "Crystal"],
                  },
                ],
              },
              {
                id: 4,
                name: "Belvedere",
                kind: "Natural Quartz",
                image: ["image1", "image2"],
                application: [
                  "Living Room",
                  "Bath Room",
                  "Tops",
                  "Accent Wall",
                ],
                area: ["Indoor", "Floor", "Wall"],
                details: [
                  {
                    finishes: ["Polish", "Hydro"],
                    sizes: ["320x120"],
                    thickness: "20mm",
                    color: ["Black"],
                    design: ["Vein Stone"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "SapienStone",
        type: "Sintered Stone",
        banner: "SapienStone Image",
        items: [
          {
            collection: "Exclusive",
            promo: false,
            lists: [
              {
                id: 5,
                name: "Sintered Stone Name",
                kind: "Sintered Stone",
                image: ["image1", "image2"],
                application: ["Bath Room", "Tops"],
                area: ["Indoor"],
                details: [
                  {
                    finishes: ["Active", "Matt"],
                    sizes: ["320x100"],
                    thickness: "12mm",
                    color: ["White"],
                    design: ["Plain Color"],
                  },
                ],
              },
              {
                id: 6,
                name: "Sintered Stone Name 2",
                kind: "Sintered Stone",
                image: ["image1", "image2"],
                application: ["Bath Room", "Tops"],
                area: ["Indoor"],
                details: [
                  {
                    finishes: ["Active", "Matt"],
                    sizes: ["320x100"],
                    thickness: "12mm",
                    color: ["White"],
                    design: ["Plain Color"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Liston Giordano",
        type: "Natural Wood",
        banner: "Listone Giordano Image",
        items: [
          {
            collection: "Classica",
            promo: false,
            lists: [
              {
                id: 7,
                name: "Oak Puro",
                kind: "Wood",
                image: ["image1", "image2"],
                application: [
                  "Living Room",
                  "Bed Room",
                  "Library Room",
                  "Entertainment Room",
                  "Gallery",
                ],
                area: ["Indoor"],
                details: [
                  {
                    finishes: ["NaturPlus2", "MattPlus2"],
                    sizes: ["210x20"],
                    thickness: "10mm",
                    color: ["Brown"],
                    design: ["Fibramix", "Country"],
                  },
                ],
              },
              {
                id: 8,
                name: "Oak Tamarindo",
                kind: "Wood",
                image: ["image1", "image2"],
                application: [
                  "Living Room",
                  "Bed Room",
                  "Library Room",
                  "Entertainment Room",
                  "Gallery",
                ],
                area: ["Indoor"],
                details: [
                  {
                    finishes: ["NaturPlus2", "MattPlus2"],
                    sizes: ["210x20"],
                    thickness: "10mm",
                    color: ["Brown"],
                    design: ["Fibramix", "Country"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    compareItem: [],
    filterType: [],
  };

  render() {
    console.log(this.state.filterType);
    // TYPE
    // TYPE
    // TYPE
    const allTypes = this.state.products.map((brand) => {
      return (
        <span key={brand.id}>
          <Button variant="outline-primary" className="span-button">
            {brand.type}
          </Button>{" "}
        </span>
      );
    });
    // BRAND
    // BRAND
    // BRAND
    const allBrands = this.state.products.map((brand) => {
      return (
        <Col sx={12} md={6} key={brand.id}>
          <Card className="mx-auto my-2">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS-ET3a4J1rrUZstxVGpfcWGx2D_Fa2-cet24tYbihh4EAnf8jlqMsvtHbGlFj45u6i7M&usqp=CAU"
            />
            <Card.Body>
              <Card.Title>{brand.name}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    // ARIOSTEA
    // ARIOSTEA
    // ARIOSTEA
    const ariostea = this.state.products.filter(
      (brand) => brand.name === "Ariostea"
    );
    const allTile = ariostea.map((brand) => {
      //console.log(brand);

      //const unique = [new Set(brand.items.map((col) => col.collection))]; // [ 'A', 'B']
      //console.log(unique);
      return (
        <div key={brand.id}>
          {/* BRAND */}
          {/* BRAND */}
          {/* BRAND */}
          <h4>{brand.name}</h4>
          <br />
          <div>
            {brand.items.map((item) => {
              return (
                <Container className="">
                  <div key={item.collection + item.name}>
                    {/* COLLECTION */}
                    {/* COLLECTION */}
                    {/* COLLECTION */}
                    <h5>{item.collection}</h5>
                    <hr />
                    <Row>
                      {item.lists.map((item) => {
                        return (
                          <Col xs={6} key={item.id} className=" marginy">
                            <Figure>
                              <Figure.Image
                                width={200}
                                alt={item.name}
                                // src={item.image}
                                className="border"
                                src="https://www.ariostea-high-tech.com/img/collezioni/marmi-classici/bianco-calacatta/_faces/Marble+Effect++Floors-Bianco+Calacatta-01.jpg"
                              />
                              <Figure.Caption>{item.name}</Figure.Caption>
                            </Figure>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                  <br />
                </Container>
              );
              //const unique = [new Set(items.map((col) => col.collection))]; // [ 'A', 'B']
              // console.log(items.collection);
            })}
            {/* {new Set(brand.map((item) =>
            item.collection))}; */}
          </div>
        </div>
      );
    });

    // ANTOLINI
    // ANTOLINI
    // ANTOLINI
    const antolini = this.state.products.filter(
      (brand) => brand.name === "Antolini"
    );
    const allStone = antolini.map((brand) => {
      //console.log(brand);

      //const unique = [new Set(brand.items.map((col) => col.collection))]; // [ 'A', 'B']
      //console.log(unique);
      return (
        <div key={brand.id}>
          {/* BRAND */}
          {/* BRAND */}
          {/* BRAND */}
          <h4>{brand.name}</h4>
          <br />
          <div>
            {brand.items.map((item) => {
              return (
                <Container className="">
                  <div key={item.collection + item.name}>
                    {/* COLLECTION */}
                    {/* COLLECTION */}
                    {/* COLLECTION */}
                    <h5>{item.collection}</h5>
                    <hr />
                    <Row>
                      {item.lists.map((item) => {
                        return (
                          <Col xs={6} key={item.id} className=" marginy">
                            <Figure>
                              <Figure.Image
                                width={200}
                                alt={item.name}
                                // src={item.image}
                                className="border"
                                src="https://www.ariostea-high-tech.com/img/collezioni/marmi-classici/bianco-calacatta/_faces/Marble+Effect++Floors-Bianco+Calacatta-01.jpg"
                              />
                              <Figure.Caption>{item.name}</Figure.Caption>
                            </Figure>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                  <br />
                </Container>
              );
              //const unique = [new Set(items.map((col) => col.collection))]; // [ 'A', 'B']
              // console.log(items.collection);
            })}
            {/* {new Set(brand.map((item) =>
            item.collection))}; */}
          </div>
        </div>
      );
    });

    // Unique Item
    // const data = [
    //   { group: "A", name: "SD" },
    //   { group: "B", name: "FI" },
    //   { group: "A", name: "MM" },
    //   { group: "B", name: "CO" },
    // ];
    // const unique = [new Set(data.map((item) => item.group))]; // [ 'A', 'B']
    //console.log(unique);

    // Group By
    // var people = [
    //   { name: "Alice", age: 21 },
    //   { name: "Max", age: 20 },
    //   { name: "Jane", age: 20 },
    // ];
    // console.log(people);
    // function groupBy(objectArray, property) {
    //   return objectArray.reduce(function (acc, obj) {
    //     var key = obj[property];
    //     if (!acc[key]) {
    //       acc[key] = [];
    //     }
    //     acc[key].push(obj);
    //     return acc;
    //   }, {});
    // }

    // var groupedPeople = groupBy(people, "age");
    // console.log(groupedPeople);

    return (
      <Container fluid className="border paddingreset">
        {/* DEMO */}
        {/* DEMO */}
        {/* DEMO */}
        {/* <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Button>a</Button>
        </Container> */}

        {/* NAV */}
        {/* NAV */}
        {/* NAV */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Globalhome
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* FILTER MENU */}
        {/* FILTER MENU */}
        {/* FILTER MENU */}
        <Container className="bgwhite paddingy">
          <br />
          <InputGroup>
            <FormControl
              placeholder="Find Item"
              aria-label="Recipient's username with two button addons"
            />
            <Button variant="outline-dark">Search</Button>
            <Button variant="outline-dark">X</Button>
          </InputGroup>
          <br />

          {allTypes}
        </Container>
        <br />

        {/* BRANDS */}
        {/* BRANDS */}
        {/* BRANDS */}
        <Container className="">
          <Row className="justify-content-sm-center">{allBrands}</Row>
        </Container>
        <br />

        <Carousel>
          <Carousel.Item className="border1 caroselFixH">
            <img
              className="d-block w-100"
              src="https://www.ariostea-high-tech.com/img/homepage/slide/slide-6/Large+Porcelain+Slabs-desktop.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="border1 caroselFixH">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="border1 caroselFixH">
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* <Container className="border">{allTile}</Container> */}
        {/* <Container className="border">{allStone}</Container> */}

        {/* <Carousel>
          
        </Carousel> */}
      </Container>
    );
  }
}
