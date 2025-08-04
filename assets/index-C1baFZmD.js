(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();function c(){return{d_name:"iguessfive",bio:"Welcome to my personal website!",email:"iguessfive@gmail.com",social:{github:"https://github.com/iguessfive",youtube:"https://www.youtube.com/@iguessfive",itch_io:"https://iguessfive.itch.io/"},projects:[{title:"GMTK Jame 2025 : Ouroboros",description:'A jam game with the theme "loop". It is a puzzle game inspired by classic snake.',technologies:["Godot"],link:"https://iguessfive.itch.io/ouro"}],library:[{title:"The Art of Game Design",author:"Jesse Schell"},{title:"Slow Productivity",author:"Cal Newport"},{title:"Deep Work",author:"Cal Newport"},{title:"Code",author:"Charles Petzold"},{title:"Range",author:"David Epstein"},{title:"Thinking in Systems",author:"Donella Meadows"}]}}function a(t){return`
    <section class="about-section">
      <h2>About Me</h2>
      <p class="bio">${t.bio}</p>
    </section>
  `}function l(t){return`
    <section class="projects-section">
      <h2>Projects</h2>
      <div class="projects-grid">
        ${t.map(e=>`
          <div class="project-card">
            <h3>${e.title}</h3>
            <p>${e.description}</p>
            <div class="tech-tags">
              ${e.technologies.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
            </div>
            ${e.link?`<a href="${e.link}" class="project-link">View Project</a>`:""}
          </div>
        `).join("")}
      </div>
    </section>
  `}function u(t){return`
    <section class="library-section">
      <h2>Recommended Readings</h2>
      <div class="library-grid">
        ${t.map(e=>`
          <div class="book-item">
            <h3>${e.title}</h3>
            ${e.author?`<p class="author">by ${e.author}</p>`:""}
          </div>
        `).join("")}
      </div>
    </section>
  `}function d(t){const e=Object.entries(t).filter(([s,r])=>r).map(([s,r])=>`<a href="${r}" target="_blank" class="social-link">${s.replace("_",".")}</a>`).join("");return e?`
    <section class="social-section">
      <h2>Connect</h2>
      <div class="social-links">
        ${e}
      </div>
    </section>
  `:""}function h(){const t=c();document.querySelector("#app").innerHTML=`
    <div>
      <header class="main-header">
        <h1>${t.d_name}</h1>
      </header>
      
      <main class="main-content">
        ${a(t)}
        ${l(t.projects)}
        ${u(t.library)}
        ${d(t.social)}
      </main>
      
      <footer class="site-footer">
        <p>&copy; 2025 ${t.d_name}. Built with TypeScript & Vite.</p>
      </footer>
    </div>
  `}h();
