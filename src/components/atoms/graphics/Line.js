import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";

export const MyResponsiveLine = () => {
  const [data, setData] = useState([
    {
      id: "temperature",
      color: "hsl(352, 70%, 50%)",
      data: [],
    },
    {
      id: "humidity",
      color: "hsl(346, 70%, 50%)",
      data: [],
    },
    {
      id: "presure",
      color: "hsl(115, 70%, 50%)",
      data: [],
    },
    {
      id: "altitude",
      color: "hsl(303, 70%, 50%)",
      data: [],
    },
  ]);

  useEffect(() => {
    // Generar datos simulados
    const generateData = () => {
      const newData = data.map((item) => ({
        ...item,
        data: Array.from({ length: 6 }, (_, i) => ({
          x: (i + 1) * 10,
          y: Math.floor(Math.random() * 300),
        })),
      }));

      setData(newData);
    };

    // Generar datos iniciales
    generateData();

    // Actualizar los datos cada 2 segundos
    const interval = setInterval(generateData, 2000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "time seg.",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "data",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0,100, .6)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 100,.3)",
                itemOpacity: 2,
              },
            },
          ],
        },
      ]}
    />
  );
};
