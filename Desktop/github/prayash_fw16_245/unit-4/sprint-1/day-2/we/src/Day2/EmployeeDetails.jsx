import Card from "./Card";


const data = {

name:"Prayash Chhetri",
qualification: "BCOM",
img_url: "https://ca.slack-edge.com/T02QFJUB5DF-U02RH3WPSGG-339c751166da-72",
istitute: "MASAI SCHOOL"

};

function EmployeeDetails() {

return (

// display a card with the given details
  <>
  
  <Card {...data}/>
  

  </>

)


}

export default EmployeeDetails;

