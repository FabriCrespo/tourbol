import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="campamento" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Estamos aquí para ti
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Te Guiamos en el Camino Fácil
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Con la aplicación Hilink, nunca más te perderás y tendrás que
            encontrar el camino de nuevo. Ofrecemos mapas offline para cuando no
            haya conexión a Internet. Invita a tus amigos, familiares y seres
            queridos a disfrutar de la naturaleza en su máxima expresión,
            recorriendo el valle y alcanzando la cima de la montaña.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="barco"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="metro"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Duración</p>{" "}
                <p className="bold-16 text-green-50">3 días</p>
              </div>
              <p className="bold-20 mt-2">Salar de Uyuni</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Ubicación</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                {" "}
                Departamento de Potosí, Bolivia
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
