<template>
  <!-- component -->
  <section class="text-white body-font lg:py-10 py-24" id="main" >
    <div
      class="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center" 
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1
          class="title-font text-xl md:text-4xl lg:text-6xl mb-4 font-bold text-white"
        >
          De Simples Traços a Projecção de Sonhos
        </h1>
        <p class="mb-8 leading-relaxed text-xl">
          ACBT - Surge de um conceito inovador de arquitectura e engenharia onde
          as "suas" ideas são incorporadas em todos os conceitos chave da nossa
          intervenção. Os serviços prestados têm a garantia de qualidade, ao
          mesmo tempo que os nossos honorários são bastante competitivos face a
          relação preço/qualidade de que beneficiam os nossos clientes.
        </p>
      </div>

      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-blue-700 bg-opacity-75">
        <form action="https://formspree.io/f/xpzodqeb" method="POST">
          <div class="shadow-md flex-auto p-10 pb-20">
            <div class="w-full">
              <div
                class="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase"
              >
                <span class="text-red-400 mr-1">*</span> Nome Completo
              </div>
              <div
                class="my-2 bg-white p-1 flex border border-gray-200 rounded"
              >
                <input
                  placeholder="Paulo Jorge" name="name"
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
            <div class="w-full">
              <div
                class="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase"
              >
                <span class="text-red-400 mr-1">*</span> Email
              </div>
              <div
                class="my-2 bg-white p-1 flex border border-gray-200 rounded"
              >
                <input
                  placeholder="exemplo@gmail.com"
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800" name="_replyto"
                />
              </div>
            </div>
            <div class="w-full">
              <div
                class="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase"
              >
                <span class="text-red-400 mr-1">*</span> Mensagem
              </div>
              <div
                class="my-2 bg-white p-1 flex border border-gray-200 rounded"
              >
                <textarea
                  class="p-1 px-2 appearance-none outline-none w-full text-gray-800" name="message"
                  placeholder="Mensagem..."
                ></textarea>
              </div>
            </div>
            <div class="w-full">
              <div
                class="my-2 p-1 flex border border-gray-200 rounded bg-blue-500 hover:bg-blue-700"
              >
                <button
                  class="p-1 px-2 bg-blue outline-none w-full text-white font-semibold" type="submit"
                >
                  ENVIAR PROPOSTA
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
   
  </section>
</template>

<style src="../tailwind.css" />