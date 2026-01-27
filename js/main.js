
// Master JS for State: RJ - Persona: Urban Beach Icon
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 780;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const rj_index_section_immigrate_to_rio_de_janeiro = document.getElementById('rj-index-section-immigrate-to-rio-de-janeiro');
  if (rj_index_section_immigrate_to_rio_de_janeiro) {
    gsap.fromTo('#rj-index-section-immigrate-to-rio-de-janeiro', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_form_immigrate_to_rio_de_janeiro = document.getElementById('rj-index-form-immigrate-to-rio-de-janeiro');
  if (rj_index_form_immigrate_to_rio_de_janeiro) {
    gsap.from('#rj-index-form-immigrate-to-rio-de-janeiro input, #rj-index-form-immigrate-to-rio-de-janeiro textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_state_vibe = document.getElementById('rj-index-section-state-vibe');
  if (rj_index_section_state_vibe) {
    gsap.fromTo('#rj-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_quick_facts_snapshot = document.getElementById('rj-index-section-quick-facts-snapshot');
  if (rj_index_section_quick_facts_snapshot) {
    gsap.fromTo('#rj-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_rio_de_janeiro_map = document.getElementById('rj-index-section-rio-de-janeiro-map');
  if (rj_index_section_rio_de_janeiro_map) {
    gsap.fromTo('#rj-index-section-rio-de-janeiro-map', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_cost_of_living_rio_de_janeiro = document.getElementById('rj-index-section-cost-of-living-rio-de-janeiro');
  if (rj_index_section_cost_of_living_rio_de_janeiro) {
    gsap.fromTo('#rj-index-section-cost-of-living-rio-de-janeiro', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_government_context = document.getElementById('rj-index-section-government-context');
  if (rj_index_section_government_context) {
    gsap.fromTo('#rj-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_hero_immigration_notes = document.getElementById('rj-index-hero-immigration-notes');
  if (rj_index_hero_immigration_notes) {
    gsap.fromTo('#rj-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_common_applicant_profiles = document.getElementById('rj-index-list-common-applicant-profiles');
  if (rj_index_list_common_applicant_profiles) {
    gsap.from('#rj-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_economic_drivers = document.getElementById('rj-index-list-economic-drivers');
  if (rj_index_list_economic_drivers) {
    gsap.from('#rj-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_demographics = document.getElementById('rj-index-section-demographics');
  if (rj_index_section_demographics) {
    gsap.fromTo('#rj-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_regional_challenges = document.getElementById('rj-index-section-regional-challenges');
  if (rj_index_section_regional_challenges) {
    gsap.fromTo('#rj-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_regional_opportunities = document.getElementById('rj-index-section-regional-opportunities');
  if (rj_index_section_regional_opportunities) {
    gsap.fromTo('#rj-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_culture_daily_life = document.getElementById('rj-index-section-culture-daily-life');
  if (rj_index_section_culture_daily_life) {
    gsap.fromTo('#rj-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_local_language_expressions = document.getElementById('rj-index-list-local-language-expressions');
  if (rj_index_list_local_language_expressions) {
    gsap.from('#rj-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_food_cuisine = document.getElementById('rj-index-list-food-cuisine');
  if (rj_index_list_food_cuisine) {
    gsap.from('#rj-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_festivals_traditions = document.getElementById('rj-index-list-festivals-traditions');
  if (rj_index_list_festivals_traditions) {
    gsap.from('#rj-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_music_artistic_expression = document.getElementById('rj-index-list-music-artistic-expression');
  if (rj_index_list_music_artistic_expression) {
    gsap.from('#rj-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_sports_recreation = document.getElementById('rj-index-list-sports-recreation');
  if (rj_index_list_sports_recreation) {
    gsap.from('#rj-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_landmarks_historical_sites = document.getElementById('rj-index-list-landmarks-historical-sites');
  if (rj_index_list_landmarks_historical_sites) {
    gsap.from('#rj-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_natural_features = document.getElementById('rj-index-list-natural-features');
  if (rj_index_list_natural_features) {
    gsap.from('#rj-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_parks_protected_areas = document.getElementById('rj-index-list-parks-protected-areas');
  if (rj_index_list_parks_protected_areas) {
    gsap.from('#rj-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_museums_cultural_institutions = document.getElementById('rj-index-list-museums-cultural-institutions');
  if (rj_index_list_museums_cultural_institutions) {
    gsap.from('#rj-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_image_gallery = document.getElementById('rj-index-section-image-gallery');
  if (rj_index_section_image_gallery) {
    gsap.fromTo('#rj-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_useful_government_links = document.getElementById('rj-index-section-useful-government-links');
  if (rj_index_section_useful_government_links) {
    gsap.fromTo('#rj-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_hero_federal_police_immigration_links = document.getElementById('rj-index-hero-federal-police-immigration-links');
  if (rj_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#rj-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_external_references = document.getElementById('rj-index-section-external-references');
  if (rj_index_section_external_references) {
    gsap.fromTo('#rj-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_immigration_services_overview = document.getElementById('rj-index-list-immigration-services-overview');
  if (rj_index_list_immigration_services_overview) {
    gsap.from('#rj-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_why_immigrate_here = document.getElementById('rj-index-section-why-immigrate-here');
  if (rj_index_section_why_immigrate_here) {
    gsap.fromTo('#rj-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section_legal_guidance_disclaimers = document.getElementById('rj-index-section-legal-guidance-disclaimers');
  if (rj_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#rj-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_travel_services = document.getElementById('rj-index-list-travel-services');
  if (rj_index_list_travel_services) {
    gsap.from('#rj-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_list_how_the_process_works = document.getElementById('rj-index-list-how-the-process-works');
  if (rj_index_list_how_the_process_works) {
    gsap.from('#rj-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_index_section__frequently_asked_questions_about_living_in_rio_de_janeiro_ = document.getElementById('rj-index-section--frequently-asked-questions-about-living-in-rio-de-janeiro-');
  if (rj_index_section__frequently_asked_questions_about_living_in_rio_de_janeiro_) {
    gsap.fromTo('#rj-index-section--frequently-asked-questions-about-living-in-rio-de-janeiro-', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_contactcta_section_get_started_in_rio_de_janeiro = document.getElementById('rj-contactcta-section-get-started-in-rio-de-janeiro');
  if (rj_contactcta_section_get_started_in_rio_de_janeiro) {
    gsap.fromTo('#rj-contactcta-section-get-started-in-rio-de-janeiro', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('rj-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (rj_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#rj-renouncingcitizenship-form-renounce-brazilian-citizenship input, #rj-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_quick_facts = document.getElementById('rj-renouncingcitizenship-list-quick-facts');
  if (rj_renouncingcitizenship_list_quick_facts) {
    gsap.from('#rj-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('rj-renouncingcitizenship-list-common-challenges-applicants-face');
  if (rj_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rj-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('rj-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (rj_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rj-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_renunciation_overview = document.getElementById('rj-renouncingcitizenship-section-renunciation-overview');
  if (rj_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#rj-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_form_who_is_this_for = document.getElementById('rj-renouncingcitizenship-form-who-is-this-for');
  if (rj_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#rj-renouncingcitizenship-form-who-is-this-for input, #rj-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_required_documents = document.getElementById('rj-renouncingcitizenship-list-required-documents');
  if (rj_renouncingcitizenship_list_required_documents) {
    gsap.from('#rj-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_process = document.getElementById('rj-renouncingcitizenship-list-process');
  if (rj_renouncingcitizenship_list_process) {
    gsap.from('#rj-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_timelines_deadlines = document.getElementById('rj-renouncingcitizenship-section-timelines-deadlines');
  if (rj_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rj-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_fees_costs = document.getElementById('rj-renouncingcitizenship-section-fees-costs');
  if (rj_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#rj-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('rj-renouncingcitizenship-list-risks-common-mistakes');
  if (rj_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#rj-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('rj-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (rj_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_rio_de_janeiro_specific_context = document.getElementById('rj-renouncingcitizenship-section-rio-de-janeiro-specific-context');
  if (rj_renouncingcitizenship_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-renouncingcitizenship-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_what_our_clients_say = document.getElementById('rj-renouncingcitizenship-section-what-our-clients-say');
  if (rj_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rj-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('rj-renouncingcitizenship-section-frequently-asked-questions');
  if (rj_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rj-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_international_support = document.getElementById('rj-renouncingcitizenship-section-international-support');
  if (rj_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#rj-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_our_credentials = document.getElementById('rj-renouncingcitizenship-list-our-credentials');
  if (rj_renouncingcitizenship_list_our_credentials) {
    gsap.from('#rj-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_list_related_services = document.getElementById('rj-renouncingcitizenship-list-related-services');
  if (rj_renouncingcitizenship_list_related_services) {
    gsap.from('#rj-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('rj-renouncingcitizenship-section-youre-in-good-hands');
  if (rj_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rj-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_renouncingcitizenship_section_21 = document.getElementById('rj-renouncingcitizenship-section-21');
  if (rj_renouncingcitizenship_section_21) {
    gsap.fromTo('#rj-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('rj-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (rj_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#rj-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #rj-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_quick_facts = document.getElementById('rj-provisional-list-quick-facts');
  if (rj_provisional_list_quick_facts) {
    gsap.from('#rj-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_common_challenges_applicants_face = document.getElementById('rj-provisional-list-common-challenges-applicants-face');
  if (rj_provisional_list_common_challenges_applicants_face) {
    gsap.from('#rj-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_how_we_solve_these_challenges = document.getElementById('rj-provisional-list-how-we-solve-these-challenges');
  if (rj_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#rj-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_naturalisation_overview = document.getElementById('rj-provisional-section-naturalisation-overview');
  if (rj_provisional_section_naturalisation_overview) {
    gsap.fromTo('#rj-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_form_who_is_this_naturalisation_for = document.getElementById('rj-provisional-form-who-is-this-naturalisation-for');
  if (rj_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#rj-provisional-form-who-is-this-naturalisation-for input, #rj-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_required_documents = document.getElementById('rj-provisional-list-required-documents');
  if (rj_provisional_list_required_documents) {
    gsap.from('#rj-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_application_process = document.getElementById('rj-provisional-list-application-process');
  if (rj_provisional_list_application_process) {
    gsap.from('#rj-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_timelines_deadlines = document.getElementById('rj-provisional-section-timelines-deadlines');
  if (rj_provisional_section_timelines_deadlines) {
    gsap.fromTo('#rj-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_fees_costs = document.getElementById('rj-provisional-section-fees-costs');
  if (rj_provisional_section_fees_costs) {
    gsap.fromTo('#rj-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_risks_common_mistakes = document.getElementById('rj-provisional-list-risks-common-mistakes');
  if (rj_provisional_list_risks_common_mistakes) {
    gsap.from('#rj-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_diy_vs_professional_assistance = document.getElementById('rj-provisional-section-diy-vs-professional-assistance');
  if (rj_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_rio_de_janeiro_specific_context = document.getElementById('rj-provisional-section-rio-de-janeiro-specific-context');
  if (rj_provisional_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-provisional-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_what_our_clients_say = document.getElementById('rj-provisional-section-what-our-clients-say');
  if (rj_provisional_section_what_our_clients_say) {
    gsap.fromTo('#rj-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_frequently_asked_questions = document.getElementById('rj-provisional-section-frequently-asked-questions');
  if (rj_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#rj-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_international_support = document.getElementById('rj-provisional-section-international-support');
  if (rj_provisional_section_international_support) {
    gsap.fromTo('#rj-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_our_credentials = document.getElementById('rj-provisional-list-our-credentials');
  if (rj_provisional_list_our_credentials) {
    gsap.from('#rj-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_list_related_services = document.getElementById('rj-provisional-list-related-services');
  if (rj_provisional_list_related_services) {
    gsap.from('#rj-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_youre_in_good_hands = document.getElementById('rj-provisional-section-youre-in-good-hands');
  if (rj_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#rj-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_provisional_section_21 = document.getElementById('rj-provisional-section-21');
  if (rj_provisional_section_21) {
    gsap.fromTo('#rj-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('rj-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (rj_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#rj-special-form-special-naturalisation-in-brazil-for-particular-cases input, #rj-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_quick_facts = document.getElementById('rj-special-list-quick-facts');
  if (rj_special_list_quick_facts) {
    gsap.from('#rj-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_common_challenges_applicants_face = document.getElementById('rj-special-list-common-challenges-applicants-face');
  if (rj_special_list_common_challenges_applicants_face) {
    gsap.from('#rj-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_how_we_solve_these_challenges = document.getElementById('rj-special-list-how-we-solve-these-challenges');
  if (rj_special_list_how_we_solve_these_challenges) {
    gsap.from('#rj-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_naturalisation_overview = document.getElementById('rj-special-section-naturalisation-overview');
  if (rj_special_section_naturalisation_overview) {
    gsap.fromTo('#rj-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_form_who_is_this_naturalisation_for = document.getElementById('rj-special-form-who-is-this-naturalisation-for');
  if (rj_special_form_who_is_this_naturalisation_for) {
    gsap.from('#rj-special-form-who-is-this-naturalisation-for input, #rj-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_required_documents = document.getElementById('rj-special-list-required-documents');
  if (rj_special_list_required_documents) {
    gsap.from('#rj-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_application_process = document.getElementById('rj-special-list-application-process');
  if (rj_special_list_application_process) {
    gsap.from('#rj-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_timelines_deadlines = document.getElementById('rj-special-section-timelines-deadlines');
  if (rj_special_section_timelines_deadlines) {
    gsap.fromTo('#rj-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_fees_costs = document.getElementById('rj-special-section-fees-costs');
  if (rj_special_section_fees_costs) {
    gsap.fromTo('#rj-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_risks_common_mistakes = document.getElementById('rj-special-list-risks-common-mistakes');
  if (rj_special_list_risks_common_mistakes) {
    gsap.from('#rj-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_diy_vs_professional_assistance = document.getElementById('rj-special-section-diy-vs-professional-assistance');
  if (rj_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_rio_de_janeiro_specific_context = document.getElementById('rj-special-section-rio-de-janeiro-specific-context');
  if (rj_special_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-special-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_what_our_clients_say = document.getElementById('rj-special-section-what-our-clients-say');
  if (rj_special_section_what_our_clients_say) {
    gsap.fromTo('#rj-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_frequently_asked_questions = document.getElementById('rj-special-section-frequently-asked-questions');
  if (rj_special_section_frequently_asked_questions) {
    gsap.fromTo('#rj-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_international_support = document.getElementById('rj-special-section-international-support');
  if (rj_special_section_international_support) {
    gsap.fromTo('#rj-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_our_credentials = document.getElementById('rj-special-list-our-credentials');
  if (rj_special_list_our_credentials) {
    gsap.from('#rj-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_list_related_services = document.getElementById('rj-special-list-related-services');
  if (rj_special_list_related_services) {
    gsap.from('#rj-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_youre_in_good_hands = document.getElementById('rj-special-section-youre-in-good-hands');
  if (rj_special_section_youre_in_good_hands) {
    gsap.fromTo('#rj-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_special_section_21 = document.getElementById('rj-special-section-21');
  if (rj_special_section_21) {
    gsap.fromTo('#rj-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('rj-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (rj_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#rj-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #rj-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_quick_facts = document.getElementById('rj-ordinary-list-quick-facts');
  if (rj_ordinary_list_quick_facts) {
    gsap.from('#rj-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_common_challenges_applicants_face = document.getElementById('rj-ordinary-list-common-challenges-applicants-face');
  if (rj_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#rj-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_how_we_solve_these_challenges = document.getElementById('rj-ordinary-list-how-we-solve-these-challenges');
  if (rj_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rj-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_naturalisation_overview = document.getElementById('rj-ordinary-section-naturalisation-overview');
  if (rj_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#rj-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_form_who_is_this_naturalisation_for = document.getElementById('rj-ordinary-form-who-is-this-naturalisation-for');
  if (rj_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rj-ordinary-form-who-is-this-naturalisation-for input, #rj-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_required_documents = document.getElementById('rj-ordinary-list-required-documents');
  if (rj_ordinary_list_required_documents) {
    gsap.from('#rj-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_application_process = document.getElementById('rj-ordinary-list-application-process');
  if (rj_ordinary_list_application_process) {
    gsap.from('#rj-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_timelines_deadlines = document.getElementById('rj-ordinary-section-timelines-deadlines');
  if (rj_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#rj-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_fees_costs = document.getElementById('rj-ordinary-section-fees-costs');
  if (rj_ordinary_section_fees_costs) {
    gsap.fromTo('#rj-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_risks_common_mistakes = document.getElementById('rj-ordinary-list-risks-common-mistakes');
  if (rj_ordinary_list_risks_common_mistakes) {
    gsap.from('#rj-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_diy_vs_professional_assistance = document.getElementById('rj-ordinary-section-diy-vs-professional-assistance');
  if (rj_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_rio_de_janeiro_specific_context = document.getElementById('rj-ordinary-section-rio-de-janeiro-specific-context');
  if (rj_ordinary_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-ordinary-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_what_our_clients_say = document.getElementById('rj-ordinary-section-what-our-clients-say');
  if (rj_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#rj-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_frequently_asked_questions = document.getElementById('rj-ordinary-section-frequently-asked-questions');
  if (rj_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rj-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_international_support = document.getElementById('rj-ordinary-section-international-support');
  if (rj_ordinary_section_international_support) {
    gsap.fromTo('#rj-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_our_credentials = document.getElementById('rj-ordinary-list-our-credentials');
  if (rj_ordinary_list_our_credentials) {
    gsap.from('#rj-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_list_related_services = document.getElementById('rj-ordinary-list-related-services');
  if (rj_ordinary_list_related_services) {
    gsap.from('#rj-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_youre_in_good_hands = document.getElementById('rj-ordinary-section-youre-in-good-hands');
  if (rj_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rj-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_ordinary_section_21 = document.getElementById('rj-ordinary-section-21');
  if (rj_ordinary_section_21) {
    gsap.fromTo('#rj-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('rj-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (rj_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#rj-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #rj-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_quick_facts = document.getElementById('rj-extraordinary-list-quick-facts');
  if (rj_extraordinary_list_quick_facts) {
    gsap.from('#rj-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_common_challenges_applicants_face = document.getElementById('rj-extraordinary-list-common-challenges-applicants-face');
  if (rj_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#rj-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_how_we_solve_these_challenges = document.getElementById('rj-extraordinary-list-how-we-solve-these-challenges');
  if (rj_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#rj-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_naturalisation_overview = document.getElementById('rj-extraordinary-section-naturalisation-overview');
  if (rj_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#rj-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('rj-extraordinary-form-who-is-this-naturalisation-for');
  if (rj_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#rj-extraordinary-form-who-is-this-naturalisation-for input, #rj-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_required_documents = document.getElementById('rj-extraordinary-list-required-documents');
  if (rj_extraordinary_list_required_documents) {
    gsap.from('#rj-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_application_process = document.getElementById('rj-extraordinary-list-application-process');
  if (rj_extraordinary_list_application_process) {
    gsap.from('#rj-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_timelines_deadlines = document.getElementById('rj-extraordinary-section-timelines-deadlines');
  if (rj_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#rj-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_fees_costs = document.getElementById('rj-extraordinary-section-fees-costs');
  if (rj_extraordinary_section_fees_costs) {
    gsap.fromTo('#rj-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_risks_common_mistakes = document.getElementById('rj-extraordinary-list-risks-common-mistakes');
  if (rj_extraordinary_list_risks_common_mistakes) {
    gsap.from('#rj-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_diy_vs_professional_assistance = document.getElementById('rj-extraordinary-section-diy-vs-professional-assistance');
  if (rj_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_rio_de_janeiro_specific_context = document.getElementById('rj-extraordinary-section-rio-de-janeiro-specific-context');
  if (rj_extraordinary_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-extraordinary-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_what_our_clients_say = document.getElementById('rj-extraordinary-section-what-our-clients-say');
  if (rj_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#rj-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_frequently_asked_questions = document.getElementById('rj-extraordinary-section-frequently-asked-questions');
  if (rj_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#rj-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_international_support = document.getElementById('rj-extraordinary-section-international-support');
  if (rj_extraordinary_section_international_support) {
    gsap.fromTo('#rj-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_our_credentials = document.getElementById('rj-extraordinary-list-our-credentials');
  if (rj_extraordinary_list_our_credentials) {
    gsap.from('#rj-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_list_related_services = document.getElementById('rj-extraordinary-list-related-services');
  if (rj_extraordinary_list_related_services) {
    gsap.from('#rj-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_youre_in_good_hands = document.getElementById('rj-extraordinary-section-youre-in-good-hands');
  if (rj_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#rj-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extraordinary_section_21 = document.getElementById('rj-extraordinary-section-21');
  if (rj_extraordinary_section_21) {
    gsap.fromTo('#rj-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('rj-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (rj_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#rj-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #rj-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_quick_facts = document.getElementById('rj-reacquisitioncitizenship-list-quick-facts');
  if (rj_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#rj-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('rj-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (rj_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#rj-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('rj-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (rj_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#rj-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('rj-reacquisitioncitizenship-section-reacquisition-overview');
  if (rj_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('rj-reacquisitioncitizenship-form-who-is-this-for');
  if (rj_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#rj-reacquisitioncitizenship-form-who-is-this-for input, #rj-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_required_documents = document.getElementById('rj-reacquisitioncitizenship-list-required-documents');
  if (rj_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#rj-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_process = document.getElementById('rj-reacquisitioncitizenship-list-process');
  if (rj_reacquisitioncitizenship_list_process) {
    gsap.from('#rj-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('rj-reacquisitioncitizenship-section-timelines-deadlines');
  if (rj_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_fees_costs = document.getElementById('rj-reacquisitioncitizenship-section-fees-costs');
  if (rj_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('rj-reacquisitioncitizenship-list-risks-common-mistakes');
  if (rj_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#rj-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('rj-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (rj_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_rio_de_janeiro_specific_context = document.getElementById('rj-reacquisitioncitizenship-section-rio-de-janeiro-specific-context');
  if (rj_reacquisitioncitizenship_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('rj-reacquisitioncitizenship-section-what-our-clients-say');
  if (rj_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('rj-reacquisitioncitizenship-section-frequently-asked-questions');
  if (rj_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_international_support = document.getElementById('rj-reacquisitioncitizenship-section-international-support');
  if (rj_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_our_credentials = document.getElementById('rj-reacquisitioncitizenship-list-our-credentials');
  if (rj_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#rj-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_list_related_services = document.getElementById('rj-reacquisitioncitizenship-list-related-services');
  if (rj_reacquisitioncitizenship_list_related_services) {
    gsap.from('#rj-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('rj-reacquisitioncitizenship-section-youre-in-good-hands');
  if (rj_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_reacquisitioncitizenship_section_21 = document.getElementById('rj-reacquisitioncitizenship-section-21');
  if (rj_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#rj-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('rj-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (rj_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#rj-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #rj-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_quick_facts = document.getElementById('rj-scientificresearch-list-quick-facts');
  if (rj_scientificresearch_list_quick_facts) {
    gsap.from('#rj-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_common_challenges_applicants_face = document.getElementById('rj-scientificresearch-list-common-challenges-applicants-face');
  if (rj_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#rj-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('rj-scientificresearch-list-how-we-solve-these-challenges');
  if (rj_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#rj-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_residency_overview = document.getElementById('rj-scientificresearch-section-residency-overview');
  if (rj_scientificresearch_section_residency_overview) {
    gsap.fromTo('#rj-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_form_who_is_this_residency_for = document.getElementById('rj-scientificresearch-form-who-is-this-residency-for');
  if (rj_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#rj-scientificresearch-form-who-is-this-residency-for input, #rj-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_required_documents = document.getElementById('rj-scientificresearch-list-required-documents');
  if (rj_scientificresearch_list_required_documents) {
    gsap.from('#rj-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_application_process = document.getElementById('rj-scientificresearch-list-application-process');
  if (rj_scientificresearch_list_application_process) {
    gsap.from('#rj-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_timelines_deadlines = document.getElementById('rj-scientificresearch-section-timelines-deadlines');
  if (rj_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#rj-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_fees_costs = document.getElementById('rj-scientificresearch-section-fees-costs');
  if (rj_scientificresearch_section_fees_costs) {
    gsap.fromTo('#rj-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_risks_common_mistakes = document.getElementById('rj-scientificresearch-list-risks-common-mistakes');
  if (rj_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#rj-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('rj-scientificresearch-section-diy-vs-professional-assistance');
  if (rj_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_rio_de_janeiro_specific_context = document.getElementById('rj-scientificresearch-section-rio-de-janeiro-specific-context');
  if (rj_scientificresearch_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-scientificresearch-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_what_our_clients_say = document.getElementById('rj-scientificresearch-section-what-our-clients-say');
  if (rj_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#rj-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_frequently_asked_questions = document.getElementById('rj-scientificresearch-section-frequently-asked-questions');
  if (rj_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#rj-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_international_support = document.getElementById('rj-scientificresearch-section-international-support');
  if (rj_scientificresearch_section_international_support) {
    gsap.fromTo('#rj-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_our_credentials = document.getElementById('rj-scientificresearch-list-our-credentials');
  if (rj_scientificresearch_list_our_credentials) {
    gsap.from('#rj-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_list_related_services = document.getElementById('rj-scientificresearch-list-related-services');
  if (rj_scientificresearch_list_related_services) {
    gsap.from('#rj-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_youre_in_good_hands = document.getElementById('rj-scientificresearch-section-youre-in-good-hands');
  if (rj_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#rj-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_scientificresearch_section_21 = document.getElementById('rj-scientificresearch-section-21');
  if (rj_scientificresearch_section_21) {
    gsap.fromTo('#rj-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_form_study_in_brazil_with_study_residency = document.getElementById('rj-study-form-study-in-brazil-with-study-residency');
  if (rj_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#rj-study-form-study-in-brazil-with-study-residency input, #rj-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_quick_facts = document.getElementById('rj-study-list-quick-facts');
  if (rj_study_list_quick_facts) {
    gsap.from('#rj-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_common_challenges_applicants_face = document.getElementById('rj-study-list-common-challenges-applicants-face');
  if (rj_study_list_common_challenges_applicants_face) {
    gsap.from('#rj-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_how_we_solve_these_challenges = document.getElementById('rj-study-list-how-we-solve-these-challenges');
  if (rj_study_list_how_we_solve_these_challenges) {
    gsap.from('#rj-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_residency_overview = document.getElementById('rj-study-section-residency-overview');
  if (rj_study_section_residency_overview) {
    gsap.fromTo('#rj-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_form_who_is_this_residency_for = document.getElementById('rj-study-form-who-is-this-residency-for');
  if (rj_study_form_who_is_this_residency_for) {
    gsap.from('#rj-study-form-who-is-this-residency-for input, #rj-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_required_documents = document.getElementById('rj-study-list-required-documents');
  if (rj_study_list_required_documents) {
    gsap.from('#rj-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_application_process = document.getElementById('rj-study-list-application-process');
  if (rj_study_list_application_process) {
    gsap.from('#rj-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_timelines_deadlines = document.getElementById('rj-study-section-timelines-deadlines');
  if (rj_study_section_timelines_deadlines) {
    gsap.fromTo('#rj-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_fees_costs = document.getElementById('rj-study-section-fees-costs');
  if (rj_study_section_fees_costs) {
    gsap.fromTo('#rj-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_risks_common_mistakes = document.getElementById('rj-study-list-risks-common-mistakes');
  if (rj_study_list_risks_common_mistakes) {
    gsap.from('#rj-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_diy_vs_professional_assistance = document.getElementById('rj-study-section-diy-vs-professional-assistance');
  if (rj_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_rio_de_janeiro_specific_context = document.getElementById('rj-study-section-rio-de-janeiro-specific-context');
  if (rj_study_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-study-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_what_our_clients_say = document.getElementById('rj-study-section-what-our-clients-say');
  if (rj_study_section_what_our_clients_say) {
    gsap.fromTo('#rj-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_frequently_asked_questions = document.getElementById('rj-study-section-frequently-asked-questions');
  if (rj_study_section_frequently_asked_questions) {
    gsap.fromTo('#rj-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_international_support = document.getElementById('rj-study-section-international-support');
  if (rj_study_section_international_support) {
    gsap.fromTo('#rj-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_our_credentials = document.getElementById('rj-study-list-our-credentials');
  if (rj_study_list_our_credentials) {
    gsap.from('#rj-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_list_related_services = document.getElementById('rj-study-list-related-services');
  if (rj_study_list_related_services) {
    gsap.from('#rj-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_youre_in_good_hands = document.getElementById('rj-study-section-youre-in-good-hands');
  if (rj_study_section_youre_in_good_hands) {
    gsap.fromTo('#rj-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_study_section_21 = document.getElementById('rj-study-section-21');
  if (rj_study_section_21) {
    gsap.fromTo('#rj-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('rj-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (rj_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#rj-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #rj-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_quick_facts = document.getElementById('rj-educationalexchange-list-quick-facts');
  if (rj_educationalexchange_list_quick_facts) {
    gsap.from('#rj-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_common_challenges_applicants_face = document.getElementById('rj-educationalexchange-list-common-challenges-applicants-face');
  if (rj_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#rj-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('rj-educationalexchange-list-how-we-solve-these-challenges');
  if (rj_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rj-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_residency_overview = document.getElementById('rj-educationalexchange-section-residency-overview');
  if (rj_educationalexchange_section_residency_overview) {
    gsap.fromTo('#rj-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_form_who_is_this_residency_for = document.getElementById('rj-educationalexchange-form-who-is-this-residency-for');
  if (rj_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#rj-educationalexchange-form-who-is-this-residency-for input, #rj-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_required_documents = document.getElementById('rj-educationalexchange-list-required-documents');
  if (rj_educationalexchange_list_required_documents) {
    gsap.from('#rj-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_application_process = document.getElementById('rj-educationalexchange-list-application-process');
  if (rj_educationalexchange_list_application_process) {
    gsap.from('#rj-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_timelines_deadlines = document.getElementById('rj-educationalexchange-section-timelines-deadlines');
  if (rj_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#rj-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_fees_costs = document.getElementById('rj-educationalexchange-section-fees-costs');
  if (rj_educationalexchange_section_fees_costs) {
    gsap.fromTo('#rj-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_risks_common_mistakes = document.getElementById('rj-educationalexchange-list-risks-common-mistakes');
  if (rj_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#rj-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('rj-educationalexchange-section-diy-vs-professional-assistance');
  if (rj_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_rio_de_janeiro_specific_context = document.getElementById('rj-educationalexchange-section-rio-de-janeiro-specific-context');
  if (rj_educationalexchange_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-educationalexchange-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_what_our_clients_say = document.getElementById('rj-educationalexchange-section-what-our-clients-say');
  if (rj_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#rj-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_frequently_asked_questions = document.getElementById('rj-educationalexchange-section-frequently-asked-questions');
  if (rj_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rj-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_international_support = document.getElementById('rj-educationalexchange-section-international-support');
  if (rj_educationalexchange_section_international_support) {
    gsap.fromTo('#rj-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_our_credentials = document.getElementById('rj-educationalexchange-list-our-credentials');
  if (rj_educationalexchange_list_our_credentials) {
    gsap.from('#rj-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_list_related_services = document.getElementById('rj-educationalexchange-list-related-services');
  if (rj_educationalexchange_list_related_services) {
    gsap.from('#rj-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_youre_in_good_hands = document.getElementById('rj-educationalexchange-section-youre-in-good-hands');
  if (rj_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rj-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_educationalexchange_section_21 = document.getElementById('rj-educationalexchange-section-21');
  if (rj_educationalexchange_section_21) {
    gsap.fromTo('#rj-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('rj-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (rj_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#rj-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #rj-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_quick_facts = document.getElementById('rj-humanitarian-list-quick-facts');
  if (rj_humanitarian_list_quick_facts) {
    gsap.from('#rj-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_common_challenges_applicants_face = document.getElementById('rj-humanitarian-list-common-challenges-applicants-face');
  if (rj_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#rj-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_how_we_solve_these_challenges = document.getElementById('rj-humanitarian-list-how-we-solve-these-challenges');
  if (rj_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#rj-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_residency_overview = document.getElementById('rj-humanitarian-section-residency-overview');
  if (rj_humanitarian_section_residency_overview) {
    gsap.fromTo('#rj-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_form_who_is_this_residency_for = document.getElementById('rj-humanitarian-form-who-is-this-residency-for');
  if (rj_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#rj-humanitarian-form-who-is-this-residency-for input, #rj-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_required_documents = document.getElementById('rj-humanitarian-list-required-documents');
  if (rj_humanitarian_list_required_documents) {
    gsap.from('#rj-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_application_process = document.getElementById('rj-humanitarian-list-application-process');
  if (rj_humanitarian_list_application_process) {
    gsap.from('#rj-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_timelines_deadlines = document.getElementById('rj-humanitarian-section-timelines-deadlines');
  if (rj_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#rj-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_fees_costs = document.getElementById('rj-humanitarian-section-fees-costs');
  if (rj_humanitarian_section_fees_costs) {
    gsap.fromTo('#rj-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_risks_common_mistakes = document.getElementById('rj-humanitarian-list-risks-common-mistakes');
  if (rj_humanitarian_list_risks_common_mistakes) {
    gsap.from('#rj-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_diy_vs_professional_assistance = document.getElementById('rj-humanitarian-section-diy-vs-professional-assistance');
  if (rj_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_rio_de_janeiro_specific_context = document.getElementById('rj-humanitarian-section-rio-de-janeiro-specific-context');
  if (rj_humanitarian_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-humanitarian-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_what_our_clients_say = document.getElementById('rj-humanitarian-section-what-our-clients-say');
  if (rj_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#rj-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_frequently_asked_questions = document.getElementById('rj-humanitarian-section-frequently-asked-questions');
  if (rj_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#rj-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_international_support = document.getElementById('rj-humanitarian-section-international-support');
  if (rj_humanitarian_section_international_support) {
    gsap.fromTo('#rj-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_our_credentials = document.getElementById('rj-humanitarian-list-our-credentials');
  if (rj_humanitarian_list_our_credentials) {
    gsap.from('#rj-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_list_related_services = document.getElementById('rj-humanitarian-list-related-services');
  if (rj_humanitarian_list_related_services) {
    gsap.from('#rj-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_youre_in_good_hands = document.getElementById('rj-humanitarian-section-youre-in-good-hands');
  if (rj_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#rj-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_humanitarian_section_21 = document.getElementById('rj-humanitarian-section-21');
  if (rj_humanitarian_section_21) {
    gsap.fromTo('#rj-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('rj-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (rj_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#rj-digitalnomad-form-digital-nomad-residency-in-brazil input, #rj-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_quick_facts = document.getElementById('rj-digitalnomad-list-quick-facts');
  if (rj_digitalnomad_list_quick_facts) {
    gsap.from('#rj-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_common_challenges_applicants_face = document.getElementById('rj-digitalnomad-list-common-challenges-applicants-face');
  if (rj_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#rj-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('rj-digitalnomad-list-how-we-solve-these-challenges');
  if (rj_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#rj-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_residency_overview = document.getElementById('rj-digitalnomad-section-residency-overview');
  if (rj_digitalnomad_section_residency_overview) {
    gsap.fromTo('#rj-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_form_who_is_this_residency_for = document.getElementById('rj-digitalnomad-form-who-is-this-residency-for');
  if (rj_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#rj-digitalnomad-form-who-is-this-residency-for input, #rj-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_required_documents = document.getElementById('rj-digitalnomad-list-required-documents');
  if (rj_digitalnomad_list_required_documents) {
    gsap.from('#rj-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_application_process = document.getElementById('rj-digitalnomad-list-application-process');
  if (rj_digitalnomad_list_application_process) {
    gsap.from('#rj-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_timelines_deadlines = document.getElementById('rj-digitalnomad-section-timelines-deadlines');
  if (rj_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#rj-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_fees_costs = document.getElementById('rj-digitalnomad-section-fees-costs');
  if (rj_digitalnomad_section_fees_costs) {
    gsap.fromTo('#rj-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_risks_common_mistakes = document.getElementById('rj-digitalnomad-list-risks-common-mistakes');
  if (rj_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#rj-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('rj-digitalnomad-section-diy-vs-professional-assistance');
  if (rj_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_rio_de_janeiro_specific_context = document.getElementById('rj-digitalnomad-section-rio-de-janeiro-specific-context');
  if (rj_digitalnomad_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-digitalnomad-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_what_our_clients_say = document.getElementById('rj-digitalnomad-section-what-our-clients-say');
  if (rj_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#rj-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_frequently_asked_questions = document.getElementById('rj-digitalnomad-section-frequently-asked-questions');
  if (rj_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#rj-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_international_support = document.getElementById('rj-digitalnomad-section-international-support');
  if (rj_digitalnomad_section_international_support) {
    gsap.fromTo('#rj-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_our_credentials = document.getElementById('rj-digitalnomad-list-our-credentials');
  if (rj_digitalnomad_list_our_credentials) {
    gsap.from('#rj-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_list_related_services = document.getElementById('rj-digitalnomad-list-related-services');
  if (rj_digitalnomad_list_related_services) {
    gsap.from('#rj-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_youre_in_good_hands = document.getElementById('rj-digitalnomad-section-youre-in-good-hands');
  if (rj_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#rj-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_digitalnomad_section_21 = document.getElementById('rj-digitalnomad-section-21');
  if (rj_digitalnomad_section_21) {
    gsap.fromTo('#rj-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('rj-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (rj_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#rj-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #rj-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_quick_facts = document.getElementById('rj-familyreunion-list-quick-facts');
  if (rj_familyreunion_list_quick_facts) {
    gsap.from('#rj-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_common_challenges_applicants_face = document.getElementById('rj-familyreunion-list-common-challenges-applicants-face');
  if (rj_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#rj-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_how_we_solve_these_challenges = document.getElementById('rj-familyreunion-list-how-we-solve-these-challenges');
  if (rj_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#rj-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_residency_overview = document.getElementById('rj-familyreunion-section-residency-overview');
  if (rj_familyreunion_section_residency_overview) {
    gsap.fromTo('#rj-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_form_who_is_this_residency_for = document.getElementById('rj-familyreunion-form-who-is-this-residency-for');
  if (rj_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#rj-familyreunion-form-who-is-this-residency-for input, #rj-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_required_documents = document.getElementById('rj-familyreunion-list-required-documents');
  if (rj_familyreunion_list_required_documents) {
    gsap.from('#rj-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_application_process = document.getElementById('rj-familyreunion-list-application-process');
  if (rj_familyreunion_list_application_process) {
    gsap.from('#rj-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_timelines_deadlines = document.getElementById('rj-familyreunion-section-timelines-deadlines');
  if (rj_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#rj-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_fees_costs = document.getElementById('rj-familyreunion-section-fees-costs');
  if (rj_familyreunion_section_fees_costs) {
    gsap.fromTo('#rj-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_risks_common_mistakes = document.getElementById('rj-familyreunion-list-risks-common-mistakes');
  if (rj_familyreunion_list_risks_common_mistakes) {
    gsap.from('#rj-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_diy_vs_professional_assistance = document.getElementById('rj-familyreunion-section-diy-vs-professional-assistance');
  if (rj_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_rio_de_janeiro_specific_context = document.getElementById('rj-familyreunion-section-rio-de-janeiro-specific-context');
  if (rj_familyreunion_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-familyreunion-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_what_our_clients_say = document.getElementById('rj-familyreunion-section-what-our-clients-say');
  if (rj_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#rj-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_frequently_asked_questions = document.getElementById('rj-familyreunion-section-frequently-asked-questions');
  if (rj_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#rj-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_international_support = document.getElementById('rj-familyreunion-section-international-support');
  if (rj_familyreunion_section_international_support) {
    gsap.fromTo('#rj-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_our_credentials = document.getElementById('rj-familyreunion-list-our-credentials');
  if (rj_familyreunion_list_our_credentials) {
    gsap.from('#rj-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_list_related_services = document.getElementById('rj-familyreunion-list-related-services');
  if (rj_familyreunion_list_related_services) {
    gsap.from('#rj-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_youre_in_good_hands = document.getElementById('rj-familyreunion-section-youre-in-good-hands');
  if (rj_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#rj-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_familyreunion_section_21 = document.getElementById('rj-familyreunion-section-21');
  if (rj_familyreunion_section_21) {
    gsap.fromTo('#rj-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('rj-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (rj_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#rj-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #rj-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_quick_facts = document.getElementById('rj-mercosul-list-quick-facts');
  if (rj_mercosul_list_quick_facts) {
    gsap.from('#rj-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_common_challenges_applicants_face = document.getElementById('rj-mercosul-list-common-challenges-applicants-face');
  if (rj_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#rj-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_how_we_solve_these_challenges = document.getElementById('rj-mercosul-list-how-we-solve-these-challenges');
  if (rj_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#rj-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_residency_overview = document.getElementById('rj-mercosul-section-residency-overview');
  if (rj_mercosul_section_residency_overview) {
    gsap.fromTo('#rj-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_form_who_is_this_residency_for = document.getElementById('rj-mercosul-form-who-is-this-residency-for');
  if (rj_mercosul_form_who_is_this_residency_for) {
    gsap.from('#rj-mercosul-form-who-is-this-residency-for input, #rj-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_required_documents = document.getElementById('rj-mercosul-list-required-documents');
  if (rj_mercosul_list_required_documents) {
    gsap.from('#rj-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_application_process = document.getElementById('rj-mercosul-list-application-process');
  if (rj_mercosul_list_application_process) {
    gsap.from('#rj-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_timelines_deadlines = document.getElementById('rj-mercosul-section-timelines-deadlines');
  if (rj_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#rj-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_fees_costs = document.getElementById('rj-mercosul-section-fees-costs');
  if (rj_mercosul_section_fees_costs) {
    gsap.fromTo('#rj-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_risks_common_mistakes = document.getElementById('rj-mercosul-list-risks-common-mistakes');
  if (rj_mercosul_list_risks_common_mistakes) {
    gsap.from('#rj-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_diy_vs_professional_assistance = document.getElementById('rj-mercosul-section-diy-vs-professional-assistance');
  if (rj_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_rio_de_janeiro_specific_context = document.getElementById('rj-mercosul-section-rio-de-janeiro-specific-context');
  if (rj_mercosul_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-mercosul-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_what_our_clients_say = document.getElementById('rj-mercosul-section-what-our-clients-say');
  if (rj_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#rj-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_frequently_asked_questions = document.getElementById('rj-mercosul-section-frequently-asked-questions');
  if (rj_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#rj-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_international_support = document.getElementById('rj-mercosul-section-international-support');
  if (rj_mercosul_section_international_support) {
    gsap.fromTo('#rj-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_our_credentials = document.getElementById('rj-mercosul-list-our-credentials');
  if (rj_mercosul_list_our_credentials) {
    gsap.from('#rj-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_list_related_services = document.getElementById('rj-mercosul-list-related-services');
  if (rj_mercosul_list_related_services) {
    gsap.from('#rj-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_youre_in_good_hands = document.getElementById('rj-mercosul-section-youre-in-good-hands');
  if (rj_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#rj-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_mercosul_section_21 = document.getElementById('rj-mercosul-section-21');
  if (rj_mercosul_section_21) {
    gsap.fromTo('#rj-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('rj-retiree-form-retire-in-brazil-with-retiree-residency');
  if (rj_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#rj-retiree-form-retire-in-brazil-with-retiree-residency input, #rj-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_quick_facts = document.getElementById('rj-retiree-list-quick-facts');
  if (rj_retiree_list_quick_facts) {
    gsap.from('#rj-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_common_challenges_applicants_face = document.getElementById('rj-retiree-list-common-challenges-applicants-face');
  if (rj_retiree_list_common_challenges_applicants_face) {
    gsap.from('#rj-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_how_we_solve_these_challenges = document.getElementById('rj-retiree-list-how-we-solve-these-challenges');
  if (rj_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#rj-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_residency_overview = document.getElementById('rj-retiree-section-residency-overview');
  if (rj_retiree_section_residency_overview) {
    gsap.fromTo('#rj-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_form_who_is_this_residency_for = document.getElementById('rj-retiree-form-who-is-this-residency-for');
  if (rj_retiree_form_who_is_this_residency_for) {
    gsap.from('#rj-retiree-form-who-is-this-residency-for input, #rj-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_required_documents = document.getElementById('rj-retiree-list-required-documents');
  if (rj_retiree_list_required_documents) {
    gsap.from('#rj-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_application_process = document.getElementById('rj-retiree-list-application-process');
  if (rj_retiree_list_application_process) {
    gsap.from('#rj-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_timelines_deadlines = document.getElementById('rj-retiree-section-timelines-deadlines');
  if (rj_retiree_section_timelines_deadlines) {
    gsap.fromTo('#rj-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_fees_costs = document.getElementById('rj-retiree-section-fees-costs');
  if (rj_retiree_section_fees_costs) {
    gsap.fromTo('#rj-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_risks_common_mistakes = document.getElementById('rj-retiree-list-risks-common-mistakes');
  if (rj_retiree_list_risks_common_mistakes) {
    gsap.from('#rj-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_diy_vs_professional_assistance = document.getElementById('rj-retiree-section-diy-vs-professional-assistance');
  if (rj_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_rio_de_janeiro_specific_context = document.getElementById('rj-retiree-section-rio-de-janeiro-specific-context');
  if (rj_retiree_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-retiree-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_what_our_clients_say = document.getElementById('rj-retiree-section-what-our-clients-say');
  if (rj_retiree_section_what_our_clients_say) {
    gsap.fromTo('#rj-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_frequently_asked_questions = document.getElementById('rj-retiree-section-frequently-asked-questions');
  if (rj_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#rj-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_international_support = document.getElementById('rj-retiree-section-international-support');
  if (rj_retiree_section_international_support) {
    gsap.fromTo('#rj-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_our_credentials = document.getElementById('rj-retiree-list-our-credentials');
  if (rj_retiree_list_our_credentials) {
    gsap.from('#rj-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_list_related_services = document.getElementById('rj-retiree-list-related-services');
  if (rj_retiree_list_related_services) {
    gsap.from('#rj-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_youre_in_good_hands = document.getElementById('rj-retiree-section-youre-in-good-hands');
  if (rj_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#rj-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_retiree_section_21 = document.getElementById('rj-retiree-section-21');
  if (rj_retiree_section_21) {
    gsap.fromTo('#rj-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('rj-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (rj_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#rj-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #rj-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_quick_facts = document.getElementById('rj-volunteer-list-quick-facts');
  if (rj_volunteer_list_quick_facts) {
    gsap.from('#rj-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_common_challenges_applicants_face = document.getElementById('rj-volunteer-list-common-challenges-applicants-face');
  if (rj_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#rj-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_how_we_solve_these_challenges = document.getElementById('rj-volunteer-list-how-we-solve-these-challenges');
  if (rj_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#rj-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_residency_overview = document.getElementById('rj-volunteer-section-residency-overview');
  if (rj_volunteer_section_residency_overview) {
    gsap.fromTo('#rj-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_form_who_is_this_residency_for = document.getElementById('rj-volunteer-form-who-is-this-residency-for');
  if (rj_volunteer_form_who_is_this_residency_for) {
    gsap.from('#rj-volunteer-form-who-is-this-residency-for input, #rj-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_required_documents = document.getElementById('rj-volunteer-list-required-documents');
  if (rj_volunteer_list_required_documents) {
    gsap.from('#rj-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_application_process = document.getElementById('rj-volunteer-list-application-process');
  if (rj_volunteer_list_application_process) {
    gsap.from('#rj-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_timelines_deadlines = document.getElementById('rj-volunteer-section-timelines-deadlines');
  if (rj_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#rj-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_fees_costs = document.getElementById('rj-volunteer-section-fees-costs');
  if (rj_volunteer_section_fees_costs) {
    gsap.fromTo('#rj-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_risks_common_mistakes = document.getElementById('rj-volunteer-list-risks-common-mistakes');
  if (rj_volunteer_list_risks_common_mistakes) {
    gsap.from('#rj-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_diy_vs_professional_assistance = document.getElementById('rj-volunteer-section-diy-vs-professional-assistance');
  if (rj_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_rio_de_janeiro_specific_context = document.getElementById('rj-volunteer-section-rio-de-janeiro-specific-context');
  if (rj_volunteer_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-volunteer-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_what_our_clients_say = document.getElementById('rj-volunteer-section-what-our-clients-say');
  if (rj_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#rj-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_frequently_asked_questions = document.getElementById('rj-volunteer-section-frequently-asked-questions');
  if (rj_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#rj-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_international_support = document.getElementById('rj-volunteer-section-international-support');
  if (rj_volunteer_section_international_support) {
    gsap.fromTo('#rj-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_our_credentials = document.getElementById('rj-volunteer-list-our-credentials');
  if (rj_volunteer_list_our_credentials) {
    gsap.from('#rj-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_list_related_services = document.getElementById('rj-volunteer-list-related-services');
  if (rj_volunteer_list_related_services) {
    gsap.from('#rj-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_youre_in_good_hands = document.getElementById('rj-volunteer-section-youre-in-good-hands');
  if (rj_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#rj-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_volunteer_section_21 = document.getElementById('rj-volunteer-section-21');
  if (rj_volunteer_section_21) {
    gsap.fromTo('#rj-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('rj-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (rj_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#rj-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #rj-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_quick_facts = document.getElementById('rj-skilledworker-list-quick-facts');
  if (rj_skilledworker_list_quick_facts) {
    gsap.from('#rj-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_common_challenges_applicants_face = document.getElementById('rj-skilledworker-list-common-challenges-applicants-face');
  if (rj_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#rj-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_how_we_solve_these_challenges = document.getElementById('rj-skilledworker-list-how-we-solve-these-challenges');
  if (rj_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#rj-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_residency_overview = document.getElementById('rj-skilledworker-section-residency-overview');
  if (rj_skilledworker_section_residency_overview) {
    gsap.fromTo('#rj-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_form_who_is_this_residency_for = document.getElementById('rj-skilledworker-form-who-is-this-residency-for');
  if (rj_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#rj-skilledworker-form-who-is-this-residency-for input, #rj-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_required_documents = document.getElementById('rj-skilledworker-list-required-documents');
  if (rj_skilledworker_list_required_documents) {
    gsap.from('#rj-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_application_process = document.getElementById('rj-skilledworker-list-application-process');
  if (rj_skilledworker_list_application_process) {
    gsap.from('#rj-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_timelines_deadlines = document.getElementById('rj-skilledworker-section-timelines-deadlines');
  if (rj_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#rj-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_fees_costs = document.getElementById('rj-skilledworker-section-fees-costs');
  if (rj_skilledworker_section_fees_costs) {
    gsap.fromTo('#rj-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_risks_common_mistakes = document.getElementById('rj-skilledworker-list-risks-common-mistakes');
  if (rj_skilledworker_list_risks_common_mistakes) {
    gsap.from('#rj-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_diy_vs_professional_assistance = document.getElementById('rj-skilledworker-section-diy-vs-professional-assistance');
  if (rj_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_rio_de_janeiro_specific_context = document.getElementById('rj-skilledworker-section-rio-de-janeiro-specific-context');
  if (rj_skilledworker_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-skilledworker-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_what_our_clients_say = document.getElementById('rj-skilledworker-section-what-our-clients-say');
  if (rj_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#rj-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_frequently_asked_questions = document.getElementById('rj-skilledworker-section-frequently-asked-questions');
  if (rj_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#rj-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_international_support = document.getElementById('rj-skilledworker-section-international-support');
  if (rj_skilledworker_section_international_support) {
    gsap.fromTo('#rj-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_our_credentials = document.getElementById('rj-skilledworker-list-our-credentials');
  if (rj_skilledworker_list_our_credentials) {
    gsap.from('#rj-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_list_related_services = document.getElementById('rj-skilledworker-list-related-services');
  if (rj_skilledworker_list_related_services) {
    gsap.from('#rj-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_youre_in_good_hands = document.getElementById('rj-skilledworker-section-youre-in-good-hands');
  if (rj_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#rj-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_skilledworker_section_21 = document.getElementById('rj-skilledworker-section-21');
  if (rj_skilledworker_section_21) {
    gsap.fromTo('#rj-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('rj-religious-form-religious-residency-in-brazil-for-missions');
  if (rj_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#rj-religious-form-religious-residency-in-brazil-for-missions input, #rj-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_quick_facts = document.getElementById('rj-religious-list-quick-facts');
  if (rj_religious_list_quick_facts) {
    gsap.from('#rj-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_common_challenges_applicants_face = document.getElementById('rj-religious-list-common-challenges-applicants-face');
  if (rj_religious_list_common_challenges_applicants_face) {
    gsap.from('#rj-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_how_we_solve_these_challenges = document.getElementById('rj-religious-list-how-we-solve-these-challenges');
  if (rj_religious_list_how_we_solve_these_challenges) {
    gsap.from('#rj-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_residency_overview = document.getElementById('rj-religious-section-residency-overview');
  if (rj_religious_section_residency_overview) {
    gsap.fromTo('#rj-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_form_who_is_this_residency_for = document.getElementById('rj-religious-form-who-is-this-residency-for');
  if (rj_religious_form_who_is_this_residency_for) {
    gsap.from('#rj-religious-form-who-is-this-residency-for input, #rj-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_required_documents = document.getElementById('rj-religious-list-required-documents');
  if (rj_religious_list_required_documents) {
    gsap.from('#rj-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_application_process = document.getElementById('rj-religious-list-application-process');
  if (rj_religious_list_application_process) {
    gsap.from('#rj-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_timelines_deadlines = document.getElementById('rj-religious-section-timelines-deadlines');
  if (rj_religious_section_timelines_deadlines) {
    gsap.fromTo('#rj-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_fees_costs = document.getElementById('rj-religious-section-fees-costs');
  if (rj_religious_section_fees_costs) {
    gsap.fromTo('#rj-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_risks_common_mistakes = document.getElementById('rj-religious-list-risks-common-mistakes');
  if (rj_religious_list_risks_common_mistakes) {
    gsap.from('#rj-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_diy_vs_professional_assistance = document.getElementById('rj-religious-section-diy-vs-professional-assistance');
  if (rj_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_rio_de_janeiro_specific_context = document.getElementById('rj-religious-section-rio-de-janeiro-specific-context');
  if (rj_religious_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-religious-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_what_our_clients_say = document.getElementById('rj-religious-section-what-our-clients-say');
  if (rj_religious_section_what_our_clients_say) {
    gsap.fromTo('#rj-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_frequently_asked_questions = document.getElementById('rj-religious-section-frequently-asked-questions');
  if (rj_religious_section_frequently_asked_questions) {
    gsap.fromTo('#rj-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_international_support = document.getElementById('rj-religious-section-international-support');
  if (rj_religious_section_international_support) {
    gsap.fromTo('#rj-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_our_credentials = document.getElementById('rj-religious-list-our-credentials');
  if (rj_religious_list_our_credentials) {
    gsap.from('#rj-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_list_related_services = document.getElementById('rj-religious-list-related-services');
  if (rj_religious_list_related_services) {
    gsap.from('#rj-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_youre_in_good_hands = document.getElementById('rj-religious-section-youre-in-good-hands');
  if (rj_religious_section_youre_in_good_hands) {
    gsap.fromTo('#rj-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_religious_section_21 = document.getElementById('rj-religious-section-21');
  if (rj_religious_section_21) {
    gsap.fromTo('#rj-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('rj-investor-form-gain-residency-in-brazil-through-investment');
  if (rj_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#rj-investor-form-gain-residency-in-brazil-through-investment input, #rj-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_quick_facts = document.getElementById('rj-investor-list-quick-facts');
  if (rj_investor_list_quick_facts) {
    gsap.from('#rj-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_common_challenges_applicants_face = document.getElementById('rj-investor-list-common-challenges-applicants-face');
  if (rj_investor_list_common_challenges_applicants_face) {
    gsap.from('#rj-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_how_we_solve_these_challenges = document.getElementById('rj-investor-list-how-we-solve-these-challenges');
  if (rj_investor_list_how_we_solve_these_challenges) {
    gsap.from('#rj-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_residency_overview = document.getElementById('rj-investor-section-residency-overview');
  if (rj_investor_section_residency_overview) {
    gsap.fromTo('#rj-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_form_who_is_this_residency_for = document.getElementById('rj-investor-form-who-is-this-residency-for');
  if (rj_investor_form_who_is_this_residency_for) {
    gsap.from('#rj-investor-form-who-is-this-residency-for input, #rj-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_required_documents = document.getElementById('rj-investor-list-required-documents');
  if (rj_investor_list_required_documents) {
    gsap.from('#rj-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_application_process = document.getElementById('rj-investor-list-application-process');
  if (rj_investor_list_application_process) {
    gsap.from('#rj-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_timelines_deadlines = document.getElementById('rj-investor-section-timelines-deadlines');
  if (rj_investor_section_timelines_deadlines) {
    gsap.fromTo('#rj-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_fees_costs = document.getElementById('rj-investor-section-fees-costs');
  if (rj_investor_section_fees_costs) {
    gsap.fromTo('#rj-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_risks_common_mistakes = document.getElementById('rj-investor-list-risks-common-mistakes');
  if (rj_investor_list_risks_common_mistakes) {
    gsap.from('#rj-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_diy_vs_professional_assistance = document.getElementById('rj-investor-section-diy-vs-professional-assistance');
  if (rj_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_rio_de_janeiro_specific_context = document.getElementById('rj-investor-section-rio-de-janeiro-specific-context');
  if (rj_investor_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-investor-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_what_our_clients_say = document.getElementById('rj-investor-section-what-our-clients-say');
  if (rj_investor_section_what_our_clients_say) {
    gsap.fromTo('#rj-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_frequently_asked_questions = document.getElementById('rj-investor-section-frequently-asked-questions');
  if (rj_investor_section_frequently_asked_questions) {
    gsap.fromTo('#rj-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_international_support = document.getElementById('rj-investor-section-international-support');
  if (rj_investor_section_international_support) {
    gsap.fromTo('#rj-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_our_credentials = document.getElementById('rj-investor-list-our-credentials');
  if (rj_investor_list_our_credentials) {
    gsap.from('#rj-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_list_related_services = document.getElementById('rj-investor-list-related-services');
  if (rj_investor_list_related_services) {
    gsap.from('#rj-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_youre_in_good_hands = document.getElementById('rj-investor-section-youre-in-good-hands');
  if (rj_investor_section_youre_in_good_hands) {
    gsap.fromTo('#rj-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_investor_section_21 = document.getElementById('rj-investor-section-21');
  if (rj_investor_section_21) {
    gsap.fromTo('#rj-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('rj-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (rj_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#rj-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #rj-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_quick_facts = document.getElementById('rj-healthtreatment-list-quick-facts');
  if (rj_healthtreatment_list_quick_facts) {
    gsap.from('#rj-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_common_challenges_applicants_face = document.getElementById('rj-healthtreatment-list-common-challenges-applicants-face');
  if (rj_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#rj-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('rj-healthtreatment-list-how-we-solve-these-challenges');
  if (rj_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#rj-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_residency_overview = document.getElementById('rj-healthtreatment-section-residency-overview');
  if (rj_healthtreatment_section_residency_overview) {
    gsap.fromTo('#rj-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_form_who_is_this_residency_for = document.getElementById('rj-healthtreatment-form-who-is-this-residency-for');
  if (rj_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#rj-healthtreatment-form-who-is-this-residency-for input, #rj-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_required_documents = document.getElementById('rj-healthtreatment-list-required-documents');
  if (rj_healthtreatment_list_required_documents) {
    gsap.from('#rj-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_application_process = document.getElementById('rj-healthtreatment-list-application-process');
  if (rj_healthtreatment_list_application_process) {
    gsap.from('#rj-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_timelines_deadlines = document.getElementById('rj-healthtreatment-section-timelines-deadlines');
  if (rj_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#rj-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_fees_costs = document.getElementById('rj-healthtreatment-section-fees-costs');
  if (rj_healthtreatment_section_fees_costs) {
    gsap.fromTo('#rj-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_risks_common_mistakes = document.getElementById('rj-healthtreatment-list-risks-common-mistakes');
  if (rj_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#rj-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('rj-healthtreatment-section-diy-vs-professional-assistance');
  if (rj_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_rio_de_janeiro_specific_context = document.getElementById('rj-healthtreatment-section-rio-de-janeiro-specific-context');
  if (rj_healthtreatment_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-healthtreatment-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_what_our_clients_say = document.getElementById('rj-healthtreatment-section-what-our-clients-say');
  if (rj_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#rj-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_frequently_asked_questions = document.getElementById('rj-healthtreatment-section-frequently-asked-questions');
  if (rj_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#rj-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_international_support = document.getElementById('rj-healthtreatment-section-international-support');
  if (rj_healthtreatment_section_international_support) {
    gsap.fromTo('#rj-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_our_credentials = document.getElementById('rj-healthtreatment-list-our-credentials');
  if (rj_healthtreatment_list_our_credentials) {
    gsap.from('#rj-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_list_related_services = document.getElementById('rj-healthtreatment-list-related-services');
  if (rj_healthtreatment_list_related_services) {
    gsap.from('#rj-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_youre_in_good_hands = document.getElementById('rj-healthtreatment-section-youre-in-good-hands');
  if (rj_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#rj-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_healthtreatment_section_21 = document.getElementById('rj-healthtreatment-section-21');
  if (rj_healthtreatment_section_21) {
    gsap.fromTo('#rj-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('rj-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (rj_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#rj-cplp-form-residency-for-cplp-citizens-in-brazil input, #rj-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_quick_facts = document.getElementById('rj-cplp-list-quick-facts');
  if (rj_cplp_list_quick_facts) {
    gsap.from('#rj-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_common_challenges_applicants_face = document.getElementById('rj-cplp-list-common-challenges-applicants-face');
  if (rj_cplp_list_common_challenges_applicants_face) {
    gsap.from('#rj-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_how_we_solve_these_challenges = document.getElementById('rj-cplp-list-how-we-solve-these-challenges');
  if (rj_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#rj-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_residency_overview = document.getElementById('rj-cplp-section-residency-overview');
  if (rj_cplp_section_residency_overview) {
    gsap.fromTo('#rj-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_form_who_is_this_residency_for = document.getElementById('rj-cplp-form-who-is-this-residency-for');
  if (rj_cplp_form_who_is_this_residency_for) {
    gsap.from('#rj-cplp-form-who-is-this-residency-for input, #rj-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_required_documents = document.getElementById('rj-cplp-list-required-documents');
  if (rj_cplp_list_required_documents) {
    gsap.from('#rj-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_application_process = document.getElementById('rj-cplp-list-application-process');
  if (rj_cplp_list_application_process) {
    gsap.from('#rj-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_timelines_deadlines = document.getElementById('rj-cplp-section-timelines-deadlines');
  if (rj_cplp_section_timelines_deadlines) {
    gsap.fromTo('#rj-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_fees_costs = document.getElementById('rj-cplp-section-fees-costs');
  if (rj_cplp_section_fees_costs) {
    gsap.fromTo('#rj-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_risks_common_mistakes = document.getElementById('rj-cplp-list-risks-common-mistakes');
  if (rj_cplp_list_risks_common_mistakes) {
    gsap.from('#rj-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_diy_vs_professional_assistance = document.getElementById('rj-cplp-section-diy-vs-professional-assistance');
  if (rj_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_rio_de_janeiro_specific_context = document.getElementById('rj-cplp-section-rio-de-janeiro-specific-context');
  if (rj_cplp_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-cplp-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_what_our_clients_say = document.getElementById('rj-cplp-section-what-our-clients-say');
  if (rj_cplp_section_what_our_clients_say) {
    gsap.fromTo('#rj-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_frequently_asked_questions = document.getElementById('rj-cplp-section-frequently-asked-questions');
  if (rj_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#rj-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_international_support = document.getElementById('rj-cplp-section-international-support');
  if (rj_cplp_section_international_support) {
    gsap.fromTo('#rj-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_our_credentials = document.getElementById('rj-cplp-list-our-credentials');
  if (rj_cplp_list_our_credentials) {
    gsap.from('#rj-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_list_related_services = document.getElementById('rj-cplp-list-related-services');
  if (rj_cplp_list_related_services) {
    gsap.from('#rj-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_youre_in_good_hands = document.getElementById('rj-cplp-section-youre-in-good-hands');
  if (rj_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#rj-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_cplp_section_21 = document.getElementById('rj-cplp-section-21');
  if (rj_cplp_section_21) {
    gsap.fromTo('#rj-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('rj-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (rj_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#rj-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #rj-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_quick_facts = document.getElementById('rj-youthexchange-list-quick-facts');
  if (rj_youthexchange_list_quick_facts) {
    gsap.from('#rj-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_common_challenges_applicants_face = document.getElementById('rj-youthexchange-list-common-challenges-applicants-face');
  if (rj_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#rj-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_how_we_solve_these_challenges = document.getElementById('rj-youthexchange-list-how-we-solve-these-challenges');
  if (rj_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#rj-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_residency_overview = document.getElementById('rj-youthexchange-section-residency-overview');
  if (rj_youthexchange_section_residency_overview) {
    gsap.fromTo('#rj-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_form_who_is_this_residency_for = document.getElementById('rj-youthexchange-form-who-is-this-residency-for');
  if (rj_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#rj-youthexchange-form-who-is-this-residency-for input, #rj-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_required_documents = document.getElementById('rj-youthexchange-list-required-documents');
  if (rj_youthexchange_list_required_documents) {
    gsap.from('#rj-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_application_process = document.getElementById('rj-youthexchange-list-application-process');
  if (rj_youthexchange_list_application_process) {
    gsap.from('#rj-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_timelines_deadlines = document.getElementById('rj-youthexchange-section-timelines-deadlines');
  if (rj_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#rj-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_fees_costs = document.getElementById('rj-youthexchange-section-fees-costs');
  if (rj_youthexchange_section_fees_costs) {
    gsap.fromTo('#rj-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_risks_common_mistakes = document.getElementById('rj-youthexchange-list-risks-common-mistakes');
  if (rj_youthexchange_list_risks_common_mistakes) {
    gsap.from('#rj-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_diy_vs_professional_assistance = document.getElementById('rj-youthexchange-section-diy-vs-professional-assistance');
  if (rj_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_rio_de_janeiro_specific_context = document.getElementById('rj-youthexchange-section-rio-de-janeiro-specific-context');
  if (rj_youthexchange_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-youthexchange-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_what_our_clients_say = document.getElementById('rj-youthexchange-section-what-our-clients-say');
  if (rj_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#rj-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_frequently_asked_questions = document.getElementById('rj-youthexchange-section-frequently-asked-questions');
  if (rj_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#rj-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_international_support = document.getElementById('rj-youthexchange-section-international-support');
  if (rj_youthexchange_section_international_support) {
    gsap.fromTo('#rj-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_our_credentials = document.getElementById('rj-youthexchange-list-our-credentials');
  if (rj_youthexchange_list_our_credentials) {
    gsap.from('#rj-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_list_related_services = document.getElementById('rj-youthexchange-list-related-services');
  if (rj_youthexchange_list_related_services) {
    gsap.from('#rj-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_youre_in_good_hands = document.getElementById('rj-youthexchange-section-youre-in-good-hands');
  if (rj_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#rj-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_youthexchange_section_21 = document.getElementById('rj-youthexchange-section-21');
  if (rj_youthexchange_section_21) {
    gsap.fromTo('#rj-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('rj-work-form-work-and-reside-in-brazil-with-work-residency');
  if (rj_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#rj-work-form-work-and-reside-in-brazil-with-work-residency input, #rj-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_quick_facts = document.getElementById('rj-work-list-quick-facts');
  if (rj_work_list_quick_facts) {
    gsap.from('#rj-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_common_challenges_applicants_face = document.getElementById('rj-work-list-common-challenges-applicants-face');
  if (rj_work_list_common_challenges_applicants_face) {
    gsap.from('#rj-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_how_we_solve_these_challenges = document.getElementById('rj-work-list-how-we-solve-these-challenges');
  if (rj_work_list_how_we_solve_these_challenges) {
    gsap.from('#rj-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_residency_overview = document.getElementById('rj-work-section-residency-overview');
  if (rj_work_section_residency_overview) {
    gsap.fromTo('#rj-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_form_who_is_this_residency_for = document.getElementById('rj-work-form-who-is-this-residency-for');
  if (rj_work_form_who_is_this_residency_for) {
    gsap.from('#rj-work-form-who-is-this-residency-for input, #rj-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_required_documents = document.getElementById('rj-work-list-required-documents');
  if (rj_work_list_required_documents) {
    gsap.from('#rj-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_application_process = document.getElementById('rj-work-list-application-process');
  if (rj_work_list_application_process) {
    gsap.from('#rj-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_timelines_deadlines = document.getElementById('rj-work-section-timelines-deadlines');
  if (rj_work_section_timelines_deadlines) {
    gsap.fromTo('#rj-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_fees_costs = document.getElementById('rj-work-section-fees-costs');
  if (rj_work_section_fees_costs) {
    gsap.fromTo('#rj-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_risks_common_mistakes = document.getElementById('rj-work-list-risks-common-mistakes');
  if (rj_work_list_risks_common_mistakes) {
    gsap.from('#rj-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_diy_vs_professional_assistance = document.getElementById('rj-work-section-diy-vs-professional-assistance');
  if (rj_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_rio_de_janeiro_specific_context = document.getElementById('rj-work-section-rio-de-janeiro-specific-context');
  if (rj_work_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-work-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_what_our_clients_say = document.getElementById('rj-work-section-what-our-clients-say');
  if (rj_work_section_what_our_clients_say) {
    gsap.fromTo('#rj-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_frequently_asked_questions = document.getElementById('rj-work-section-frequently-asked-questions');
  if (rj_work_section_frequently_asked_questions) {
    gsap.fromTo('#rj-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_international_support = document.getElementById('rj-work-section-international-support');
  if (rj_work_section_international_support) {
    gsap.fromTo('#rj-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_our_credentials = document.getElementById('rj-work-list-our-credentials');
  if (rj_work_list_our_credentials) {
    gsap.from('#rj-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_list_related_services = document.getElementById('rj-work-list-related-services');
  if (rj_work_list_related_services) {
    gsap.from('#rj-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_youre_in_good_hands = document.getElementById('rj-work-section-youre-in-good-hands');
  if (rj_work_section_youre_in_good_hands) {
    gsap.fromTo('#rj-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_work_section_21 = document.getElementById('rj-work-section-21');
  if (rj_work_section_21) {
    gsap.fromTo('#rj-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('rj-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (rj_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#rj-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #rj-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_quick_facts = document.getElementById('rj-startup-list-quick-facts');
  if (rj_startup_list_quick_facts) {
    gsap.from('#rj-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_common_challenges_applicants_face = document.getElementById('rj-startup-list-common-challenges-applicants-face');
  if (rj_startup_list_common_challenges_applicants_face) {
    gsap.from('#rj-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_how_we_solve_these_challenges = document.getElementById('rj-startup-list-how-we-solve-these-challenges');
  if (rj_startup_list_how_we_solve_these_challenges) {
    gsap.from('#rj-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_visa_overview = document.getElementById('rj-startup-section-visa-overview');
  if (rj_startup_section_visa_overview) {
    gsap.fromTo('#rj-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_form_who_is_this_visa_for = document.getElementById('rj-startup-form-who-is-this-visa-for');
  if (rj_startup_form_who_is_this_visa_for) {
    gsap.from('#rj-startup-form-who-is-this-visa-for input, #rj-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_required_documents = document.getElementById('rj-startup-list-required-documents');
  if (rj_startup_list_required_documents) {
    gsap.from('#rj-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_application_process = document.getElementById('rj-startup-list-application-process');
  if (rj_startup_list_application_process) {
    gsap.from('#rj-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_timelines_deadlines = document.getElementById('rj-startup-section-timelines-deadlines');
  if (rj_startup_section_timelines_deadlines) {
    gsap.fromTo('#rj-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_fees_costs = document.getElementById('rj-startup-section-fees-costs');
  if (rj_startup_section_fees_costs) {
    gsap.fromTo('#rj-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_risks_common_mistakes = document.getElementById('rj-startup-list-risks-common-mistakes');
  if (rj_startup_list_risks_common_mistakes) {
    gsap.from('#rj-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_diy_vs_professional_assistance = document.getElementById('rj-startup-section-diy-vs-professional-assistance');
  if (rj_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_rio_de_janeiro_specific_context = document.getElementById('rj-startup-section-rio-de-janeiro-specific-context');
  if (rj_startup_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-startup-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_what_our_clients_say = document.getElementById('rj-startup-section-what-our-clients-say');
  if (rj_startup_section_what_our_clients_say) {
    gsap.fromTo('#rj-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_frequently_asked_questions = document.getElementById('rj-startup-section-frequently-asked-questions');
  if (rj_startup_section_frequently_asked_questions) {
    gsap.fromTo('#rj-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_international_support = document.getElementById('rj-startup-section-international-support');
  if (rj_startup_section_international_support) {
    gsap.fromTo('#rj-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_our_credentials = document.getElementById('rj-startup-list-our-credentials');
  if (rj_startup_list_our_credentials) {
    gsap.from('#rj-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_list_related_services = document.getElementById('rj-startup-list-related-services');
  if (rj_startup_list_related_services) {
    gsap.from('#rj-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_youre_in_good_hands = document.getElementById('rj-startup-section-youre-in-good-hands');
  if (rj_startup_section_youre_in_good_hands) {
    gsap.fromTo('#rj-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_startup_section_21 = document.getElementById('rj-startup-section-21');
  if (rj_startup_section_21) {
    gsap.fromTo('#rj-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('rj-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (rj_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#rj-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #rj-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_quick_facts = document.getElementById('rj-family-list-quick-facts');
  if (rj_family_list_quick_facts) {
    gsap.from('#rj-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_common_challenges_applicants_face = document.getElementById('rj-family-list-common-challenges-applicants-face');
  if (rj_family_list_common_challenges_applicants_face) {
    gsap.from('#rj-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_how_we_solve_these_challenges = document.getElementById('rj-family-list-how-we-solve-these-challenges');
  if (rj_family_list_how_we_solve_these_challenges) {
    gsap.from('#rj-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_visa_overview = document.getElementById('rj-family-section-visa-overview');
  if (rj_family_section_visa_overview) {
    gsap.fromTo('#rj-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_form_who_is_this_visa_for = document.getElementById('rj-family-form-who-is-this-visa-for');
  if (rj_family_form_who_is_this_visa_for) {
    gsap.from('#rj-family-form-who-is-this-visa-for input, #rj-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_required_documents = document.getElementById('rj-family-list-required-documents');
  if (rj_family_list_required_documents) {
    gsap.from('#rj-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_application_process = document.getElementById('rj-family-list-application-process');
  if (rj_family_list_application_process) {
    gsap.from('#rj-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_timelines_deadlines = document.getElementById('rj-family-section-timelines-deadlines');
  if (rj_family_section_timelines_deadlines) {
    gsap.fromTo('#rj-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_fees_costs = document.getElementById('rj-family-section-fees-costs');
  if (rj_family_section_fees_costs) {
    gsap.fromTo('#rj-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_risks_common_mistakes = document.getElementById('rj-family-list-risks-common-mistakes');
  if (rj_family_list_risks_common_mistakes) {
    gsap.from('#rj-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_diy_vs_professional_assistance = document.getElementById('rj-family-section-diy-vs-professional-assistance');
  if (rj_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_rio_de_janeiro_specific_context = document.getElementById('rj-family-section-rio-de-janeiro-specific-context');
  if (rj_family_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-family-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_what_our_clients_say = document.getElementById('rj-family-section-what-our-clients-say');
  if (rj_family_section_what_our_clients_say) {
    gsap.fromTo('#rj-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_frequently_asked_questions = document.getElementById('rj-family-section-frequently-asked-questions');
  if (rj_family_section_frequently_asked_questions) {
    gsap.fromTo('#rj-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_international_support = document.getElementById('rj-family-section-international-support');
  if (rj_family_section_international_support) {
    gsap.fromTo('#rj-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_our_credentials = document.getElementById('rj-family-list-our-credentials');
  if (rj_family_list_our_credentials) {
    gsap.from('#rj-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_list_related_services = document.getElementById('rj-family-list-related-services');
  if (rj_family_list_related_services) {
    gsap.from('#rj-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_youre_in_good_hands = document.getElementById('rj-family-section-youre-in-good-hands');
  if (rj_family_section_youre_in_good_hands) {
    gsap.fromTo('#rj-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_family_section_21 = document.getElementById('rj-family-section-21');
  if (rj_family_section_21) {
    gsap.fromTo('#rj-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('rj-sports-form-compete-in-brazil-with-the-sports-visa');
  if (rj_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#rj-sports-form-compete-in-brazil-with-the-sports-visa input, #rj-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_quick_facts = document.getElementById('rj-sports-list-quick-facts');
  if (rj_sports_list_quick_facts) {
    gsap.from('#rj-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_common_challenges_applicants_face = document.getElementById('rj-sports-list-common-challenges-applicants-face');
  if (rj_sports_list_common_challenges_applicants_face) {
    gsap.from('#rj-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_how_we_solve_these_challenges = document.getElementById('rj-sports-list-how-we-solve-these-challenges');
  if (rj_sports_list_how_we_solve_these_challenges) {
    gsap.from('#rj-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_visa_overview = document.getElementById('rj-sports-section-visa-overview');
  if (rj_sports_section_visa_overview) {
    gsap.fromTo('#rj-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_form_who_is_this_visa_for = document.getElementById('rj-sports-form-who-is-this-visa-for');
  if (rj_sports_form_who_is_this_visa_for) {
    gsap.from('#rj-sports-form-who-is-this-visa-for input, #rj-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_required_documents = document.getElementById('rj-sports-list-required-documents');
  if (rj_sports_list_required_documents) {
    gsap.from('#rj-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_application_process = document.getElementById('rj-sports-list-application-process');
  if (rj_sports_list_application_process) {
    gsap.from('#rj-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_timelines_deadlines = document.getElementById('rj-sports-section-timelines-deadlines');
  if (rj_sports_section_timelines_deadlines) {
    gsap.fromTo('#rj-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_fees_costs = document.getElementById('rj-sports-section-fees-costs');
  if (rj_sports_section_fees_costs) {
    gsap.fromTo('#rj-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_risks_common_mistakes = document.getElementById('rj-sports-list-risks-common-mistakes');
  if (rj_sports_list_risks_common_mistakes) {
    gsap.from('#rj-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_diy_vs_professional_assistance = document.getElementById('rj-sports-section-diy-vs-professional-assistance');
  if (rj_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_rio_de_janeiro_specific_context = document.getElementById('rj-sports-section-rio-de-janeiro-specific-context');
  if (rj_sports_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-sports-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_what_our_clients_say = document.getElementById('rj-sports-section-what-our-clients-say');
  if (rj_sports_section_what_our_clients_say) {
    gsap.fromTo('#rj-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_frequently_asked_questions = document.getElementById('rj-sports-section-frequently-asked-questions');
  if (rj_sports_section_frequently_asked_questions) {
    gsap.fromTo('#rj-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_international_support = document.getElementById('rj-sports-section-international-support');
  if (rj_sports_section_international_support) {
    gsap.fromTo('#rj-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_our_credentials = document.getElementById('rj-sports-list-our-credentials');
  if (rj_sports_list_our_credentials) {
    gsap.from('#rj-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_list_related_services = document.getElementById('rj-sports-list-related-services');
  if (rj_sports_list_related_services) {
    gsap.from('#rj-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_youre_in_good_hands = document.getElementById('rj-sports-section-youre-in-good-hands');
  if (rj_sports_section_youre_in_good_hands) {
    gsap.fromTo('#rj-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_sports_section_21 = document.getElementById('rj-sports-section-21');
  if (rj_sports_section_21) {
    gsap.fromTo('#rj-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('rj-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (rj_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#rj-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #rj-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_quick_facts = document.getElementById('rj-medical-list-quick-facts');
  if (rj_medical_list_quick_facts) {
    gsap.from('#rj-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_common_challenges_applicants_face = document.getElementById('rj-medical-list-common-challenges-applicants-face');
  if (rj_medical_list_common_challenges_applicants_face) {
    gsap.from('#rj-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_how_we_solve_these_challenges = document.getElementById('rj-medical-list-how-we-solve-these-challenges');
  if (rj_medical_list_how_we_solve_these_challenges) {
    gsap.from('#rj-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_visa_overview = document.getElementById('rj-medical-section-visa-overview');
  if (rj_medical_section_visa_overview) {
    gsap.fromTo('#rj-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_form_who_is_this_visa_for = document.getElementById('rj-medical-form-who-is-this-visa-for');
  if (rj_medical_form_who_is_this_visa_for) {
    gsap.from('#rj-medical-form-who-is-this-visa-for input, #rj-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_required_documents = document.getElementById('rj-medical-list-required-documents');
  if (rj_medical_list_required_documents) {
    gsap.from('#rj-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_application_process = document.getElementById('rj-medical-list-application-process');
  if (rj_medical_list_application_process) {
    gsap.from('#rj-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_timelines_deadlines = document.getElementById('rj-medical-section-timelines-deadlines');
  if (rj_medical_section_timelines_deadlines) {
    gsap.fromTo('#rj-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_fees_costs = document.getElementById('rj-medical-section-fees-costs');
  if (rj_medical_section_fees_costs) {
    gsap.fromTo('#rj-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_risks_common_mistakes = document.getElementById('rj-medical-list-risks-common-mistakes');
  if (rj_medical_list_risks_common_mistakes) {
    gsap.from('#rj-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_diy_vs_professional_assistance = document.getElementById('rj-medical-section-diy-vs-professional-assistance');
  if (rj_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_rio_de_janeiro_specific_context = document.getElementById('rj-medical-section-rio-de-janeiro-specific-context');
  if (rj_medical_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-medical-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_what_our_clients_say = document.getElementById('rj-medical-section-what-our-clients-say');
  if (rj_medical_section_what_our_clients_say) {
    gsap.fromTo('#rj-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_frequently_asked_questions = document.getElementById('rj-medical-section-frequently-asked-questions');
  if (rj_medical_section_frequently_asked_questions) {
    gsap.fromTo('#rj-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_international_support = document.getElementById('rj-medical-section-international-support');
  if (rj_medical_section_international_support) {
    gsap.fromTo('#rj-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_our_credentials = document.getElementById('rj-medical-list-our-credentials');
  if (rj_medical_list_our_credentials) {
    gsap.from('#rj-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_list_related_services = document.getElementById('rj-medical-list-related-services');
  if (rj_medical_list_related_services) {
    gsap.from('#rj-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_youre_in_good_hands = document.getElementById('rj-medical-section-youre-in-good-hands');
  if (rj_medical_section_youre_in_good_hands) {
    gsap.fromTo('#rj-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_medical_section_21 = document.getElementById('rj-medical-section-21');
  if (rj_medical_section_21) {
    gsap.fromTo('#rj-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('rj-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (rj_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#rj-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #rj-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_quick_facts = document.getElementById('rj-tourist-list-quick-facts');
  if (rj_tourist_list_quick_facts) {
    gsap.from('#rj-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_common_challenges_applicants_face = document.getElementById('rj-tourist-list-common-challenges-applicants-face');
  if (rj_tourist_list_common_challenges_applicants_face) {
    gsap.from('#rj-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_how_we_solve_these_challenges = document.getElementById('rj-tourist-list-how-we-solve-these-challenges');
  if (rj_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#rj-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_visa_overview = document.getElementById('rj-tourist-section-visa-overview');
  if (rj_tourist_section_visa_overview) {
    gsap.fromTo('#rj-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_form_who_is_this_visa_for = document.getElementById('rj-tourist-form-who-is-this-visa-for');
  if (rj_tourist_form_who_is_this_visa_for) {
    gsap.from('#rj-tourist-form-who-is-this-visa-for input, #rj-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_required_documents = document.getElementById('rj-tourist-list-required-documents');
  if (rj_tourist_list_required_documents) {
    gsap.from('#rj-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_application_process = document.getElementById('rj-tourist-list-application-process');
  if (rj_tourist_list_application_process) {
    gsap.from('#rj-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_timelines_deadlines = document.getElementById('rj-tourist-section-timelines-deadlines');
  if (rj_tourist_section_timelines_deadlines) {
    gsap.fromTo('#rj-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_fees_costs = document.getElementById('rj-tourist-section-fees-costs');
  if (rj_tourist_section_fees_costs) {
    gsap.fromTo('#rj-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_risks_common_mistakes = document.getElementById('rj-tourist-list-risks-common-mistakes');
  if (rj_tourist_list_risks_common_mistakes) {
    gsap.from('#rj-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_diy_vs_professional_assistance = document.getElementById('rj-tourist-section-diy-vs-professional-assistance');
  if (rj_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_rio_de_janeiro_specific_context = document.getElementById('rj-tourist-section-rio-de-janeiro-specific-context');
  if (rj_tourist_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-tourist-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_what_our_clients_say = document.getElementById('rj-tourist-section-what-our-clients-say');
  if (rj_tourist_section_what_our_clients_say) {
    gsap.fromTo('#rj-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_frequently_asked_questions = document.getElementById('rj-tourist-section-frequently-asked-questions');
  if (rj_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#rj-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_international_support = document.getElementById('rj-tourist-section-international-support');
  if (rj_tourist_section_international_support) {
    gsap.fromTo('#rj-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_our_credentials = document.getElementById('rj-tourist-list-our-credentials');
  if (rj_tourist_list_our_credentials) {
    gsap.from('#rj-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_list_related_services = document.getElementById('rj-tourist-list-related-services');
  if (rj_tourist_list_related_services) {
    gsap.from('#rj-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_youre_in_good_hands = document.getElementById('rj-tourist-section-youre-in-good-hands');
  if (rj_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#rj-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_tourist_section_21 = document.getElementById('rj-tourist-section-21');
  if (rj_tourist_section_21) {
    gsap.fromTo('#rj-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('rj-transit-form-transit-through-brazil-with-the-transit-visa');
  if (rj_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#rj-transit-form-transit-through-brazil-with-the-transit-visa input, #rj-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_quick_facts = document.getElementById('rj-transit-list-quick-facts');
  if (rj_transit_list_quick_facts) {
    gsap.from('#rj-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_common_challenges_applicants_face = document.getElementById('rj-transit-list-common-challenges-applicants-face');
  if (rj_transit_list_common_challenges_applicants_face) {
    gsap.from('#rj-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_how_we_solve_these_challenges = document.getElementById('rj-transit-list-how-we-solve-these-challenges');
  if (rj_transit_list_how_we_solve_these_challenges) {
    gsap.from('#rj-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_visa_overview = document.getElementById('rj-transit-section-visa-overview');
  if (rj_transit_section_visa_overview) {
    gsap.fromTo('#rj-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_form_who_is_this_visa_for = document.getElementById('rj-transit-form-who-is-this-visa-for');
  if (rj_transit_form_who_is_this_visa_for) {
    gsap.from('#rj-transit-form-who-is-this-visa-for input, #rj-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_required_documents = document.getElementById('rj-transit-list-required-documents');
  if (rj_transit_list_required_documents) {
    gsap.from('#rj-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_application_process = document.getElementById('rj-transit-list-application-process');
  if (rj_transit_list_application_process) {
    gsap.from('#rj-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_timelines_deadlines = document.getElementById('rj-transit-section-timelines-deadlines');
  if (rj_transit_section_timelines_deadlines) {
    gsap.fromTo('#rj-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_fees_costs = document.getElementById('rj-transit-section-fees-costs');
  if (rj_transit_section_fees_costs) {
    gsap.fromTo('#rj-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_risks_common_mistakes = document.getElementById('rj-transit-list-risks-common-mistakes');
  if (rj_transit_list_risks_common_mistakes) {
    gsap.from('#rj-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_diy_vs_professional_assistance = document.getElementById('rj-transit-section-diy-vs-professional-assistance');
  if (rj_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_rio_de_janeiro_specific_context = document.getElementById('rj-transit-section-rio-de-janeiro-specific-context');
  if (rj_transit_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-transit-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_what_our_clients_say = document.getElementById('rj-transit-section-what-our-clients-say');
  if (rj_transit_section_what_our_clients_say) {
    gsap.fromTo('#rj-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_frequently_asked_questions = document.getElementById('rj-transit-section-frequently-asked-questions');
  if (rj_transit_section_frequently_asked_questions) {
    gsap.fromTo('#rj-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_international_support = document.getElementById('rj-transit-section-international-support');
  if (rj_transit_section_international_support) {
    gsap.fromTo('#rj-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_our_credentials = document.getElementById('rj-transit-list-our-credentials');
  if (rj_transit_list_our_credentials) {
    gsap.from('#rj-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_list_related_services = document.getElementById('rj-transit-list-related-services');
  if (rj_transit_list_related_services) {
    gsap.from('#rj-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_youre_in_good_hands = document.getElementById('rj-transit-section-youre-in-good-hands');
  if (rj_transit_section_youre_in_good_hands) {
    gsap.fromTo('#rj-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_transit_section_21 = document.getElementById('rj-transit-section-21');
  if (rj_transit_section_21) {
    gsap.fromTo('#rj-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_form_study_in_brazil_with_the_student_visa = document.getElementById('rj-student-form-study-in-brazil-with-the-student-visa');
  if (rj_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#rj-student-form-study-in-brazil-with-the-student-visa input, #rj-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_quick_facts = document.getElementById('rj-student-list-quick-facts');
  if (rj_student_list_quick_facts) {
    gsap.from('#rj-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_common_challenges_applicants_face = document.getElementById('rj-student-list-common-challenges-applicants-face');
  if (rj_student_list_common_challenges_applicants_face) {
    gsap.from('#rj-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_how_we_solve_these_challenges = document.getElementById('rj-student-list-how-we-solve-these-challenges');
  if (rj_student_list_how_we_solve_these_challenges) {
    gsap.from('#rj-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_visa_overview = document.getElementById('rj-student-section-visa-overview');
  if (rj_student_section_visa_overview) {
    gsap.fromTo('#rj-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_form_who_is_this_visa_for = document.getElementById('rj-student-form-who-is-this-visa-for');
  if (rj_student_form_who_is_this_visa_for) {
    gsap.from('#rj-student-form-who-is-this-visa-for input, #rj-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_required_documents = document.getElementById('rj-student-list-required-documents');
  if (rj_student_list_required_documents) {
    gsap.from('#rj-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_application_process = document.getElementById('rj-student-list-application-process');
  if (rj_student_list_application_process) {
    gsap.from('#rj-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_timelines_deadlines = document.getElementById('rj-student-section-timelines-deadlines');
  if (rj_student_section_timelines_deadlines) {
    gsap.fromTo('#rj-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_fees_costs = document.getElementById('rj-student-section-fees-costs');
  if (rj_student_section_fees_costs) {
    gsap.fromTo('#rj-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_risks_common_mistakes = document.getElementById('rj-student-list-risks-common-mistakes');
  if (rj_student_list_risks_common_mistakes) {
    gsap.from('#rj-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_diy_vs_professional_assistance = document.getElementById('rj-student-section-diy-vs-professional-assistance');
  if (rj_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_rio_de_janeiro_specific_context = document.getElementById('rj-student-section-rio-de-janeiro-specific-context');
  if (rj_student_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-student-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_what_our_clients_say = document.getElementById('rj-student-section-what-our-clients-say');
  if (rj_student_section_what_our_clients_say) {
    gsap.fromTo('#rj-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_frequently_asked_questions = document.getElementById('rj-student-section-frequently-asked-questions');
  if (rj_student_section_frequently_asked_questions) {
    gsap.fromTo('#rj-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_international_support = document.getElementById('rj-student-section-international-support');
  if (rj_student_section_international_support) {
    gsap.fromTo('#rj-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_our_credentials = document.getElementById('rj-student-list-our-credentials');
  if (rj_student_list_our_credentials) {
    gsap.from('#rj-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_list_related_services = document.getElementById('rj-student-list-related-services');
  if (rj_student_list_related_services) {
    gsap.from('#rj-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_youre_in_good_hands = document.getElementById('rj-student-section-youre-in-good-hands');
  if (rj_student_section_youre_in_good_hands) {
    gsap.fromTo('#rj-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_student_section_21 = document.getElementById('rj-student-section-21');
  if (rj_student_section_21) {
    gsap.fromTo('#rj-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('rj-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (rj_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#rj-business-form-conduct-business-in-brazil-with-the-business-visa input, #rj-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_quick_facts = document.getElementById('rj-business-list-quick-facts');
  if (rj_business_list_quick_facts) {
    gsap.from('#rj-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_common_challenges_applicants_face = document.getElementById('rj-business-list-common-challenges-applicants-face');
  if (rj_business_list_common_challenges_applicants_face) {
    gsap.from('#rj-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_how_we_solve_these_challenges = document.getElementById('rj-business-list-how-we-solve-these-challenges');
  if (rj_business_list_how_we_solve_these_challenges) {
    gsap.from('#rj-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_visa_overview = document.getElementById('rj-business-section-visa-overview');
  if (rj_business_section_visa_overview) {
    gsap.fromTo('#rj-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_form_who_is_this_visa_for = document.getElementById('rj-business-form-who-is-this-visa-for');
  if (rj_business_form_who_is_this_visa_for) {
    gsap.from('#rj-business-form-who-is-this-visa-for input, #rj-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_required_documents = document.getElementById('rj-business-list-required-documents');
  if (rj_business_list_required_documents) {
    gsap.from('#rj-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_application_process = document.getElementById('rj-business-list-application-process');
  if (rj_business_list_application_process) {
    gsap.from('#rj-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_timelines_deadlines = document.getElementById('rj-business-section-timelines-deadlines');
  if (rj_business_section_timelines_deadlines) {
    gsap.fromTo('#rj-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_fees_costs = document.getElementById('rj-business-section-fees-costs');
  if (rj_business_section_fees_costs) {
    gsap.fromTo('#rj-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_risks_common_mistakes = document.getElementById('rj-business-list-risks-common-mistakes');
  if (rj_business_list_risks_common_mistakes) {
    gsap.from('#rj-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_diy_vs_professional_assistance = document.getElementById('rj-business-section-diy-vs-professional-assistance');
  if (rj_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_rio_de_janeiro_specific_context = document.getElementById('rj-business-section-rio-de-janeiro-specific-context');
  if (rj_business_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-business-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_what_our_clients_say = document.getElementById('rj-business-section-what-our-clients-say');
  if (rj_business_section_what_our_clients_say) {
    gsap.fromTo('#rj-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_frequently_asked_questions = document.getElementById('rj-business-section-frequently-asked-questions');
  if (rj_business_section_frequently_asked_questions) {
    gsap.fromTo('#rj-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_international_support = document.getElementById('rj-business-section-international-support');
  if (rj_business_section_international_support) {
    gsap.fromTo('#rj-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_our_credentials = document.getElementById('rj-business-list-our-credentials');
  if (rj_business_list_our_credentials) {
    gsap.from('#rj-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_list_related_services = document.getElementById('rj-business-list-related-services');
  if (rj_business_list_related_services) {
    gsap.from('#rj-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_youre_in_good_hands = document.getElementById('rj-business-section-youre-in-good-hands');
  if (rj_business_section_youre_in_good_hands) {
    gsap.fromTo('#rj-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_business_section_21 = document.getElementById('rj-business-section-21');
  if (rj_business_section_21) {
    gsap.fromTo('#rj-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('rj-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (rj_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#rj-research-form-conduct-research-in-brazil-with-the-research-visa input, #rj-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_quick_facts = document.getElementById('rj-research-list-quick-facts');
  if (rj_research_list_quick_facts) {
    gsap.from('#rj-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_common_challenges_applicants_face = document.getElementById('rj-research-list-common-challenges-applicants-face');
  if (rj_research_list_common_challenges_applicants_face) {
    gsap.from('#rj-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_how_we_solve_these_challenges = document.getElementById('rj-research-list-how-we-solve-these-challenges');
  if (rj_research_list_how_we_solve_these_challenges) {
    gsap.from('#rj-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_visa_overview = document.getElementById('rj-research-section-visa-overview');
  if (rj_research_section_visa_overview) {
    gsap.fromTo('#rj-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_form_who_is_this_visa_for = document.getElementById('rj-research-form-who-is-this-visa-for');
  if (rj_research_form_who_is_this_visa_for) {
    gsap.from('#rj-research-form-who-is-this-visa-for input, #rj-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_required_documents = document.getElementById('rj-research-list-required-documents');
  if (rj_research_list_required_documents) {
    gsap.from('#rj-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_application_process = document.getElementById('rj-research-list-application-process');
  if (rj_research_list_application_process) {
    gsap.from('#rj-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_timelines_deadlines = document.getElementById('rj-research-section-timelines-deadlines');
  if (rj_research_section_timelines_deadlines) {
    gsap.fromTo('#rj-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_fees_costs = document.getElementById('rj-research-section-fees-costs');
  if (rj_research_section_fees_costs) {
    gsap.fromTo('#rj-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_risks_common_mistakes = document.getElementById('rj-research-list-risks-common-mistakes');
  if (rj_research_list_risks_common_mistakes) {
    gsap.from('#rj-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_diy_vs_professional_assistance = document.getElementById('rj-research-section-diy-vs-professional-assistance');
  if (rj_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_rio_de_janeiro_specific_context = document.getElementById('rj-research-section-rio-de-janeiro-specific-context');
  if (rj_research_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-research-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_what_our_clients_say = document.getElementById('rj-research-section-what-our-clients-say');
  if (rj_research_section_what_our_clients_say) {
    gsap.fromTo('#rj-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_frequently_asked_questions = document.getElementById('rj-research-section-frequently-asked-questions');
  if (rj_research_section_frequently_asked_questions) {
    gsap.fromTo('#rj-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_international_support = document.getElementById('rj-research-section-international-support');
  if (rj_research_section_international_support) {
    gsap.fromTo('#rj-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_our_credentials = document.getElementById('rj-research-list-our-credentials');
  if (rj_research_list_our_credentials) {
    gsap.from('#rj-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_list_related_services = document.getElementById('rj-research-list-related-services');
  if (rj_research_list_related_services) {
    gsap.from('#rj-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_youre_in_good_hands = document.getElementById('rj-research-section-youre-in-good-hands');
  if (rj_research_section_youre_in_good_hands) {
    gsap.fromTo('#rj-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_research_section_21 = document.getElementById('rj-research-section-21');
  if (rj_research_section_21) {
    gsap.fromTo('#rj-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('rj-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (rj_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#rj-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #rj-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_quick_facts = document.getElementById('rj-diplomatic-list-quick-facts');
  if (rj_diplomatic_list_quick_facts) {
    gsap.from('#rj-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_common_challenges_applicants_face = document.getElementById('rj-diplomatic-list-common-challenges-applicants-face');
  if (rj_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#rj-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_how_we_solve_these_challenges = document.getElementById('rj-diplomatic-list-how-we-solve-these-challenges');
  if (rj_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#rj-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_visa_overview = document.getElementById('rj-diplomatic-section-visa-overview');
  if (rj_diplomatic_section_visa_overview) {
    gsap.fromTo('#rj-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_form_who_is_this_visa_for = document.getElementById('rj-diplomatic-form-who-is-this-visa-for');
  if (rj_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#rj-diplomatic-form-who-is-this-visa-for input, #rj-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_required_documents = document.getElementById('rj-diplomatic-list-required-documents');
  if (rj_diplomatic_list_required_documents) {
    gsap.from('#rj-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_application_process = document.getElementById('rj-diplomatic-list-application-process');
  if (rj_diplomatic_list_application_process) {
    gsap.from('#rj-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_timelines_deadlines = document.getElementById('rj-diplomatic-section-timelines-deadlines');
  if (rj_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#rj-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_fees_costs = document.getElementById('rj-diplomatic-section-fees-costs');
  if (rj_diplomatic_section_fees_costs) {
    gsap.fromTo('#rj-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_risks_common_mistakes = document.getElementById('rj-diplomatic-list-risks-common-mistakes');
  if (rj_diplomatic_list_risks_common_mistakes) {
    gsap.from('#rj-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_diy_vs_professional_assistance = document.getElementById('rj-diplomatic-section-diy-vs-professional-assistance');
  if (rj_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_rio_de_janeiro_specific_context = document.getElementById('rj-diplomatic-section-rio-de-janeiro-specific-context');
  if (rj_diplomatic_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-diplomatic-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_what_our_clients_say = document.getElementById('rj-diplomatic-section-what-our-clients-say');
  if (rj_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#rj-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_frequently_asked_questions = document.getElementById('rj-diplomatic-section-frequently-asked-questions');
  if (rj_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#rj-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_international_support = document.getElementById('rj-diplomatic-section-international-support');
  if (rj_diplomatic_section_international_support) {
    gsap.fromTo('#rj-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_our_credentials = document.getElementById('rj-diplomatic-list-our-credentials');
  if (rj_diplomatic_list_our_credentials) {
    gsap.from('#rj-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_list_related_services = document.getElementById('rj-diplomatic-list-related-services');
  if (rj_diplomatic_list_related_services) {
    gsap.from('#rj-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_youre_in_good_hands = document.getElementById('rj-diplomatic-section-youre-in-good-hands');
  if (rj_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#rj-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_diplomatic_section_21 = document.getElementById('rj-diplomatic-section-21');
  if (rj_diplomatic_section_21) {
    gsap.fromTo('#rj-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('rj-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (rj_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#rj-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #rj-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_quick_facts = document.getElementById('rj-journalist-list-quick-facts');
  if (rj_journalist_list_quick_facts) {
    gsap.from('#rj-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_common_challenges_applicants_face = document.getElementById('rj-journalist-list-common-challenges-applicants-face');
  if (rj_journalist_list_common_challenges_applicants_face) {
    gsap.from('#rj-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_how_we_solve_these_challenges = document.getElementById('rj-journalist-list-how-we-solve-these-challenges');
  if (rj_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#rj-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_visa_overview = document.getElementById('rj-journalist-section-visa-overview');
  if (rj_journalist_section_visa_overview) {
    gsap.fromTo('#rj-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_form_who_is_this_visa_for = document.getElementById('rj-journalist-form-who-is-this-visa-for');
  if (rj_journalist_form_who_is_this_visa_for) {
    gsap.from('#rj-journalist-form-who-is-this-visa-for input, #rj-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_required_documents = document.getElementById('rj-journalist-list-required-documents');
  if (rj_journalist_list_required_documents) {
    gsap.from('#rj-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_application_process = document.getElementById('rj-journalist-list-application-process');
  if (rj_journalist_list_application_process) {
    gsap.from('#rj-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_timelines_deadlines = document.getElementById('rj-journalist-section-timelines-deadlines');
  if (rj_journalist_section_timelines_deadlines) {
    gsap.fromTo('#rj-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_fees_costs = document.getElementById('rj-journalist-section-fees-costs');
  if (rj_journalist_section_fees_costs) {
    gsap.fromTo('#rj-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_risks_common_mistakes = document.getElementById('rj-journalist-list-risks-common-mistakes');
  if (rj_journalist_list_risks_common_mistakes) {
    gsap.from('#rj-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_diy_vs_professional_assistance = document.getElementById('rj-journalist-section-diy-vs-professional-assistance');
  if (rj_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_rio_de_janeiro_specific_context = document.getElementById('rj-journalist-section-rio-de-janeiro-specific-context');
  if (rj_journalist_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-journalist-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_what_our_clients_say = document.getElementById('rj-journalist-section-what-our-clients-say');
  if (rj_journalist_section_what_our_clients_say) {
    gsap.fromTo('#rj-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_frequently_asked_questions = document.getElementById('rj-journalist-section-frequently-asked-questions');
  if (rj_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#rj-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_international_support = document.getElementById('rj-journalist-section-international-support');
  if (rj_journalist_section_international_support) {
    gsap.fromTo('#rj-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_our_credentials = document.getElementById('rj-journalist-list-our-credentials');
  if (rj_journalist_list_our_credentials) {
    gsap.from('#rj-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_list_related_services = document.getElementById('rj-journalist-list-related-services');
  if (rj_journalist_list_related_services) {
    gsap.from('#rj-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_youre_in_good_hands = document.getElementById('rj-journalist-section-youre-in-good-hands');
  if (rj_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#rj-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_journalist_section_21 = document.getElementById('rj-journalist-section-21');
  if (rj_journalist_section_21) {
    gsap.fromTo('#rj-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('rj-fines-form-resolve-immigration-fines-in-brazil');
  if (rj_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#rj-fines-form-resolve-immigration-fines-in-brazil input, #rj-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_quick_facts = document.getElementById('rj-fines-list-quick-facts');
  if (rj_fines_list_quick_facts) {
    gsap.from('#rj-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_common_challenges_applicants_face = document.getElementById('rj-fines-list-common-challenges-applicants-face');
  if (rj_fines_list_common_challenges_applicants_face) {
    gsap.from('#rj-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_how_we_solve_these_challenges = document.getElementById('rj-fines-list-how-we-solve-these-challenges');
  if (rj_fines_list_how_we_solve_these_challenges) {
    gsap.from('#rj-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_service_overview = document.getElementById('rj-fines-section-service-overview');
  if (rj_fines_section_service_overview) {
    gsap.fromTo('#rj-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_form_who_is_this_service_for = document.getElementById('rj-fines-form-who-is-this-service-for');
  if (rj_fines_form_who_is_this_service_for) {
    gsap.from('#rj-fines-form-who-is-this-service-for input, #rj-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_required_documents = document.getElementById('rj-fines-list-required-documents');
  if (rj_fines_list_required_documents) {
    gsap.from('#rj-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_process = document.getElementById('rj-fines-list-process');
  if (rj_fines_list_process) {
    gsap.from('#rj-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_timelines_deadlines = document.getElementById('rj-fines-section-timelines-deadlines');
  if (rj_fines_section_timelines_deadlines) {
    gsap.fromTo('#rj-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_fees_costs = document.getElementById('rj-fines-section-fees-costs');
  if (rj_fines_section_fees_costs) {
    gsap.fromTo('#rj-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_risks_common_mistakes = document.getElementById('rj-fines-list-risks-common-mistakes');
  if (rj_fines_list_risks_common_mistakes) {
    gsap.from('#rj-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_diy_vs_professional_assistance = document.getElementById('rj-fines-section-diy-vs-professional-assistance');
  if (rj_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_rio_de_janeiro_specific_context = document.getElementById('rj-fines-section-rio-de-janeiro-specific-context');
  if (rj_fines_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-fines-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_what_our_clients_say = document.getElementById('rj-fines-section-what-our-clients-say');
  if (rj_fines_section_what_our_clients_say) {
    gsap.fromTo('#rj-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_frequently_asked_questions = document.getElementById('rj-fines-section-frequently-asked-questions');
  if (rj_fines_section_frequently_asked_questions) {
    gsap.fromTo('#rj-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_international_support = document.getElementById('rj-fines-section-international-support');
  if (rj_fines_section_international_support) {
    gsap.fromTo('#rj-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_our_credentials = document.getElementById('rj-fines-list-our-credentials');
  if (rj_fines_list_our_credentials) {
    gsap.from('#rj-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_list_related_services = document.getElementById('rj-fines-list-related-services');
  if (rj_fines_list_related_services) {
    gsap.from('#rj-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_youre_in_good_hands = document.getElementById('rj-fines-section-youre-in-good-hands');
  if (rj_fines_section_youre_in_good_hands) {
    gsap.fromTo('#rj-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_fines_section_21 = document.getElementById('rj-fines-section-21');
  if (rj_fines_section_21) {
    gsap.fromTo('#rj-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_form_deportation_assistance_in_brazil = document.getElementById('rj-deportation-form-deportation-assistance-in-brazil');
  if (rj_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#rj-deportation-form-deportation-assistance-in-brazil input, #rj-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_quick_facts = document.getElementById('rj-deportation-list-quick-facts');
  if (rj_deportation_list_quick_facts) {
    gsap.from('#rj-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_common_challenges_applicants_face = document.getElementById('rj-deportation-list-common-challenges-applicants-face');
  if (rj_deportation_list_common_challenges_applicants_face) {
    gsap.from('#rj-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_how_we_solve_these_challenges = document.getElementById('rj-deportation-list-how-we-solve-these-challenges');
  if (rj_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#rj-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_service_overview = document.getElementById('rj-deportation-section-service-overview');
  if (rj_deportation_section_service_overview) {
    gsap.fromTo('#rj-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_form_who_is_this_service_for = document.getElementById('rj-deportation-form-who-is-this-service-for');
  if (rj_deportation_form_who_is_this_service_for) {
    gsap.from('#rj-deportation-form-who-is-this-service-for input, #rj-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_required_documents = document.getElementById('rj-deportation-list-required-documents');
  if (rj_deportation_list_required_documents) {
    gsap.from('#rj-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_process = document.getElementById('rj-deportation-list-process');
  if (rj_deportation_list_process) {
    gsap.from('#rj-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_timelines_deadlines = document.getElementById('rj-deportation-section-timelines-deadlines');
  if (rj_deportation_section_timelines_deadlines) {
    gsap.fromTo('#rj-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_fees_costs = document.getElementById('rj-deportation-section-fees-costs');
  if (rj_deportation_section_fees_costs) {
    gsap.fromTo('#rj-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_risks_common_mistakes = document.getElementById('rj-deportation-list-risks-common-mistakes');
  if (rj_deportation_list_risks_common_mistakes) {
    gsap.from('#rj-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_diy_vs_professional_assistance = document.getElementById('rj-deportation-section-diy-vs-professional-assistance');
  if (rj_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_rio_de_janeiro_specific_context = document.getElementById('rj-deportation-section-rio-de-janeiro-specific-context');
  if (rj_deportation_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-deportation-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_what_our_clients_say = document.getElementById('rj-deportation-section-what-our-clients-say');
  if (rj_deportation_section_what_our_clients_say) {
    gsap.fromTo('#rj-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_frequently_asked_questions = document.getElementById('rj-deportation-section-frequently-asked-questions');
  if (rj_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#rj-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_international_support = document.getElementById('rj-deportation-section-international-support');
  if (rj_deportation_section_international_support) {
    gsap.fromTo('#rj-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_our_credentials = document.getElementById('rj-deportation-list-our-credentials');
  if (rj_deportation_list_our_credentials) {
    gsap.from('#rj-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_list_related_services = document.getElementById('rj-deportation-list-related-services');
  if (rj_deportation_list_related_services) {
    gsap.from('#rj-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_youre_in_good_hands = document.getElementById('rj-deportation-section-youre-in-good-hands');
  if (rj_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#rj-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_deportation_section_21 = document.getElementById('rj-deportation-section-21');
  if (rj_deportation_section_21) {
    gsap.fromTo('#rj-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('rj-translation-form-sworn-document-translation-services-in-brazil');
  if (rj_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#rj-translation-form-sworn-document-translation-services-in-brazil input, #rj-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_quick_facts = document.getElementById('rj-translation-list-quick-facts');
  if (rj_translation_list_quick_facts) {
    gsap.from('#rj-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_common_challenges_applicants_face = document.getElementById('rj-translation-list-common-challenges-applicants-face');
  if (rj_translation_list_common_challenges_applicants_face) {
    gsap.from('#rj-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_how_we_solve_these_challenges = document.getElementById('rj-translation-list-how-we-solve-these-challenges');
  if (rj_translation_list_how_we_solve_these_challenges) {
    gsap.from('#rj-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_service_overview = document.getElementById('rj-translation-section-service-overview');
  if (rj_translation_section_service_overview) {
    gsap.fromTo('#rj-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_form_who_is_this_service_for = document.getElementById('rj-translation-form-who-is-this-service-for');
  if (rj_translation_form_who_is_this_service_for) {
    gsap.from('#rj-translation-form-who-is-this-service-for input, #rj-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_required_documents = document.getElementById('rj-translation-list-required-documents');
  if (rj_translation_list_required_documents) {
    gsap.from('#rj-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_process = document.getElementById('rj-translation-list-process');
  if (rj_translation_list_process) {
    gsap.from('#rj-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_timelines_deadlines = document.getElementById('rj-translation-section-timelines-deadlines');
  if (rj_translation_section_timelines_deadlines) {
    gsap.fromTo('#rj-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_fees_costs = document.getElementById('rj-translation-section-fees-costs');
  if (rj_translation_section_fees_costs) {
    gsap.fromTo('#rj-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_risks_common_mistakes = document.getElementById('rj-translation-list-risks-common-mistakes');
  if (rj_translation_list_risks_common_mistakes) {
    gsap.from('#rj-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_diy_vs_professional_assistance = document.getElementById('rj-translation-section-diy-vs-professional-assistance');
  if (rj_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_rio_de_janeiro_specific_context = document.getElementById('rj-translation-section-rio-de-janeiro-specific-context');
  if (rj_translation_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-translation-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_what_our_clients_say = document.getElementById('rj-translation-section-what-our-clients-say');
  if (rj_translation_section_what_our_clients_say) {
    gsap.fromTo('#rj-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_frequently_asked_questions = document.getElementById('rj-translation-section-frequently-asked-questions');
  if (rj_translation_section_frequently_asked_questions) {
    gsap.fromTo('#rj-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_international_support = document.getElementById('rj-translation-section-international-support');
  if (rj_translation_section_international_support) {
    gsap.fromTo('#rj-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_our_credentials = document.getElementById('rj-translation-list-our-credentials');
  if (rj_translation_list_our_credentials) {
    gsap.from('#rj-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_list_related_services = document.getElementById('rj-translation-list-related-services');
  if (rj_translation_list_related_services) {
    gsap.from('#rj-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_youre_in_good_hands = document.getElementById('rj-translation-section-youre-in-good-hands');
  if (rj_translation_section_youre_in_good_hands) {
    gsap.fromTo('#rj-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_translation_section_21 = document.getElementById('rj-translation-section-21');
  if (rj_translation_section_21) {
    gsap.fromTo('#rj-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('rj-expulsion-form-expulsion-assistance-in-brazil');
  if (rj_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#rj-expulsion-form-expulsion-assistance-in-brazil input, #rj-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_quick_facts = document.getElementById('rj-expulsion-list-quick-facts');
  if (rj_expulsion_list_quick_facts) {
    gsap.from('#rj-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_common_challenges_applicants_face = document.getElementById('rj-expulsion-list-common-challenges-applicants-face');
  if (rj_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#rj-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_how_we_solve_these_challenges = document.getElementById('rj-expulsion-list-how-we-solve-these-challenges');
  if (rj_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#rj-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_service_overview = document.getElementById('rj-expulsion-section-service-overview');
  if (rj_expulsion_section_service_overview) {
    gsap.fromTo('#rj-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_form_who_is_this_service_for = document.getElementById('rj-expulsion-form-who-is-this-service-for');
  if (rj_expulsion_form_who_is_this_service_for) {
    gsap.from('#rj-expulsion-form-who-is-this-service-for input, #rj-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_required_documents = document.getElementById('rj-expulsion-list-required-documents');
  if (rj_expulsion_list_required_documents) {
    gsap.from('#rj-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_process = document.getElementById('rj-expulsion-list-process');
  if (rj_expulsion_list_process) {
    gsap.from('#rj-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_timelines_deadlines = document.getElementById('rj-expulsion-section-timelines-deadlines');
  if (rj_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#rj-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_fees_costs = document.getElementById('rj-expulsion-section-fees-costs');
  if (rj_expulsion_section_fees_costs) {
    gsap.fromTo('#rj-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_risks_common_mistakes = document.getElementById('rj-expulsion-list-risks-common-mistakes');
  if (rj_expulsion_list_risks_common_mistakes) {
    gsap.from('#rj-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_diy_vs_professional_assistance = document.getElementById('rj-expulsion-section-diy-vs-professional-assistance');
  if (rj_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_rio_de_janeiro_specific_context = document.getElementById('rj-expulsion-section-rio-de-janeiro-specific-context');
  if (rj_expulsion_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-expulsion-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_what_our_clients_say = document.getElementById('rj-expulsion-section-what-our-clients-say');
  if (rj_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#rj-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_frequently_asked_questions = document.getElementById('rj-expulsion-section-frequently-asked-questions');
  if (rj_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#rj-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_international_support = document.getElementById('rj-expulsion-section-international-support');
  if (rj_expulsion_section_international_support) {
    gsap.fromTo('#rj-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_our_credentials = document.getElementById('rj-expulsion-list-our-credentials');
  if (rj_expulsion_list_our_credentials) {
    gsap.from('#rj-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_list_related_services = document.getElementById('rj-expulsion-list-related-services');
  if (rj_expulsion_list_related_services) {
    gsap.from('#rj-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_youre_in_good_hands = document.getElementById('rj-expulsion-section-youre-in-good-hands');
  if (rj_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#rj-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_expulsion_section_21 = document.getElementById('rj-expulsion-section-21');
  if (rj_expulsion_section_21) {
    gsap.fromTo('#rj-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('rj-appeals-form-appeal-immigration-denials-in-brazil');
  if (rj_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#rj-appeals-form-appeal-immigration-denials-in-brazil input, #rj-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_quick_facts = document.getElementById('rj-appeals-list-quick-facts');
  if (rj_appeals_list_quick_facts) {
    gsap.from('#rj-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_common_challenges_applicants_face = document.getElementById('rj-appeals-list-common-challenges-applicants-face');
  if (rj_appeals_list_common_challenges_applicants_face) {
    gsap.from('#rj-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_how_we_solve_these_challenges = document.getElementById('rj-appeals-list-how-we-solve-these-challenges');
  if (rj_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#rj-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_service_overview = document.getElementById('rj-appeals-section-service-overview');
  if (rj_appeals_section_service_overview) {
    gsap.fromTo('#rj-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_form_who_is_this_service_for = document.getElementById('rj-appeals-form-who-is-this-service-for');
  if (rj_appeals_form_who_is_this_service_for) {
    gsap.from('#rj-appeals-form-who-is-this-service-for input, #rj-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_required_documents = document.getElementById('rj-appeals-list-required-documents');
  if (rj_appeals_list_required_documents) {
    gsap.from('#rj-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_appeal_process = document.getElementById('rj-appeals-list-appeal-process');
  if (rj_appeals_list_appeal_process) {
    gsap.from('#rj-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_timelines_deadlines = document.getElementById('rj-appeals-section-timelines-deadlines');
  if (rj_appeals_section_timelines_deadlines) {
    gsap.fromTo('#rj-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_fees_costs = document.getElementById('rj-appeals-section-fees-costs');
  if (rj_appeals_section_fees_costs) {
    gsap.fromTo('#rj-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_risks_common_mistakes = document.getElementById('rj-appeals-list-risks-common-mistakes');
  if (rj_appeals_list_risks_common_mistakes) {
    gsap.from('#rj-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_diy_vs_professional_assistance = document.getElementById('rj-appeals-section-diy-vs-professional-assistance');
  if (rj_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_rio_de_janeiro_specific_context = document.getElementById('rj-appeals-section-rio-de-janeiro-specific-context');
  if (rj_appeals_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-appeals-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_what_our_clients_say = document.getElementById('rj-appeals-section-what-our-clients-say');
  if (rj_appeals_section_what_our_clients_say) {
    gsap.fromTo('#rj-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_frequently_asked_questions = document.getElementById('rj-appeals-section-frequently-asked-questions');
  if (rj_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#rj-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_international_support = document.getElementById('rj-appeals-section-international-support');
  if (rj_appeals_section_international_support) {
    gsap.fromTo('#rj-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_our_credentials = document.getElementById('rj-appeals-list-our-credentials');
  if (rj_appeals_list_our_credentials) {
    gsap.from('#rj-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_list_related_services = document.getElementById('rj-appeals-list-related-services');
  if (rj_appeals_list_related_services) {
    gsap.from('#rj-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_youre_in_good_hands = document.getElementById('rj-appeals-section-youre-in-good-hands');
  if (rj_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#rj-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_appeals_section_21 = document.getElementById('rj-appeals-section-21');
  if (rj_appeals_section_21) {
    gsap.fromTo('#rj-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('rj-consular-form-consular-services-in-brazil-for-citizens');
  if (rj_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#rj-consular-form-consular-services-in-brazil-for-citizens input, #rj-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_quick_facts = document.getElementById('rj-consular-list-quick-facts');
  if (rj_consular_list_quick_facts) {
    gsap.from('#rj-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_common_challenges_applicants_face = document.getElementById('rj-consular-list-common-challenges-applicants-face');
  if (rj_consular_list_common_challenges_applicants_face) {
    gsap.from('#rj-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_how_we_solve_these_challenges = document.getElementById('rj-consular-list-how-we-solve-these-challenges');
  if (rj_consular_list_how_we_solve_these_challenges) {
    gsap.from('#rj-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_service_overview = document.getElementById('rj-consular-section-service-overview');
  if (rj_consular_section_service_overview) {
    gsap.fromTo('#rj-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_form_who_is_this_service_for = document.getElementById('rj-consular-form-who-is-this-service-for');
  if (rj_consular_form_who_is_this_service_for) {
    gsap.from('#rj-consular-form-who-is-this-service-for input, #rj-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_required_documents = document.getElementById('rj-consular-list-required-documents');
  if (rj_consular_list_required_documents) {
    gsap.from('#rj-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_process = document.getElementById('rj-consular-list-process');
  if (rj_consular_list_process) {
    gsap.from('#rj-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_timelines_deadlines = document.getElementById('rj-consular-section-timelines-deadlines');
  if (rj_consular_section_timelines_deadlines) {
    gsap.fromTo('#rj-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_fees_costs = document.getElementById('rj-consular-section-fees-costs');
  if (rj_consular_section_fees_costs) {
    gsap.fromTo('#rj-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_risks_common_mistakes = document.getElementById('rj-consular-list-risks-common-mistakes');
  if (rj_consular_list_risks_common_mistakes) {
    gsap.from('#rj-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_diy_vs_professional_assistance = document.getElementById('rj-consular-section-diy-vs-professional-assistance');
  if (rj_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_rio_de_janeiro_specific_context = document.getElementById('rj-consular-section-rio-de-janeiro-specific-context');
  if (rj_consular_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-consular-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_what_our_clients_say = document.getElementById('rj-consular-section-what-our-clients-say');
  if (rj_consular_section_what_our_clients_say) {
    gsap.fromTo('#rj-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_frequently_asked_questions = document.getElementById('rj-consular-section-frequently-asked-questions');
  if (rj_consular_section_frequently_asked_questions) {
    gsap.fromTo('#rj-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_international_support = document.getElementById('rj-consular-section-international-support');
  if (rj_consular_section_international_support) {
    gsap.fromTo('#rj-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_our_credentials = document.getElementById('rj-consular-list-our-credentials');
  if (rj_consular_list_our_credentials) {
    gsap.from('#rj-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_list_related_services = document.getElementById('rj-consular-list-related-services');
  if (rj_consular_list_related_services) {
    gsap.from('#rj-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_youre_in_good_hands = document.getElementById('rj-consular-section-youre-in-good-hands');
  if (rj_consular_section_youre_in_good_hands) {
    gsap.fromTo('#rj-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_consular_section_21 = document.getElementById('rj-consular-section-21');
  if (rj_consular_section_21) {
    gsap.fromTo('#rj-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('rj-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (rj_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#rj-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #rj-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_quick_facts = document.getElementById('rj-criminalrecords-list-quick-facts');
  if (rj_criminalrecords_list_quick_facts) {
    gsap.from('#rj-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_common_challenges_applicants_face = document.getElementById('rj-criminalrecords-list-common-challenges-applicants-face');
  if (rj_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#rj-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('rj-criminalrecords-list-how-we-solve-these-challenges');
  if (rj_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#rj-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_service_overview = document.getElementById('rj-criminalrecords-section-service-overview');
  if (rj_criminalrecords_section_service_overview) {
    gsap.fromTo('#rj-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_form_who_is_this_service_for = document.getElementById('rj-criminalrecords-form-who-is-this-service-for');
  if (rj_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#rj-criminalrecords-form-who-is-this-service-for input, #rj-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_required_documents = document.getElementById('rj-criminalrecords-list-required-documents');
  if (rj_criminalrecords_list_required_documents) {
    gsap.from('#rj-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_process = document.getElementById('rj-criminalrecords-list-process');
  if (rj_criminalrecords_list_process) {
    gsap.from('#rj-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_timelines_deadlines = document.getElementById('rj-criminalrecords-section-timelines-deadlines');
  if (rj_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#rj-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_fees_costs = document.getElementById('rj-criminalrecords-section-fees-costs');
  if (rj_criminalrecords_section_fees_costs) {
    gsap.fromTo('#rj-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_risks_common_mistakes = document.getElementById('rj-criminalrecords-list-risks-common-mistakes');
  if (rj_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#rj-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('rj-criminalrecords-section-diy-vs-professional-assistance');
  if (rj_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_rio_de_janeiro_specific_context = document.getElementById('rj-criminalrecords-section-rio-de-janeiro-specific-context');
  if (rj_criminalrecords_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-criminalrecords-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_what_our_clients_say = document.getElementById('rj-criminalrecords-section-what-our-clients-say');
  if (rj_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#rj-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_frequently_asked_questions = document.getElementById('rj-criminalrecords-section-frequently-asked-questions');
  if (rj_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#rj-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_international_support = document.getElementById('rj-criminalrecords-section-international-support');
  if (rj_criminalrecords_section_international_support) {
    gsap.fromTo('#rj-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_our_credentials = document.getElementById('rj-criminalrecords-list-our-credentials');
  if (rj_criminalrecords_list_our_credentials) {
    gsap.from('#rj-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_list_related_services = document.getElementById('rj-criminalrecords-list-related-services');
  if (rj_criminalrecords_list_related_services) {
    gsap.from('#rj-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_youre_in_good_hands = document.getElementById('rj-criminalrecords-section-youre-in-good-hands');
  if (rj_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#rj-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_criminalrecords_section_21 = document.getElementById('rj-criminalrecords-section-21');
  if (rj_criminalrecords_section_21) {
    gsap.fromTo('#rj-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_form_extradition_assistance_in_brazil = document.getElementById('rj-extradition-form-extradition-assistance-in-brazil');
  if (rj_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#rj-extradition-form-extradition-assistance-in-brazil input, #rj-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_quick_facts = document.getElementById('rj-extradition-list-quick-facts');
  if (rj_extradition_list_quick_facts) {
    gsap.from('#rj-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_common_challenges_applicants_face = document.getElementById('rj-extradition-list-common-challenges-applicants-face');
  if (rj_extradition_list_common_challenges_applicants_face) {
    gsap.from('#rj-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_how_we_solve_these_challenges = document.getElementById('rj-extradition-list-how-we-solve-these-challenges');
  if (rj_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#rj-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_service_overview = document.getElementById('rj-extradition-section-service-overview');
  if (rj_extradition_section_service_overview) {
    gsap.fromTo('#rj-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_form_who_is_this_service_for = document.getElementById('rj-extradition-form-who-is-this-service-for');
  if (rj_extradition_form_who_is_this_service_for) {
    gsap.from('#rj-extradition-form-who-is-this-service-for input, #rj-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_required_documents = document.getElementById('rj-extradition-list-required-documents');
  if (rj_extradition_list_required_documents) {
    gsap.from('#rj-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_process = document.getElementById('rj-extradition-list-process');
  if (rj_extradition_list_process) {
    gsap.from('#rj-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_timelines_deadlines = document.getElementById('rj-extradition-section-timelines-deadlines');
  if (rj_extradition_section_timelines_deadlines) {
    gsap.fromTo('#rj-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_fees_costs = document.getElementById('rj-extradition-section-fees-costs');
  if (rj_extradition_section_fees_costs) {
    gsap.fromTo('#rj-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_risks_common_mistakes = document.getElementById('rj-extradition-list-risks-common-mistakes');
  if (rj_extradition_list_risks_common_mistakes) {
    gsap.from('#rj-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_diy_vs_professional_assistance = document.getElementById('rj-extradition-section-diy-vs-professional-assistance');
  if (rj_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_rio_de_janeiro_specific_context = document.getElementById('rj-extradition-section-rio-de-janeiro-specific-context');
  if (rj_extradition_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-extradition-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_what_our_clients_say = document.getElementById('rj-extradition-section-what-our-clients-say');
  if (rj_extradition_section_what_our_clients_say) {
    gsap.fromTo('#rj-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_frequently_asked_questions = document.getElementById('rj-extradition-section-frequently-asked-questions');
  if (rj_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#rj-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_international_support = document.getElementById('rj-extradition-section-international-support');
  if (rj_extradition_section_international_support) {
    gsap.fromTo('#rj-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_our_credentials = document.getElementById('rj-extradition-list-our-credentials');
  if (rj_extradition_list_our_credentials) {
    gsap.from('#rj-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_list_related_services = document.getElementById('rj-extradition-list-related-services');
  if (rj_extradition_list_related_services) {
    gsap.from('#rj-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_youre_in_good_hands = document.getElementById('rj-extradition-section-youre-in-good-hands');
  if (rj_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#rj-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_extradition_section_21 = document.getElementById('rj-extradition-section-21');
  if (rj_extradition_section_21) {
    gsap.fromTo('#rj-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_form_discover_the_north_amazon_and_beyond = document.getElementById('rj-north-form-discover-the-north-amazon-and-beyond');
  if (rj_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#rj-north-form-discover-the-north-amazon-and-beyond input, #rj-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_quick_facts = document.getElementById('rj-north-list-quick-facts');
  if (rj_north_list_quick_facts) {
    gsap.from('#rj-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_common_challenges_applicants_face = document.getElementById('rj-north-list-common-challenges-applicants-face');
  if (rj_north_list_common_challenges_applicants_face) {
    gsap.from('#rj-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_how_we_solve_these_challenges = document.getElementById('rj-north-list-how-we-solve-these-challenges');
  if (rj_north_list_how_we_solve_these_challenges) {
    gsap.from('#rj-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_trip_overview = document.getElementById('rj-north-section-trip-overview');
  if (rj_north_section_trip_overview) {
    gsap.fromTo('#rj-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_form_who_is_this_trip_for = document.getElementById('rj-north-form-who-is-this-trip-for');
  if (rj_north_form_who_is_this_trip_for) {
    gsap.from('#rj-north-form-who-is-this-trip-for input, #rj-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_required_documents = document.getElementById('rj-north-list-required-documents');
  if (rj_north_list_required_documents) {
    gsap.from('#rj-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_booking_process = document.getElementById('rj-north-list-booking-process');
  if (rj_north_list_booking_process) {
    gsap.from('#rj-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_timelines_deadlines = document.getElementById('rj-north-section-timelines-deadlines');
  if (rj_north_section_timelines_deadlines) {
    gsap.fromTo('#rj-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_fees_costs = document.getElementById('rj-north-section-fees-costs');
  if (rj_north_section_fees_costs) {
    gsap.fromTo('#rj-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_risks_common_mistakes = document.getElementById('rj-north-list-risks-common-mistakes');
  if (rj_north_list_risks_common_mistakes) {
    gsap.from('#rj-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_diy_vs_professional_assistance = document.getElementById('rj-north-section-diy-vs-professional-assistance');
  if (rj_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_rio_de_janeiro_specific_context = document.getElementById('rj-north-section-rio-de-janeiro-specific-context');
  if (rj_north_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-north-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_what_our_clients_say = document.getElementById('rj-north-section-what-our-clients-say');
  if (rj_north_section_what_our_clients_say) {
    gsap.fromTo('#rj-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_frequently_asked_questions = document.getElementById('rj-north-section-frequently-asked-questions');
  if (rj_north_section_frequently_asked_questions) {
    gsap.fromTo('#rj-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_international_support = document.getElementById('rj-north-section-international-support');
  if (rj_north_section_international_support) {
    gsap.fromTo('#rj-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_our_credentials = document.getElementById('rj-north-list-our-credentials');
  if (rj_north_list_our_credentials) {
    gsap.from('#rj-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_list_related_services = document.getElementById('rj-north-list-related-services');
  if (rj_north_list_related_services) {
    gsap.from('#rj-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_youre_in_good_hands = document.getElementById('rj-north-section-youre-in-good-hands');
  if (rj_north_section_youre_in_good_hands) {
    gsap.fromTo('#rj-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_north_section_21 = document.getElementById('rj-north-section-21');
  if (rj_north_section_21) {
    gsap.fromTo('#rj-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('rj-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (rj_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#rj-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #rj-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_quick_facts = document.getElementById('rj-centralwest-list-quick-facts');
  if (rj_centralwest_list_quick_facts) {
    gsap.from('#rj-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_common_challenges_applicants_face = document.getElementById('rj-centralwest-list-common-challenges-applicants-face');
  if (rj_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#rj-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_how_we_solve_these_challenges = document.getElementById('rj-centralwest-list-how-we-solve-these-challenges');
  if (rj_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#rj-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_trip_overview = document.getElementById('rj-centralwest-section-trip-overview');
  if (rj_centralwest_section_trip_overview) {
    gsap.fromTo('#rj-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_form_who_is_this_trip_for = document.getElementById('rj-centralwest-form-who-is-this-trip-for');
  if (rj_centralwest_form_who_is_this_trip_for) {
    gsap.from('#rj-centralwest-form-who-is-this-trip-for input, #rj-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_required_documents = document.getElementById('rj-centralwest-list-required-documents');
  if (rj_centralwest_list_required_documents) {
    gsap.from('#rj-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_booking_process = document.getElementById('rj-centralwest-list-booking-process');
  if (rj_centralwest_list_booking_process) {
    gsap.from('#rj-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_timelines_deadlines = document.getElementById('rj-centralwest-section-timelines-deadlines');
  if (rj_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#rj-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_fees_costs = document.getElementById('rj-centralwest-section-fees-costs');
  if (rj_centralwest_section_fees_costs) {
    gsap.fromTo('#rj-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_risks_common_mistakes = document.getElementById('rj-centralwest-list-risks-common-mistakes');
  if (rj_centralwest_list_risks_common_mistakes) {
    gsap.from('#rj-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_diy_vs_professional_assistance = document.getElementById('rj-centralwest-section-diy-vs-professional-assistance');
  if (rj_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_rio_de_janeiro_specific_context = document.getElementById('rj-centralwest-section-rio-de-janeiro-specific-context');
  if (rj_centralwest_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-centralwest-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_what_our_clients_say = document.getElementById('rj-centralwest-section-what-our-clients-say');
  if (rj_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#rj-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_frequently_asked_questions = document.getElementById('rj-centralwest-section-frequently-asked-questions');
  if (rj_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#rj-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_international_support = document.getElementById('rj-centralwest-section-international-support');
  if (rj_centralwest_section_international_support) {
    gsap.fromTo('#rj-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_our_credentials = document.getElementById('rj-centralwest-list-our-credentials');
  if (rj_centralwest_list_our_credentials) {
    gsap.from('#rj-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_list_related_services = document.getElementById('rj-centralwest-list-related-services');
  if (rj_centralwest_list_related_services) {
    gsap.from('#rj-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_youre_in_good_hands = document.getElementById('rj-centralwest-section-youre-in-good-hands');
  if (rj_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#rj-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_centralwest_section_21 = document.getElementById('rj-centralwest-section-21');
  if (rj_centralwest_section_21) {
    gsap.fromTo('#rj-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('rj-southeast-form-dynamic-southeast-cities-and-history');
  if (rj_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#rj-southeast-form-dynamic-southeast-cities-and-history input, #rj-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_quick_facts = document.getElementById('rj-southeast-list-quick-facts');
  if (rj_southeast_list_quick_facts) {
    gsap.from('#rj-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_common_challenges_applicants_face = document.getElementById('rj-southeast-list-common-challenges-applicants-face');
  if (rj_southeast_list_common_challenges_applicants_face) {
    gsap.from('#rj-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_how_we_solve_these_challenges = document.getElementById('rj-southeast-list-how-we-solve-these-challenges');
  if (rj_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#rj-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_trip_overview = document.getElementById('rj-southeast-section-trip-overview');
  if (rj_southeast_section_trip_overview) {
    gsap.fromTo('#rj-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_form_who_is_this_trip_for = document.getElementById('rj-southeast-form-who-is-this-trip-for');
  if (rj_southeast_form_who_is_this_trip_for) {
    gsap.from('#rj-southeast-form-who-is-this-trip-for input, #rj-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_required_documents = document.getElementById('rj-southeast-list-required-documents');
  if (rj_southeast_list_required_documents) {
    gsap.from('#rj-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_booking_process = document.getElementById('rj-southeast-list-booking-process');
  if (rj_southeast_list_booking_process) {
    gsap.from('#rj-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_timelines_deadlines = document.getElementById('rj-southeast-section-timelines-deadlines');
  if (rj_southeast_section_timelines_deadlines) {
    gsap.fromTo('#rj-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_fees_costs = document.getElementById('rj-southeast-section-fees-costs');
  if (rj_southeast_section_fees_costs) {
    gsap.fromTo('#rj-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_risks_common_mistakes = document.getElementById('rj-southeast-list-risks-common-mistakes');
  if (rj_southeast_list_risks_common_mistakes) {
    gsap.from('#rj-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_diy_vs_professional_assistance = document.getElementById('rj-southeast-section-diy-vs-professional-assistance');
  if (rj_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_rio_de_janeiro_specific_context = document.getElementById('rj-southeast-section-rio-de-janeiro-specific-context');
  if (rj_southeast_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-southeast-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_what_our_clients_say = document.getElementById('rj-southeast-section-what-our-clients-say');
  if (rj_southeast_section_what_our_clients_say) {
    gsap.fromTo('#rj-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_frequently_asked_questions = document.getElementById('rj-southeast-section-frequently-asked-questions');
  if (rj_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#rj-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_international_support = document.getElementById('rj-southeast-section-international-support');
  if (rj_southeast_section_international_support) {
    gsap.fromTo('#rj-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_our_credentials = document.getElementById('rj-southeast-list-our-credentials');
  if (rj_southeast_list_our_credentials) {
    gsap.from('#rj-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_list_related_services = document.getElementById('rj-southeast-list-related-services');
  if (rj_southeast_list_related_services) {
    gsap.from('#rj-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_youre_in_good_hands = document.getElementById('rj-southeast-section-youre-in-good-hands');
  if (rj_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#rj-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_southeast_section_21 = document.getElementById('rj-southeast-section-21');
  if (rj_southeast_section_21) {
    gsap.fromTo('#rj-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('rj-northeast-form-vibrant-northeast-beaches-and-culture');
  if (rj_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#rj-northeast-form-vibrant-northeast-beaches-and-culture input, #rj-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_quick_facts = document.getElementById('rj-northeast-list-quick-facts');
  if (rj_northeast_list_quick_facts) {
    gsap.from('#rj-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_common_challenges_applicants_face = document.getElementById('rj-northeast-list-common-challenges-applicants-face');
  if (rj_northeast_list_common_challenges_applicants_face) {
    gsap.from('#rj-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_how_we_solve_these_challenges = document.getElementById('rj-northeast-list-how-we-solve-these-challenges');
  if (rj_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#rj-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_trip_overview = document.getElementById('rj-northeast-section-trip-overview');
  if (rj_northeast_section_trip_overview) {
    gsap.fromTo('#rj-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_form_who_is_this_trip_for = document.getElementById('rj-northeast-form-who-is-this-trip-for');
  if (rj_northeast_form_who_is_this_trip_for) {
    gsap.from('#rj-northeast-form-who-is-this-trip-for input, #rj-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_required_documents = document.getElementById('rj-northeast-list-required-documents');
  if (rj_northeast_list_required_documents) {
    gsap.from('#rj-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_booking_process = document.getElementById('rj-northeast-list-booking-process');
  if (rj_northeast_list_booking_process) {
    gsap.from('#rj-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_timelines_deadlines = document.getElementById('rj-northeast-section-timelines-deadlines');
  if (rj_northeast_section_timelines_deadlines) {
    gsap.fromTo('#rj-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_fees_costs = document.getElementById('rj-northeast-section-fees-costs');
  if (rj_northeast_section_fees_costs) {
    gsap.fromTo('#rj-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_risks_common_mistakes = document.getElementById('rj-northeast-list-risks-common-mistakes');
  if (rj_northeast_list_risks_common_mistakes) {
    gsap.from('#rj-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_diy_vs_professional_assistance = document.getElementById('rj-northeast-section-diy-vs-professional-assistance');
  if (rj_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_rio_de_janeiro_specific_context = document.getElementById('rj-northeast-section-rio-de-janeiro-specific-context');
  if (rj_northeast_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-northeast-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_what_our_clients_say = document.getElementById('rj-northeast-section-what-our-clients-say');
  if (rj_northeast_section_what_our_clients_say) {
    gsap.fromTo('#rj-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_frequently_asked_questions = document.getElementById('rj-northeast-section-frequently-asked-questions');
  if (rj_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#rj-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_international_support = document.getElementById('rj-northeast-section-international-support');
  if (rj_northeast_section_international_support) {
    gsap.fromTo('#rj-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_our_credentials = document.getElementById('rj-northeast-list-our-credentials');
  if (rj_northeast_list_our_credentials) {
    gsap.from('#rj-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_list_related_services = document.getElementById('rj-northeast-list-related-services');
  if (rj_northeast_list_related_services) {
    gsap.from('#rj-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_youre_in_good_hands = document.getElementById('rj-northeast-section-youre-in-good-hands');
  if (rj_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#rj-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_northeast_section_21 = document.getElementById('rj-northeast-section-21');
  if (rj_northeast_section_21) {
    gsap.fromTo('#rj-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_form_charming_south_wine_and_gauchos = document.getElementById('rj-south-form-charming-south-wine-and-gauchos');
  if (rj_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#rj-south-form-charming-south-wine-and-gauchos input, #rj-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_quick_facts = document.getElementById('rj-south-list-quick-facts');
  if (rj_south_list_quick_facts) {
    gsap.from('#rj-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_common_challenges_applicants_face = document.getElementById('rj-south-list-common-challenges-applicants-face');
  if (rj_south_list_common_challenges_applicants_face) {
    gsap.from('#rj-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_how_we_solve_these_challenges = document.getElementById('rj-south-list-how-we-solve-these-challenges');
  if (rj_south_list_how_we_solve_these_challenges) {
    gsap.from('#rj-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_trip_overview = document.getElementById('rj-south-section-trip-overview');
  if (rj_south_section_trip_overview) {
    gsap.fromTo('#rj-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_form_who_is_this_trip_for = document.getElementById('rj-south-form-who-is-this-trip-for');
  if (rj_south_form_who_is_this_trip_for) {
    gsap.from('#rj-south-form-who-is-this-trip-for input, #rj-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_required_documents = document.getElementById('rj-south-list-required-documents');
  if (rj_south_list_required_documents) {
    gsap.from('#rj-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_booking_process = document.getElementById('rj-south-list-booking-process');
  if (rj_south_list_booking_process) {
    gsap.from('#rj-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_timelines_deadlines = document.getElementById('rj-south-section-timelines-deadlines');
  if (rj_south_section_timelines_deadlines) {
    gsap.fromTo('#rj-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_fees_costs = document.getElementById('rj-south-section-fees-costs');
  if (rj_south_section_fees_costs) {
    gsap.fromTo('#rj-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_risks_common_mistakes = document.getElementById('rj-south-list-risks-common-mistakes');
  if (rj_south_list_risks_common_mistakes) {
    gsap.from('#rj-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_diy_vs_professional_assistance = document.getElementById('rj-south-section-diy-vs-professional-assistance');
  if (rj_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#rj-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_rio_de_janeiro_specific_context = document.getElementById('rj-south-section-rio-de-janeiro-specific-context');
  if (rj_south_section_rio_de_janeiro_specific_context) {
    gsap.fromTo('#rj-south-section-rio-de-janeiro-specific-context', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_what_our_clients_say = document.getElementById('rj-south-section-what-our-clients-say');
  if (rj_south_section_what_our_clients_say) {
    gsap.fromTo('#rj-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_frequently_asked_questions = document.getElementById('rj-south-section-frequently-asked-questions');
  if (rj_south_section_frequently_asked_questions) {
    gsap.fromTo('#rj-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_international_support = document.getElementById('rj-south-section-international-support');
  if (rj_south_section_international_support) {
    gsap.fromTo('#rj-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_our_credentials = document.getElementById('rj-south-list-our-credentials');
  if (rj_south_list_our_credentials) {
    gsap.from('#rj-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_list_related_services = document.getElementById('rj-south-list-related-services');
  if (rj_south_list_related_services) {
    gsap.from('#rj-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_youre_in_good_hands = document.getElementById('rj-south-section-youre-in-good-hands');
  if (rj_south_section_youre_in_good_hands) {
    gsap.fromTo('#rj-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

  const rj_south_section_21 = document.getElementById('rj-south-section-21');
  if (rj_south_section_21) {
    gsap.fromTo('#rj-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.84, ease: 'easeInOutQuint'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
