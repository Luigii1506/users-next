"use client";

import Image from "next/image";
import { useState } from "react";
import Timer3 from "../app/components/Timer";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeInterval, setTimeInterval] = useState(2);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [hasFinishedExercises, setHasFinishedExercises] = useState(false);

  const [exercises, setExercises] = useState([
    {
      title: "Ejercicio 1",
      description: "Voy a cambiar estos $150 dólares a pesos.",
      received: 150,
      currency: "USD",
    },
    {
      title: "Ejercicio 2",
      description:
        "Quiero recibir $1,960 pesos y tengo dólares para el cambio.",
      received: 100,
      currency: "USD",
    },
    {
      title: "Ejercicio 3",
      description: "Voy a llevarme $250 dólares; traigo pesos para cubrirlo.",
      received: 5000,
      currency: "MXN",
    },
    {
      title: "Ejercicio 4",
      description: "Quiero recibir $2,500 pesos y tengo dólares.",
      received: 125,
      currency: "USD",
    },
    {
      title: "Ejercicio 5",
      description: "Quiero recibir $7,500 pesos y tengo dólares.",
      received: 382,
      currency: "USD",
    },
    {
      title: "Ejercicio 6",
      description: "Voy a llevarme $300 dólares; traigo pesos para cubrirlo.",
      received: 6000,
      currency: "MXN",
    },
    {
      title: "Ejercicio 7",
      description: "Voy a cambiar estos $3,000 pesos a dólares.",
      received: 3000,
      currency: "MXN",
    },
    {
      title: "Ejercicio 8",
      description: "Quiero recibir $500 pesos y tengo dólares.",
      received: 25.51,
      currency: "USD",
    },
    {
      title: "Ejercicio 9",
      description: "Voy a cambiar estos $200 dólares a pesos.",
      received: 200,
      currency: "USD",
    },
    {
      title: "Ejercicio 10",
      description: "Quiero recibir $900 pesos y tengo dólares.",
      received: 45.91,
      currency: "USD",
    },
    {
      title: "Ejercicio 11",
      description: "Voy a cambiar estos $50 dólares a pesos.",
      received: 50,
      currency: "USD",
    },
    {
      title: "Ejercicio 12",
      description: "Quiero recibir $2,500 pesos y tengo dólares.",
      received: 127.55,
      currency: "USD",
    },
    {
      title: "Ejercicio 13",
      description: "Voy a llevarme $150 dólares; traigo pesos para cubrirlo.",
      received: 3000,
      currency: "MXN",
    },
    {
      title: "Ejercicio 14",
      description: "Voy a cambiar estos $700 pesos a dólares.",
      received: 700,
      currency: "MXN",
    },
    {
      title: "Ejercicio 15",
      description: "Quiero cambiar estos $180 dólares a pesos.",
      received: 180,
      currency: "USD",
    },
    {
      title: "Ejercicio 16",
      description: "Voy a llevarme $200 dólares; traigo pesos.",
      received: 4000,
      currency: "MXN",
    },
    {
      title: "Ejercicio 17",
      description: "Quiero recibir $500 pesos, traigo dólares.",
      received: 25.51,
      currency: "USD",
    },
    {
      title: "Ejercicio 18",
      description: "Voy a cambiar estos $800 pesos a dólares.",
      received: 800,
      currency: "MXN",
    },
    {
      title: "Ejercicio 19",
      description: "Tengo $60 dólares y quiero pesos a cambio.",
      received: 60,
      currency: "USD",
    },
    {
      title: "Ejercicio 20",
      description: "Voy a llevarme $80 dólares; traigo pesos.",
      received: 1600,
      currency: "MXN",
    },
    {
      title: "Ejercicio 21",
      description: "Voy a cambiar estos $250 dólares a pesos.",
      received: 250,
      currency: "USD",
    },
    {
      title: "Ejercicio 22",
      description: "Quiero recibir $1,800 pesos, traigo dólares.",
      received: 91.83,
      currency: "USD",
    },
    {
      title: "Ejercicio 23",
      description: "Tengo $50 dólares, quiero pesos a cambio.",
      received: 50,
      currency: "USD",
    },
    {
      title: "Ejercicio 24",
      description: "Voy a cambiar estos $90 dólares a pesos.",
      received: 90,
      currency: "USD",
    },
    {
      title: "Ejercicio 25",
      description: "Quiero recibir $2,000 pesos, traigo dólares.",
      received: 2000,
      currency: "MXN",
    },
  ]);

  const handleExercisesTimer = () => {
    if (currentExercise < exercies.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      setIsStarted(false);
      setCurrentExercise(0);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {isStarted ? (
        <div className="flex flex-col">
          <div className="bg-white p-5 border rounded-md shadow-md mb-[30px] max-w-[900px] w-full">
            <div className="text-black font-bold text-[50px] text-center mb-2 leading-[55px]">
              {exercies[currentExercise].title}
            </div>
            <div className="text-black  text-[45px] text-center mb-2">
              Descripción: {exercies[currentExercise].description}
            </div>
            <div className="text-black  text-[50px] text-center">
              Monto:{" "}
              <span className="font-bold">
                {exercies[currentExercise].received.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                {exercies[currentExercise].currency}
              </span>
            </div>
          </div>
          <div className="mb-5">
            <Timer3
              interval={timeInterval}
              isPaused={isPaused}
              onTimerEnds={() => handleExercisesTimer()}
              setCurrentExercise={setCurrentExercise}
              currentExercise={currentExercise}
              exercises={exercies}
              setIsStarted={setIsStarted}
              setIsPaused={setIsPaused}
              setHasFinishedExercises={setHasFinishedExercises}
            />
          </div>

          {!hasFinishedExercises && (
            <button
              className={`m-auto w-[200px] text-2xl rounded-lg text-white px-4 py-3 font-bold ${
                isPaused ? "bg-green-400" : "bg-red-400 "
              }`}
              onClick={() => {
                if (isPaused) {
                  setIsPaused(false);
                } else {
                  setIsPaused(true);
                }
              }}
            >
              {isPaused ? "Reanudar" : "Pausar"}
            </button>
          )}

          {hasFinishedExercises && (
            <button
              className={`m-auto w-[200px] text-2xl rounded-lg text-white px-4 py-3 font-bold bg-orange-400`}
              onClick={() => {
                setCurrentExercise(0);
                setIsPaused(false);
                setHasFinishedExercises(false);
              }}
            >
              Reiniciar
            </button>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col text-center">
          <p className="text-[60px] font-bold mb-5">Simulador de clientes</p>

          {/* Instructions Section */}
          {/* <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-[450px] mb-8">
            <p className="text-lg font-semibold mb-4 text-gray-800">
              Instrucciones:
            </p>

            <div className="flex flex-col">
              <div className="flex flex-row justify-between mb-3">
                <span className="bg-blue-500 text-white rounded-full h-[30px] w-[30px] flex items-center justify-center mr-3">
                  1
                </span>
                <p className="text-black flex-1">
                  Presiona <span className="font-bold">"Empezar"</span> para
                  iniciar la simulación.
                </p>
              </div>
              <div className="flex flex-row justify-between mb-3">
                <span className="bg-blue-500 text-white rounded-full h-[30px] w-[30px] flex items-center justify-center mr-3">
                  2
                </span>
                <p className="text-black flex-1">
                  Tendrás {timeInterval} minutos entre cliente para poder
                  realizar lo que se te pida.
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <span className="bg-blue-500 text-white rounded-full h-[30px] w-[30px] flex items-center justify-center mr-3">
                  3
                </span>
                <p className="text-black flex-1">
                  Observa cómo los clientes son simulados en el sistema.
                </p>
              </div>
            </div>
          </div> */}

          {/* Start Button */}
          <button
            className="bg-green-400 text-2xl rounded-lg text-white px-4 py-3 font-bold"
            onClick={() => {
              setIsStarted(true);
            }}
          >
            Empezar
          </button>
        </div>
      )}
    </div>
  );
}
