<script setup>
import SideLock from "@/components/SideLock.vue";
import Realisations from "@/components/RealisationsSection.vue";
import Skills from "@/components/SkillsSection.vue";
import {onMounted} from "vue";

/* Code for sticky header */
/*window.addEventListener('scroll', function() {

  const sections = document.querySelectorAll('.section');

  const headerTitle = document.getElementById('header-title');

  let currentSection = '';

  sections.forEach(function(section) {

    const sectionTop = section.offsetTop;

    console.log(section)
    console.log('SectionTop :' + sectionTop)
    console.log('PageYOffset :' + window.pageYOffset)

    const sectionHeight = section.offsetHeight;
    console.log('height :' + sectionHeight)

/!*    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.querySelector('.section-title').textContent;
    }*!/

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.querySelector('.section-title').innerText;

      console.log("Afficher le titre de la section");
      console.log(currentSection);
    }

  });


  // Si currentSection reste vide, utilisez un titre par défaut
  if (currentSection === '') {
    currentSection = 'Default title';
  }

  headerTitle.textContent = currentSection;
});*/

/*onMounted(() => {
  const stickyHeader = document.querySelector('#header-title');

  const sections = document.querySelectorAll('.section');

// Options pour l'Intersection Observer
  const options = {
    root: null, // viewport
    threshold: 0.2, // pour déclencher l'événement immédiatement
    // rootMargin: "2% 0%" // pour déclencher l'événement 200px avant
  };

  let currentSection = null;

  const callback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const title = entry.target.querySelector('h3').innerText;
        stickyHeader.innerText = title;
        console.log(entry.target)
        currentSection = entry.target;
      } else if (entry.target === currentSection) {
        currentSection = null;
      }
    });
  };

  // Créer l'Intersection Observer
  const observer = new IntersectionObserver(callback, options);

  console.log(stickyHeader);

  console.log(sections);

// Observer toutes les sections
  sections.forEach(section => {
    observer.observe(section);
  });
})*/


</script>

<template>

<!--  <div class="sticky-header">

    <h2 id="header-title">Default title</h2>

  </div>-->

  <main class="lg:flex h-screen">

    <aside class="p-12 text-white lg:w-4/12 flex flex-col justify-between">

      <SideLock/>

    </aside>

    <div class="text-white overflow-auto lg:w-8/12">

      <Realisations class="section"/>

      <Skills class="section"/>

    </div>

  </main>

</template>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background-color: #f1f1f1;
  padding: 10px;
  z-index: 10;
}
</style>