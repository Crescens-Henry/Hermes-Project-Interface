import React, { useEffect, useState } from "react";

export default function Sensors() {
  const [sensorData, setSensorData] = useState([
    { name: "Temperature", value: 0, unit: "°C" },
    { name: "Humidity", value: 0, unit: "%" },
    { name: "Altitude", value: 0, unit: "metros" },
    { name: "Pressure", value: 0, unit: "hPa" },
    { name: "CO2", value: 0, unit: "gas" },
  ]);

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.0.15:5000");
    socket.onmessage = (event) => {
      try {
        const mensajeJSON = event.data;
        const mensajeObjeto = JSON.parse(mensajeJSON);
        console.log("Mensaje recibido:", mensajeObjeto);

        // Actualiza el estado sensorData con los nuevos valores recibidos
        setSensorData((prevSensorData) => {
          // Crea un nuevo array de datos de sensores actualizados
          const updatedSensorData = prevSensorData.map((sensor) => {
            // Busca el sensor correspondiente en el objeto recibido
            const matchingKey = Object.keys(mensajeObjeto).find(
              (key) => key.toLowerCase() === sensor.name.toLowerCase()
            );
            if (matchingKey) {
              // Actualiza el valor del sensor con el valor correspondiente del objeto
              return {
                ...sensor,
                value: mensajeObjeto[matchingKey],
              };
            }
            return sensor;
          });

          return updatedSensorData;
        });
      } catch (error) {
        console.error("Error al analizar el mensaje JSON:", error);
      }
    };

    socket.onopen = () => {
      console.log("Conexión establecida con el servidor WebSocket");
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="text-4xl font-bold">Data Analytics</h1>
        <h3 className="text-2xl font-semibold">sensors</h3>
      </div>
      <div className="flex flex-col gap-4">
        {sensorData.map((sensor) => (
          <div className="bg-gray-200 p-4" key={sensor.name}>
            <h2 className="text-lg font-semibold">{sensor.name}</h2>
            <p className="text-xl">
              {sensor.value} {sensor.unit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
