import Link from "next/link";

const Newsletter: React.FC = () => {
  return (
    <section className="flex justify-center items-center ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        {/* Caja de llamada a la acción (CTA) */}
        <div>
          {/* Ilustración de fondo */}
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row justify-center w-full">
              <div className="w-full flex justify-center">
                <Link
                  href="/Pagina2"
                  className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-24 w-50 rounded-3xl bg-green-900 p-2 flex justify-center items-center font-extrabold"
                >
                  <div className="absolute z-10 w-80 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-green-300 delay-150 group-hover:delay-75"></div>
                  <div className="absolute z-10 w-60 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-green-400 delay-150 group-hover:delay-100"></div>
                  <div className="absolute z-10 w-50 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-green-500 delay-150 group-hover:delay-150"></div>
                  <div className="absolute z-10 w-40 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-green-600 delay-150 group-hover:delay-200"></div>
                  <div className="absolute z-10 w-30 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-green-700 delay-150 group-hover:delay-300"></div>
                  <p className="absolute z-10 text-2xl mb-2">Agenda Ahora</p>
                  <p className=" relative z-10 text-sm mt-9 text-red-600">(No Hacer click si no has visto el video)</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
