import React from "react";
import "/src/index.css";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from "react-responsive-carousel";

// Importa las imágenes
import imgSpiderman from "../assets/imgSpiderman.jpg";
import imgSpiderman2 from "../assets/imgSpiderman2.jpg";
import imgSpiderman3 from "../assets/imgSpiderman3.jpg";
import imgHelloKitty from "../assets/imghellokitty.jpg";
import imgHelloKitty2 from "../assets/imghellokitty2.jpg";
import imgCharmander from "../assets/imgCharmander.jpg";
import imgCharmander2 from "../assets/imgCharmander2.jpg";
import imgCharmander3 from "../assets/imgCharmander3.jpg";
import imgUnicornio from "../assets/imgUnicornio.jpg";
import imgUnicornio1 from "../assets/imgUnicornio1.jpg";
import logo from "../assets/logo.png";

function SectionPrice() {
  const data = [
    {
      title: "Spiderman",
      description:
        "Este adorable amigurumi de Spider-Man de 15 cm cuenta con una máscara removible y su telaraña para colgarlo. Perfecto para fans del héroe arácnido.",
      imgSrc: [imgSpiderman, imgSpiderman2, imgSpiderman3], // Lista de imágenes
    },
    {
      title: "Hello Kitty",
      description:
        "Bonita amigurumi de Hello Kitty de 15 cm.",
      imgSrc: [imgHelloKitty, imgHelloKitty2], // Lista de imágenes
    },
    {
      title: "Charmander",
      description:
        "Pokemon amigurumi Charmander de 10 cm.",
      imgSrc: [imgCharmander, imgCharmander2, imgCharmander3], // Lista de imágenes
    },
    {
      title: "Unicornio",
      description:
        "Amigurumi Unicornio de 10 cm.",
      imgSrc: [imgUnicornio, imgUnicornio1], // Lista de imágenes
    },
  ];

  return (
    <>
      <div
        className="min-w-screen bg-white grid lg:grid-cols-2 gap-10 lg:gap-10 mt-8 p-[4rem] max-[1100px]:p-[2rem]"
        id="sectionPrice"
      >
        {data.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-6xl rounded bg-[#d6acb5] shadow-xl p-8 lg:p-16 mx-auto text-gray-800"
          >
            <div className="md:flex items-center -mx-4 sm:-mx-10">
              <div className="w-full md:w-1/2 px-4 sm:px-10 mb-10 md:mb-0">
                <div className="relative">
                  {Array.isArray(card.imgSrc) && card.imgSrc.length > 1 ? (
                    <Carousel showThumbs={false}>
                      {card.imgSrc.map((src, idx) => (
                        <div key={idx}>
                          <img
                            src={src}
                            className="w-full h-full relative rounded-lg"
                            alt={`${card.title} image ${idx + 1}`}
                          />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <img
                      src={card.imgSrc}
                      className="w-full h-full relative rounded-lg"
                      alt={card.title}
                    />
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 sm:px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {card.title}
                  </h1>
                  <p className="text-sm">{card.description}</p>
                </div>
                <div>
                  <div className="inline-block align-bottom">
                    <br />
                    <a href="https://www.instagram.com/samycrochetcreations/">
                      <button className="bg-[#648cb4] opacity-75 hover:opacity-100 text-gray-900 hover:text-black-900 rounded-full px-10 py-2 font-semibold">
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> Solicitar
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-end justify-end fixed bottom-5 right-0 mb-4 mr-4 z-10">
          <div>
            <a
              title="Buy me a beer"
              href="https://www.instagram.com/samycrochetcreations/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-20 h-20 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            >
              <img
                className="object-cover object-center w-full h-full rounded-full"
                src={logo}
                alt="Buy me a beer"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SectionPrice;
