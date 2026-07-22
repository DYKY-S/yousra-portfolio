"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById("siteNav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const burger = document.getElementById("burgerBtn");
    const panel = document.getElementById("mobilePanel");
    const onBurgerClick = () => {
      if (!panel || !burger) return;
      const open = panel.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };
    burger?.addEventListener("click", onBurgerClick);

    const panelLinks = panel ? Array.from(panel.querySelectorAll("a")) : [];
    const onPanelLinkClick = () => {
      panel?.classList.remove("open");
      burger?.classList.remove("open");
      burger?.setAttribute("aria-expanded", "false");
    };
    panelLinks.forEach((a) => a.addEventListener("click", onPanelLinkClick));

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));

    const ids = [
      "accueil",
      "about",
      "parcours",
      "kcc",
      "shopify",
      "wordpress",
      "uxui",
      "contact",
    ];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const navLinks = Array.from(
      document.querySelectorAll(".nav-links a[data-nav]")
    );
    const navIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + id
              );
            });
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((sec) => navIO.observe(sec));

    return () => {
      window.removeEventListener("scroll", onScroll);
      burger?.removeEventListener("click", onBurgerClick);
      panelLinks.forEach((a) =>
        a.removeEventListener("click", onPanelLinkClick)
      );
      io.disconnect();
      navIO.disconnect();
    };
  }, []);

  return (
    <>
<a href="#accueil" className="skip-link">Aller au contenu</a>
<nav className="nav" id="siteNav">
  <div className="nav-inner">
    <a href="#accueil" className="ys-mark" aria-label="Retour à l'accueil">YS</a>
    <ul className="nav-links">
      <li><a href="#accueil" data-nav>Accueil</a></li>
      <li><a href="#about" data-nav>À propos</a></li>
      <li><a href="#parcours" data-nav>Parcours</a></li>
      <li><a href="#kcc" data-nav>KCC</a></li>
      <li><a href="#shopify" data-nav>Shopify</a></li>
      <li><a href="#wordpress" data-nav>WordPress</a></li>
      <li><a href="#uxui" data-nav>UX/UI</a></li>
      <li><a href="/Yousra_Sab_CV.pdf" download="Yousra_Sab_CV.pdf">CV</a></li>
    </ul>
    <div className="nav-cta">
      <a href="#contact" className="btn btn-ghost">Contact</a>
      <button className="nav-burger" id="burgerBtn" aria-label="Ouvrir le menu" aria-expanded="false"><span></span></button>
    </div>
  </div>
</nav>
<div className="mobile-panel" id="mobilePanel">
  <a href="#accueil" data-nav>Accueil</a>
  <a href="#about" data-nav>À propos</a>
  <a href="#parcours" data-nav>Parcours</a>
  <a href="#kcc" data-nav>KCC</a>
  <a href="#shopify" data-nav>Shopify</a>
  <a href="#wordpress" data-nav>WordPress</a>
  <a href="#uxui" data-nav>UX/UI</a>
  <a href="/Yousra_Sab_CV.pdf" download="Yousra_Sab_CV.pdf">Télécharger le CV</a>
  <a href="#contact" className="btn btn-primary">Me contacter</a>
</div>

<section className="hero" id="accueil">
  <div className="hero-glow" aria-hidden="true"></div>
  <div className="container hero-grid">
    <div className="hero-copy">
      <div className="hero-kicker"><span className="dot"></span> Casablanca, Maroc — Disponible</div>
      <h1>Yousra Sab</h1>
      <p className="role">Digital Marketing Specialist</p>
      <p className="lede">Je participe à la conception, au déploiement et à l'optimisation de projets digitaux complets — du site à la campagne, jusqu'aux résultats.</p>
      <div className="hero-actions">
        <a href="#kcc" className="btn btn-primary">Voir mes projets <span className="btn-arrow">→</span></a>
        <a href="#contact" className="btn btn-ghost">Me contacter</a>
      </div>
      <div className="hero-meta">
        <div><span>Formation</span><strong>Master E-Business &amp; Marketing Digital</strong></div>
        <div><span>Expérience</span><strong>Stage 6 mois — Kléber Assurances Conseils</strong></div>
      </div>
      <div className="hero-scroll-cta"><span className="line"></span> Faites défiler pour découvrir le parcours</div>
    </div>
    <div className="hero-portrait">
      <div className="portrait-ring" aria-hidden="true"></div>
      <div className="portrait-frame">
        <img src="/images/ys-portrait.jpg" alt="Portrait de Yousra Sab" />
      </div>
      <img src="/images/mascot-ink.png" alt="" className="portrait-mascot" aria-hidden="true" />
    </div>
  </div>
</section>

<section className="section" id="about">
  <div className="container about-grid">
    <div className="about-text reveal">
      <div className="eyebrow">À propos</div>
      <h2 className="section-title" style={{marginBottom: '26px'}}>Comprendre avant d'agir</h2>
      <p>Diplômée d'un Master Spécialisé en E-Business et Marketing Digital (ENCG Settat), j'ai construit mon parcours autour d'une même logique : comprendre un besoin avant de construire une solution.</p>
      <p>Un stage de six mois chez Kléber Assurances Conseils m'a permis de participer à un projet digital dans son ensemble — du site à la campagne, jusqu'au suivi des résultats. En parallèle, plusieurs projets académiques m'ont amenée à structurer un site e-commerce, concevoir un site web et travailler sur l'expérience utilisateur d'une application mobile.</p>
      <p>Ce qui m'intéresse dans le marketing digital, c'est la mesure : savoir ce qui fonctionne, comprendre pourquoi, et ajuster en conséquence. Chaque projet de ce portfolio suit cette même logique — un objectif, une méthode, un résultat.</p>
    </div>
    <div className="skills-panel reveal reveal-delay-1">
      <h3>Outils &amp; compétences</h3>
      <div className="skill-group">
        <span className="label">Acquisition &amp; mesure</span>
        <div className="chip-row">
          <span className="chip">Meta Ads Manager</span>
          <span className="chip">Meta Business Suite</span>
          <span className="chip">Google Analytics 4</span>
          <span className="chip">Google Tag Manager</span>
          <span className="chip">Search Console</span>
        </div>
      </div>
      <div className="skill-group">
        <span className="label">Sites &amp; e-commerce</span>
        <div className="chip-row">
          <span className="chip">Webflow</span>
          <span className="chip">Shopify</span>
          <span className="chip">WordPress</span>
          <span className="chip">HTML / CSS</span>
        </div>
      </div>
      <div className="skill-group">
        <span className="label">UX/UI &amp; conception</span>
        <div className="chip-row">
          <span className="chip">Figma</span>
        </div>
      </div>
      <div className="skill-group">
        <span className="label">Veille &amp; IA</span>
        <div className="chip-row">
          <span className="chip">SimilarWeb</span>
          <span className="chip">SEMrush</span>
          <span className="chip">ChatGPT</span>
          <span className="chip">Google AI Studio</span>
        </div>
      </div>
      <div className="skill-group">
        <span className="label">Langues</span>
        <div className="chip-row">
          <span className="chip">Arabe</span>
          <span className="chip">Français</span>
          <span className="chip">Anglais</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section section-alt" id="parcours">
  <div className="container">
    <div className="section-head reveal">
      <div className="eyebrow">Parcours</div>
      <h2 className="section-title">Expérience &amp; formation</h2>
      <p>Un aperçu rapide du parcours — les projets qui suivent entrent dans le détail.</p>
    </div>

    <div className="timeline reveal">
      <div className="tl-item">
        <div className="tl-top">
          <span className="tl-role">Chargée de Marketing Digital — Stage</span>
          <span className="tl-period">Mai 2025 – Novembre 2025</span>
        </div>
        <div className="tl-org">Kléber Assurances Conseils · Casablanca, Maroc</div>
        <p>Conception et déploiement d'un dispositif digital complet pour une entreprise sans présence en ligne : site Webflow, tracking, campagnes d'acquisition et suivi des résultats.</p>
      </div>
      <div className="tl-item">
        <div className="tl-top">
          <span className="tl-role">Chargée de clientèle — Prospection &amp; Vente à distance</span>
          <span className="tl-period">Janvier 2020 – Septembre 2020</span>
        </div>
        <div className="tl-org">Right Place Call Morocco · Casablanca, Maroc</div>
        <p>Qualification des besoins de prospects français par téléphone et commercialisation d'offres à distance, avec suivi de la relation client sur la durée.</p>
      </div>
    </div>

    <div className="edu-grid">
      <div className="edu-card reveal">
        <span className="tl-period">2024 – 2025</span>
        <h4>Master Spécialisé — E-Business &amp; Marketing Digital</h4>
        <div className="org">ENCG Settat</div>
        <p>Moyenne M1 : 17,58/20 · Moyenne M2 : 15,60/20 · PFE : 16/20 — « Optimisation de la génération de leads qualifiés via Meta Ads »</p>
      </div>
      <div className="edu-card reveal reveal-delay-1">
        <span className="tl-period">2016 – 2019</span>
        <h4>Licence Fondamentale — Sciences Économiques et Gestion</h4>
        <div className="org">FSJES Ain Chock, Université Hassan II</div>
        <p>Option Gestion.</p>
      </div>
    </div>

    <div className="reveal reveal-delay-2" style={{marginTop: '56px'}}>
      <h3 style={{fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--ink-faint)', marginBottom: '6px', fontFamily: 'var(--ff-body)', fontWeight: '600'}}>Certifications &amp; programmes</h3>
      <ul className="cert-list">
        <li><span className="cname">Inbound Marketing — HubSpot Academy</span><span className="cdate">Décembre 2024</span></li>
        <li><span className="cname">Create your e-commerce store with Shopify — Coursera</span><span className="cdate">2024</span></li>
        <li><span className="cname">Programme Girls in Marketing</span><span className="cdate">Mai 2025</span></li>
        <li><span className="cname">Programme Girls in Marketing</span><span className="cdate">Octobre 2024</span></li>
      </ul>
    </div>
  </div>
</section>

<section className="case" id="kcc">
  <div className="container">
    <div className="case-head-row reveal">
      <span className="case-num">Étude de cas 01 / 04</span>
    </div>
    <h2 className="case-title reveal">KCC — Kléber Assurances Conseils</h2>
    <p className="case-positioning reveal reveal-delay-1">Une stratégie d'acquisition digitale complète.</p>
    <div className="case-tags reveal reveal-delay-1">
      <span className="chip">Webflow</span>
      <span className="chip">Meta Ads</span>
      <span className="chip">Google Analytics 4</span>
      <span className="chip">Google Tag Manager</span>
      <span className="chip">Search Console</span>
    </div>
    <p className="case-lede reveal reveal-delay-2">Kléber Assurances Conseils accompagne les particuliers vers des solutions de mutuelle santé adaptées, notamment les seniors. L'entreprise ne disposait d'aucune présence digitale avant ce projet.</p>

    <div className="case-block reveal">
      <div className="case-block-head"><span className="case-block-tag">Le défi</span></div>
      <p>Créer une présence digitale capable de générer des leads qualifiés, en partant de zéro — sans site, sans tracking, sans campagne active.</p>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><span className="case-block-tag">Mon rôle</span></div>
      <div className="role-card">
        <img src="/images/mascot-ink.png" alt="" className="mascot-sm" />
        <p>Chargée de Marketing Digital pendant six mois (mai–novembre 2025) : conception du site, mise en place du tracking et gestion des campagnes d'acquisition, en coordination avec l'équipe de conseillers.</p>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><h3>Construction de la stratégie</h3></div>
      <div className="process-flow">
        <div className="process-step"><span className="n">1</span> Besoin</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">2</span> Site Webflow</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">3</span> Tracking</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">4</span> Campagnes Meta Ads</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">5</span> Optimisations</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">6</span> Résultats</div>
      </div>

      <p>Site conçu et déployé sur Webflow, pensé pour une audience senior : parcours de simulation, garanties mises en avant.</p>
      <div className="shots">
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-webflow-site.jpg" alt="Page d'accueil du site Webflow de Kléber Assurances Conseils" /></div>
          <figcaption>Site Webflow — page d'accueil</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-ads-creative.jpg" alt="Créations publicitaires Meta Ads pour Kléber Assurances Conseils" /></div>
          <figcaption>Créations publicitaires — campagnes seniors</figcaption>
        </figure>
      </div>

      <p style={{marginTop: '32px'}}>Tracking complet mis en place — Meta Pixel, Google Analytics 4, Google Tag Manager — pour mesurer chaque campagne et orienter les décisions.</p>
      <div className="shots thirds">
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-tracking.jpg" alt="Tableau de bord Google Analytics 4 du projet KCC" /></div>
          <figcaption>Google Analytics 4</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-gtm.jpg" alt="Espace de travail Google Tag Manager du projet KCC (identifiants masqués)" /></div>
          <figcaption>Google Tag Manager</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-pixel.jpg" alt="Gestionnaire d'événements Meta Pixel du projet KCC (identifiants masqués)" /></div>
          <figcaption>Meta Pixel — Events Manager</figcaption>
        </figure>
      </div>
      <div className="shots" style={{marginTop: '20px'}}>
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-seo.jpg" alt="Rapport Google Search Console du site Kléber Assurances Conseils" /></div>
          <figcaption>Visibilité organique — Search Console</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/kcc-meta-results.jpg" alt="Résultats Meta Business Suite des campagnes Kléber Assurances Conseils" /></div>
          <figcaption>Résultats des campagnes — Meta Business Suite</figcaption>
        </figure>
      </div>

      <div className="callout">
        <div className="icon">✓</div>
        <p><strong>Test Meta Andromeda</strong> (14 jours, ~500 €) : CPL de 11,33 € contre 5,47 € en système classique. Recommandation d'arrêt du test et maintien de la configuration initiale, documentée et transmise.</p>
      </div>

      <p>Retour terrain complémentaire avec 12 conseillers (joignabilité, transformation, qualité), pour orienter l'optimisation des formulaires.</p>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><span className="case-block-tag">Résultats</span></div>
      <p style={{color: 'var(--ink-soft)', fontSize: '15px', marginBottom: '18px'}}><strong style={{color: 'var(--ink)'}}>Phase d'acquisition — octobre à novembre 2025</strong>, campagnes Meta Ads du projet KCC (sur les six mois de stage, mai–novembre 2025).</p>
      <div className="kpi-grid">
        <div className="kpi"><div className="val">2 879</div><div className="lbl">Leads générés</div></div>
        <div className="kpi"><div className="val">5,47 €</div><div className="lbl">Coût par lead</div></div>
        <div className="kpi"><div className="val">4,59</div><div className="lbl">ROAS</div></div>
        <div className="kpi"><div className="val">63</div><div className="lbl">Contrats signés</div></div>
        <div className="kpi"><div className="val">72 295 €</div><div className="lbl">Chiffre d'affaires généré</div></div>
        <div className="kpi"><div className="val">250 €</div><div className="lbl">Coût par acquisition</div></div>
        <div className="kpi"><div className="val">4,1/5</div><div className="lbl">Satisfaction conseillers</div></div>
      </div>
      <p className="kpi-context">Chiffres mesurés sur la phase d'acquisition (octobre–novembre 2025) uniquement — pas sur l'ensemble du stage.</p>
    </div>

    <div className="case-block reveal">
      <div className="learn-card">
        <div>
          <span className="label">Ce que j'ai appris</span>
          <p>Une stratégie digitale ne commence pas avec les campagnes : le site, le tracking et le suivi terrain conditionnent la qualité des résultats.</p>
        </div>
      </div>
    </div>

    <div className="case-next reveal">
      <div className="txt"><span>Projet suivant</span><strong>Shopify — Paravie</strong></div>
      <a href="#shopify" aria-label="Voir le projet Shopify"><img src="/images/mascot-ink.png" className="case-next-mascot mascot" alt="" /></a>
    </div>
  </div>
</section>

<section className="case case-divider section-alt" id="shopify">
  <div className="container">
    <div className="case-head-row reveal">
      <span className="case-num">Étude de cas 02 / 04</span>
    </div>
    <h2 className="case-title reveal">Shopify — Paravie</h2>
    <p className="case-positioning reveal reveal-delay-1">Un projet académique de conception d'une boutique e-commerce, basé sur une analyse préalable du secteur.</p>
    <div className="case-tags reveal reveal-delay-1">
      <span className="chip">Shopify</span>
      <span className="chip">E-commerce</span>
      <span className="chip">Brand guidelines</span>
    </div>
    <p className="case-lede reveal reveal-delay-2">Projet académique (Master, ENCG Settat) : concevoir Paravie, une boutique en ligne de parapharmacie, sur Shopify — thème, catalogue par univers, fiches produits et tunnel de commande.</p>

    <div className="case-block reveal">
      <div className="case-block-head"><h3>La boutique Paravie — résultat final</h3></div>
      <div className="shots">
        <figure className="shot">
          <div className="frame"><img src="/images/shop-home.jpg" alt="Page d'accueil de la boutique Shopify Paravie" /></div>
          <figcaption>Page d'accueil</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/shop-collection.jpg" alt="Page collection produits de la boutique Paravie" /></div>
          <figcaption>Collection produits</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/shop-product.jpg" alt="Fiche produit de la boutique Paravie" /></div>
          <figcaption>Fiche produit</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/shop-cart.jpg" alt="Panier et tunnel de commande de la boutique Paravie" /></div>
          <figcaption>Panier &amp; commande</figcaption>
        </figure>
      </div>
      <div className="shots single" style={{marginTop: '20px'}}>
        <figure className="shot">
          <div className="frame"><img src="/images/shop-mobile.jpg" alt="Version mobile responsive de la boutique Paravie" /></div>
          <figcaption>Version mobile</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><h3>Identité de marque</h3></div>
      <div className="shots">
        <figure className="shot">
          <div className="frame"><img src="/images/shop-logo.jpg" alt="Logo de la marque Paravie" /></div>
          <figcaption>Logo</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/shop-palette.jpg" alt="Palette de couleurs de la marque Paravie" /></div>
          <figcaption>Palette de couleurs</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/shop-typography.jpg" alt="Typographie de la marque Paravie" /></div>
          <figcaption>Typographie</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><span className="case-block-tag">Pourquoi ces choix</span></div>
      <p>Avant la conception, un benchmark de trois parapharmacies en ligne marocaines a orienté les décisions de structure et de navigation.</p>
      <div className="shots single">
        <figure className="shot">
          <div className="frame"><img src="/images/shop-benchmark.jpg" alt="Matrice comparative de trois parapharmacies en ligne" /></div>
          <figcaption>Benchmark — matrice comparative</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="learn-card">
        <div>
          <span className="label">Ce que j'ai appris</span>
          <p>L'importance du benchmark avant la conception et la cohérence d'une navigation e-commerce. Projet académique : aucune vente réelle n'a été réalisée.</p>
        </div>
      </div>
    </div>

    <div className="case-next reveal">
      <div className="txt"><span>Projet suivant</span><strong>WordPress — Étape Voyages</strong></div>
      <a href="#wordpress" aria-label="Voir le projet WordPress"><img src="/images/mascot-ink.png" className="case-next-mascot mascot" alt="" /></a>
    </div>
  </div>
</section>

<section className="case case-divider" id="wordpress">
  <div className="container">
    <div className="case-head-row reveal">
      <span className="case-num">Étude de cas 03 / 04</span>
    </div>
    <h2 className="case-title reveal">WordPress — Étape Voyages</h2>
    <p className="case-positioning reveal reveal-delay-1">Un projet académique de conception d'un site pour une agence de voyages, centré sur l'organisation de l'information.</p>
    <div className="case-tags reveal reveal-delay-1">
      <span className="chip">WordPress</span>
      <span className="chip">Architecture de site</span>
      <span className="chip">UX web</span>
    </div>
    <p className="case-lede reveal reveal-delay-2">Projet académique individuel (ENCG Settat) : concevoir un site WordPress pour une agence de voyages, Étape Voyages, avec une navigation claire vers les offres.</p>

    <div className="case-block reveal">
      <div className="case-block-head"><h3>Le site</h3></div>
      <p>Architecture, création des pages, organisation du contenu et parcours utilisateur — de la découverte des destinations jusqu'à la prise de contact.</p>
      <div className="process-flow">
        <div className="process-step"><span className="n">1</span> Accueil</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">2</span> Voyages</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">3</span> Boutique</div>
        <span className="process-arrow">→</span>
        <div className="process-step"><span className="n">4</span> Contact</div>
      </div>
      <div className="shots">
        <figure className="shot">
          <div className="frame"><img src="/images/wp-home.jpg" alt="Page d'accueil du site WordPress Étape Voyages" /></div>
          <figcaption>Page d'accueil</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/wp-destinations.jpg" alt="Page destinations du site Étape Voyages" /></div>
          <figcaption>Page destinations</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/wp-boutique.jpg" alt="Boutique du site Étape Voyages" /></div>
          <figcaption>Boutique — objets de voyage</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/wp-contact.jpg" alt="Page contact du site Étape Voyages avec carte" /></div>
          <figcaption>Page contact &amp; localisation</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="learn-card">
        <div>
          <span className="label">Ce que j'ai appris</span>
          <p>Organiser un site avant de le construire, et structurer les contenus autour du parcours utilisateur.</p>
        </div>
      </div>
    </div>

    <div className="case-next reveal">
      <div className="txt"><span>Projet suivant</span><strong>UX/UI — InDrive</strong></div>
      <a href="#uxui" aria-label="Voir le projet UX/UI"><img src="/images/mascot-ink.png" className="case-next-mascot mascot" alt="" /></a>
    </div>
  </div>
</section>

<section className="case case-divider section-alt" id="uxui">
  <div className="container">
    <div className="case-head-row reveal">
      <span className="case-num">Étude de cas 04 / 04</span>
    </div>
    <h2 className="case-title reveal">UX/UI — InDrive</h2>
    <p className="case-positioning reveal reveal-delay-1">Un projet académique réalisé dans le cadre du module UX/UI Design, portant sur une solution mobile conçue sur Figma.</p>
    <div className="case-tags reveal reveal-delay-1">
      <span className="chip">Figma</span>
      <span className="chip">Recherche utilisateur</span>
      <span className="chip">Prototype</span>
    </div>
    <p className="case-lede reveal reveal-delay-2">Projet réalisé en équipe de trois : améliorer l'étape de sélection du chauffeur dans le parcours InDrive, à partir d'une démarche centrée utilisateur.</p>

    <div className="case-block reveal">
      <div className="case-block-head"><span className="case-block-tag">Persona</span></div>
      <p>Après avoir proposé un prix, l'utilisateur reçoit plusieurs offres de chauffeurs avec peu d'informations pour décider — et peu de temps pour comparer.</p>
      <div className="shots single">
        <figure className="shot">
          <div className="frame"><img src="/images/uxui-persona.jpg" alt="Fiche persona utilisée pour le diagnostic UX du projet InDrive" /></div>
          <figcaption>Persona</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><span className="case-block-tag">Parcours utilisateur</span></div>
      <p>Du trajet proposé jusqu'au choix du chauffeur : la séquence d'écrans qui structure la décision.</p>
      <div className="shots single">
        <figure className="shot">
          <div className="frame"><img src="/images/uxui-flow.jpg" alt="Parcours utilisateur de la réservation à la sélection du chauffeur sur InDrive" /></div>
          <figcaption>Parcours utilisateur</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="case-block-head"><h3>Interfaces &amp; prototype</h3></div>
      <div className="role-card">
        <img src="/images/mascot-ink.png" alt="" className="mascot-sm" />
        <p>J'ai réalisé la majorité des maquettes haute fidélité et du prototype interactif, avec les deux autres membres de l'équipe.</p>
      </div>
      <div className="shots" style={{marginTop: '24px'}}>
        <figure className="shot">
          <div className="frame"><img src="/images/uxui-hifi.jpg" alt="Maquette haute fidélité de l'écran de sélection du chauffeur" /></div>
          <figcaption>Interface haute fidélité</figcaption>
        </figure>
        <figure className="shot">
          <div className="frame"><img src="/images/uxui-prototype.jpg" alt="Écran du prototype interactif Figma du parcours de sélection du chauffeur" /></div>
          <figcaption>Prototype interactif</figcaption>
        </figure>
      </div>
    </div>

    <div className="case-block reveal">
      <div className="learn-card">
        <div>
          <span className="label">Ce que j'ai appris</span>
          <p>Structurer un parcours utilisateur à partir d'un besoin identifié — une compétence complémentaire à l'acquisition digitale. Les tests utilisateurs n'ont pas été menés dans ce cadre académique.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section" id="contact">
  <div className="container">
    <div className="contact-panel reveal">
      <div className="contact-glow" aria-hidden="true"></div>
      <div>
        <h2>Discutons de votre prochain projet digital.</h2>
        <p>Un stage, un projet freelance ou simplement un échange autour du marketing digital — je réponds volontiers.</p>
        <div className="contact-actions">
          <a href="mailto:yousrasab05@gmail.com" className="btn btn-primary">Envoyer un e-mail <span className="btn-arrow">→</span></a>
          <a href="https://linkedin.com/in/yousra-sab" target="_blank" rel="noopener" className="btn btn-ghost">Voir mon LinkedIn</a>
          <a href="/Yousra_Sab_CV.pdf" download="Yousra_Sab_CV.pdf" className="btn btn-ghost">Télécharger le CV</a>
        </div>
      </div>
      <div className="contact-card">
        <img src="/images/mascot-white.png" alt="" className="mascot" />
        <div className="contact-row"><span>E-mail</span><a href="mailto:yousrasab05@gmail.com">yousrasab05@gmail.com</a></div>
        <div className="contact-row"><span>LinkedIn</span><a href="https://linkedin.com/in/yousra-sab" target="_blank" rel="noopener">/in/yousra-sab</a></div>
        <div className="contact-row"><span>Localisation</span><strong>Casablanca, Maroc</strong></div>
      </div>
    </div>
  </div>
</section>

<footer id="site-footer">
  <div className="container">
    <div className="footer-top">
      <div className="footer-brand">
        <span className="ys-mark">YS</span>
        <div>
          <div className="name">Yousra Sab</div>
          <div className="role">Digital Marketing Specialist</div>
        </div>
      </div>
      <div className="footer-links">
        <a href="#about">À propos</a>
        <a href="#kcc">KCC</a>
        <a href="#shopify">Shopify</a>
        <a href="#wordpress">WordPress</a>
        <a href="#uxui">UX/UI</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <div className="footer-bottom">
      <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
        <img src="/images/mascot-ink.png" alt="" style={{width: '22px'}} />
        <span className="footer-quote">Passion always wins.</span>
      </div>
      <span className="footer-copy">© 2026 Yousra Sab — Casablanca, Maroc</span>
    </div>
  </div>
</footer>

    </>
  );
}
