<template>
  <Layout>
    

    
    <Main />

    
    <div  id="serviços">
      <Phone />
      <Service />
    </div>
   <div id="projetos">
     <div class="bg-white pt-2 pb-2"></div>
     <Project />
   </div>
   
    
    <div id="clientes">
       <div class="bg-white pt-2 pb-2"></div>
      <Clients />
    </div>
    <div id="contacto">
      <Contact />
    </div>
    
  </Layout>
</template>

<script>
import Main from "~/components/Main.vue";
import Phone from "~/components/Phone.vue";
import Service from "~/components/Service.vue";
import Contact from "~/components/Contact.vue";
import Project from "~/components/Project.vue";
import Clients from "~/components/Clients.vue";

export default {
  name: "ACBT — Construção e engenharia",
  components: {
    Main,
    Phone,
    Service,
    Contact,
    Project,
    Clients
    
  },
//  metaInfo() {
//   return this.$seo({
//      keywords: 'gerenciamento de projetos, gestão da construção, projeto de execução, gestor de projeto, planejamento do projeto, imobiliária, planejamento, engenharia civil, acbt, ac bt, alvalade, construcao, arquitetura, crespo, bessa',
//   })
//  }
  
};
</script>

<style src="../tailwind.css" />