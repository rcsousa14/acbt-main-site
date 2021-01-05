<template >
  <section class="text-gray-700 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
      >
        <iframe
          width="100%"
          height="100%"
          class="absolute inset-0"
          frameborder="0"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?q=ACBT-%20Engenharia%20%26%20Constru%C3%A7%C3%A3o%20%2C%20Lda.&t=&z=17&ie=UTF8&iwloc=&output=embed"
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6">
          <div class="lg:w-1/2 px-6">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm"
            >
              ENDEREÇO
            </h2>
            <p class="leading-relaxed">
              Av. Cmte. Gika, Luanda
              <a
                href="https://w3w.co/impor.posto.nevou "
                class="text-blue-500 leading-relaxed"
                >///impor.posto.nevou</a
              >
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm"
            >
              EMAIL
            </h2>
            <ul>
              <li>
                <a
                  class="text-blue-500 leading-relaxed"
                  href="mailto:acbtengenharia1@email.com"
                  >acbtengenharia1@email.com</a
                >
              </li>
              <li>
                <a
                  class="text-blue-500 leading-relaxed"
                  href="mailto:acbtengenharia@outlook.pt"
                  >acbtengenharia@outlook.pt</a
                >
              </li>
            </ul>
            <h2
              class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4"
            >
              TELEFONE
            </h2>
            <ul>
              <li>
                <a
                  class="text-blue-500 leading-relaxed"
                  href="tel:+244924766289"
                  >+244924766289</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <form action="https://formspree.io/f/xnqodjkq" method="POST">
          <div class="shadow-md flex-auto p-10 pb-20 bg-blue-700">
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



