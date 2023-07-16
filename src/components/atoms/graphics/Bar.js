import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";

export const TemperatureChart = () => {
  const [data, setData] = useState([]);

  // Función para generar valores aleatorios de temperatura
  const generateRandomTemperatureData = () => {
    const newData = [
      {
        date: "2023-07-01",
        Temperatura: Math.floor(Math.random() * 100),
      },
      {
        date: "2023-07-02",
        Temperatura: Math.floor(Math.random() * 100),
      },
      {
        date: "2023-07-03",
        Temperatura: Math.floor(Math.random() * 100),
      },
      {
        date: "2023-07-04",
        Temperatura: Math.floor(Math.random() * 100),
      },
      {
        date: "2023-07-05",
        Temperatura: Math.floor(Math.random() * 100),
      },
      {
        date: "2023-07-06",
        Temperatura: Math.floor(Math.random() * 100),
      },
      {
        date: "2023-07-07",
        Temperatura: Math.floor(Math.random() * 100),
      },
    ];

    setData(newData);
  };

  useEffect(() => {
    // Actualiza los datos cada 2 segundos
    const interval = setInterval(() => {
      generateRandomTemperatureData();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ResponsiveBar
      data={data}
      keys={["Temperatura"]}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Fecha",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Temperatura",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};
