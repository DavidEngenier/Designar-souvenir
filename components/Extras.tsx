export default function Extras() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
              <h2 className="text-xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center text-gray-200 mx-auto text-center relative uppercase  sm:pt-8 lg:pt-12">
                ¿BUSCAS
                <span
                  className="before:block before:absolute before:-inset-1.5 before:-skew-y-3 before:bg-blue-500 relative inline-block uppercase ml-5 "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <span className="relative text-black">EXCLUSIVIDAD</span>
                </span>
                ?
              </h2>
              <p className="uppercase sm:text-3xl md:1xl mt-5 text-gray-200 ">
                entonces tambien tienes que saber esto
              </p>
            </div>
  
            {/* Items */}
            <div
              className="max-w-sm mx-auto md:max-w-2xl text-gray-200 flex flex-col md:flex-row md:flex-wrap"
              data-aos-id-blocks
            >
              {/* 1st item */}
              <div
                className="relative flex flex-col sm:flex-row items-center mb-8 "
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="w-16 h-16 mr-4 animate-spin-horizontal"
                >
                  <rect
                    className="fill-current text-blue-400"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(19, 19)"
                  >
                    <path
                      className="stroke-current text-gray-00"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    />
                  </g>
                </svg>
                <h4 className="h4 mb-2"></h4>
                <p className="text-2xl  text-center">
                  Diseños exclusivos en todo Mexico
                </p>
              </div>
  
              {/* 2nd item */}
              <div
                className="relative flex flex-col sm:flex-row items-center mb-8 "
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin-horizontal"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-blue-400"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(19, 19)"
                  >
                    <path
                      className="stroke-current text-gray-100"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    />
                  </g>
                </svg>
                <h4 className="h4 mb-2"></h4>
                <p className="text-2xl  text-center">
                  Productos innovadores y con tecnologias 4.0
                </p>
              </div> 



              {/* 5th item */}
              <div
                className="relative flex items-center mb-8 flex-col sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin-horizontal"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-blue-400"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(19, 19)"
                  >
                    <path
                      className="stroke-current text-gray-100"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    />
                  </g>
                </svg>
                <h4 className="h4 mb-2"></h4>
                <p className="text-2xl  text-center">Garantía de compra</p>
              </div>
              
  
              {/* 5th item */}
              <div
                className="relative flex items-center mb-8 flex-col sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin-horizontal"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-blue-400"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(19, 19)"
                  >
                    <path
                      className="stroke-current text-gray-100"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    />
                  </g>
                </svg>
                <h4 className="h4 mb-2"></h4>
                <p className="text-2xl  text-center">
                  Personalizacion de productos por paradero turistico
                </p>
              </div>
  
              
            
  
  
              {/* 5th item */}


              <div
                className="relative flex items-center mb-8 flex-col sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-anchor="[data-aos-id-blocks]"
              >
                <svg
                  className="w-16 h-16 mr-4 animate-spin-horizontal"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    className="fill-current text-blue-400"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g
                    strokeLinecap="square"
                    strokeWidth="2"
                    fill="none"
                    transform="translate(19, 19)"
                  >
                    <path
                      className="stroke-current text-gray-100"
                      d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                    />
                  </g>
                </svg>
                <h4 className="h4 mb-2"></h4>
                <p className="text-2xl  text-center">Estantes personalizados</p>
              </div>





            </div>
          </div>
        </div>
      </section>
    );
  }
  