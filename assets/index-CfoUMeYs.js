(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function r(){return{d_name:"iguessfive",bio:"Welcome to my personal website!",email:"iguessfive@gmail.com",social:{github:"https://github.com/iguessfive",youtube:"https://www.youtube.com/@iguessfive",itch_io:"https://iguessfive.itch.io/"},projects:[{title:"GMTK Jame 2025 : Ouroboros",description:'A jam game with the theme "loop". It is a puzzle game inspired by classic snake.',technologies:["Godot"],link:"https://iguessfive.itch.io/ouro"}]}}function a(t){return`
    <section class="about-section">
      <h2>About Me</h2>
      <p class="bio">${t.bio}</p>
    </section>
  `}function l(t){return`
    <section class="projects-section">
      <h2>Projects</h2>
      <div class="projects-grid">
        ${t.map(i=>`
          <div class="project-card">
            <h3>${i.title}</h3>
            <p>${i.description}</p>
            <div class="tech-tags">
              ${i.technologies.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
            </div>
            ${i.link?`<a href="${i.link}" class="project-link">View Project</a>`:""}
          </div>
        `).join("")}
      </div>
    </section>
  `}function u(t){const i=Object.entries(t).filter(([s,n])=>n).map(([s,n])=>`<a href="${n}" target="_blank" class="social-link">${s.replace("_",".")}</a>`).join("");return i?`
    <section class="social-section">
      <h2>Connect</h2>
      <div class="social-links">
        ${i}
      </div>
    </section>
  `:""}function d(){const t=r();document.querySelector("#app").innerHTML=`
    <div>
      <header class="main-header">
        <h1>${t.d_name}</h1>
      </header>
      
      <main class="main-content">
        ${a(t)}
        ${l(t.projects)}
        ${u(t.social)}
      </main>
      
      <footer class="site-footer">
        <p>&copy; 2025 ${t.d_name}. Built with TypeScript & Vite.</p>
      </footer>
    </div>
  `}d();
