import VideoThumb from "@/public/images/hero-image-01.jpg"; // Importa la miniatura del video desde el directorio de imÃ¡genes
import ModalVideo from "@/components/modal-video"; // Importa el componente ModalVideo

export default function Hero() {
  return (
    <section>
      <div className=" ">
        {/* IlustraciÃ³n detrÃ¡s del contenido del hÃ©roe */}

        {/* Contenido del hÃ©roe */}
        <div className=" ">
          {/* Encabezado de la secciÃ³n */}
          <blockquote className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12">
            ¿Estas en busca de souvenir
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block uppercase mr-5 mt-5 ml-8  sm:r-5 mt-5 lg: mt-5 ml-5">
              <span className="relative text-white">exclusivos</span>
            </span>
            para tu tienda?
          </blockquote>

          {/* <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
  When you look
  <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">annoyed</span>
  </span>
  all the time, people think that you're busy.
</blockquote>*/}

          {/* Componente ModalVideo */}
          <div className="">
            <ModalVideo
              video="/videos/designar.mp4" // Ruta del archivo de video
              videoWidth={1080} // Ancho del video
              videoHeight={1080} // Altura del video
            />
          </div>
        </div>
      </div>
    </section>
  );
}
