import axios from "axios";
import React, { useEffect, useState } from "react";
import Registro2 from "./Registro2";
import CustomerList from "./CustomerList";

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
     const customersRes = await axios.get("http://localhost:3007/test/cosas");
 
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <Registro2 getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default Customers;