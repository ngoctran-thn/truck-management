import { Truck } from "../type/Truck";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTruckById } from "../controllers/TruckController";

export const TruckDetail = () => {
  const { truckId } = useParams();

  const [truck, setTruck] = useState<Truck>();
  async function readTruckById() {
    if (truckId === undefined) return;
    await getTruckById(truckId)
      .catch(console.error)
      .then((response) => {
        setTruck(response);
        console.log(JSON.stringify(response));
      });
  }

  useEffect(() => {
    readTruckById();
  }, []);

  return (
    <div>
      <h3>Truck Detail</h3>
      Id: {truckId}
      <br />
      License Plate: {truck?.licencePlate}
      <br />
      Name: {truck?.name}
      <br />
    </div>
  );
};
