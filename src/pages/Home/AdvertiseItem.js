import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookModal from "../../../shared/BookModal/BookModal";
import CarCard from "../../../shared/CarCard/CarCard";
import Loading from "../../../shared/Loading/Loading";

const AdvertiseItem = () => {
  const [carData, setCarData] = useState(null);
  const { data: advertiseItems, isLoading } = useQuery({
    queryKey: ["advertiseItems"],
    queryFn: () =>
      fetch("http://localhost:5000/advertiseItem").then((res) => res.json()),
  });
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(advertiseItems);
  return (
    <>
      {advertiseItems.length > 0 && (
        <>
          <div className="my-10 mx-10">
            <h1 className="text-3xl font-bold mt-7 hover:ease-out text-black uppercase">
              Advertise
            </h1>
            <div className="grid grid-cols-3 gap-10 my-10">
              {advertiseItems.map((item) => (
                <CarCard
                  key={item._id}
                  car={item}
                  setCarData={setCarData}
                ></CarCard>
              ))}
            </div>
          </div>
          {carData && (
            <BookModal carData={carData} setCarData={setCarData}></BookModal>
          )}
        </>
      )}
    </>
  );
};

export default AdvertiseItem;
