<template>
    <section class="text-gray-700 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Projetos Recentes
          </h1>
          <div class="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
        
      </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
           <g-image
              class="rounded w-full object-cover object-center mb-6 md:h-64 h-40"
              src="~/images/luquembo.jpg"
              alt="luquembo-house-1"
            />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Condômino Luquembo</h2>
        <p class="text-base leading-relaxed mt-2">
Localizado no município de Belas, este condomínio é o local perfeito para a família. Este é um projeto de 8 casas.</p>
        
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
           <g-image
              class="md:h-64 h-40 rounded w-full object-cover object-center mb-6"
              src="~/images/maurilia.jpg"
              alt="maurilia-house-1"
            />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Vivenda Maurilia</h2>
        <p class="text-base leading-relaxed mt-2">Situada em Benfica, trata-se de uma moradia T3 com piscina. Esta casa é perfeita para famílias.</p>
        
      </div>
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div class="rounded-lg h-64 overflow-hidden">
           <g-image
              class="md:h-64 h-40 rounded w-full object-cover object-center mb-6"
              src="~/images/cutana.jpg"
              alt="cutana-house-1"
            />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Vivenda Matuidi Cutana</h2>
        <p class="text-base leading-relaxed mt-2">Localizado no município de Belas, vivenda T3 com amplo espaço para visitantes.</p>
        
      </div>
    </div>
  </div>
</section>
</template>

<style src="../tailwind.css" />