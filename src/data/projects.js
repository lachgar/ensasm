const toEmbedUrl = (youtubeLink) => {
  if (!youtubeLink) {
    return null;
  }

  try {
    const url = new URL(youtubeLink);
    const videoId =
      url.hostname.includes("youtu.be")
        ? url.pathname.slice(1)
        : url.searchParams.get("v");

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch {
    return null;
  }
};

const buildTeam = ({
  id,
  teamName,
  members,
  youtubeLink,
  demoLink,
  reportFile,
  articleLink = null,
  title,
  description,
  tags
}) => ({
  id,
  num: id,
  teamName,
  studentName: members[0] ?? teamName,
  members,
  title,
  description,
  videoUrl: toEmbedUrl(youtubeLink),
  youtubeLink,
  portfolioLink: demoLink,
  reportFile,
  articleLink: articleLink ?? `/rapports/${reportFile}`,
  tags
});

export const projects = [
  buildTeam({
    id: 1,
    teamName: "Team 1",
    members: ["Aya Isedrhas", "Maryam Ikherazen", "Mohamed Amine Faik", "Othmane Fath"],
    youtubeLink: "https://youtu.be/9CZ37ADc8Oo",
    demoLink: "https://website-radar.vercel.app/",
    reportFile: "team1.pdf",
    title: "Dependency Risk Radar",
    description: "SBOM, vulnerabilities et licences pour analyser rapidement les dependances d'une application mobile.",
    tags: ["SBOM", "Vulnerabilities", "Licenses"]
  }),
  buildTeam({
    id: 2,
    teamName: "Team 2",
    members: ["Salaheddine BOUAANANE", "Ali DARKAOUI", "Landry DOSSAH", "Etienne DANSOU"],
    youtubeLink: "https://youtu.be/i4aMkAAbI8I",
    demoLink: "https://threat-modeling-assistant-portfolio-sigma.vercel.app/",
    reportFile: "team2.pdf",
    title: "Threat Modeling Assistant",
    description: "Assistant de modelisation de menace avec risk register pour structurer l'analyse de securite.",
    tags: ["Threat Modeling", "Risk Register", "Security"]
  }),
  buildTeam({
    id: 3,
    teamName: "Team 3",
    members: ["Mounir MERGHICH", "Malak BELKHO", "Hiba LAZZOUZI", "Yousra ZARRI"],
    youtubeLink: null,
    demoLink: "https://classy-longma-65f973.netlify.app",
    reportFile: "team3.pdf",
    title: "MASVS/MASTG Audit Copilot",
    description: "Generation automatique de rapport d'audit mobile avec scoring inspire de MASVS et MASTG.",
    tags: ["MASVS", "MASTG", "Audit"]
  }),
  buildTeam({
    id: 4,
    teamName: "Team 4",
    members: ["Saad Chaoulid", "Yahya Bennani", "Saad Amar", "Ismail Amsou"],
    youtubeLink: "https://www.youtube.com/watch?v=OjssO-rxQbE",
    demoLink: "https://mobile-project-landing-page.vercel.app/",
    reportFile: "team4.pdf",
    title: "Mobile DevSecOps Pipeline",
    description: "Pipeline CI/CD securise avec triage assiste pour accelerer le traitement des alertes.",
    tags: ["CI/CD", "DevSecOps", "AI Triage"]
  }),
  buildTeam({
    id: 5,
    teamName: "Team 5",
    members: ["Sara Alaoui Sossi", "Laila ELAMIRI", "Aya EL OUARZAZI", "Ella Vanessa MUGISHA"],
    youtubeLink: "https://www.youtube.com/watch?v=OryCG4rpVcQ",
    demoLink: "https://portfolio-anlayzer-sdk-app.vercel.app/",
    reportFile: "team5.pdf",
    title: "Privacy Posture Analyzer",
    description: "Analyse des permissions, trackers et donnees exposees pour estimer la posture de confidentialite.",
    tags: ["Privacy", "Trackers", "Permissions"]
  }),
  buildTeam({
    id: 6,
    teamName: "Team 6",
    members: ["Mohamed Bril", "Youssef Charaf", "Mouad Charraj", "Ibtissam El Bekkali"],
    youtubeLink: "https://youtu.be/wfyONrTs5OE?si=WoFqKtTwO1s4lTSn",
    demoLink: "https://vulnlab-portfolio-mobile.vercel.app/",
    reportFile: "team6.pdf",
    title: "Vulnerable-by-Design Training App Generator",
    description: "Generateur d'applications d'entrainement volontairement vulnerables pour l'apprentissage securite.",
    tags: ["Training", "Vulnerable App", "Education"]
  }),
  buildTeam({
    id: 7,
    teamName: "Team 7",
    members: ["Malika ELAANTRI", "Bouchra Ouzanzoul", "Wiam Baba", "Oussama BAGY"],
    youtubeLink: "https://youtu.be/UKpPMMqQlpU?si=c_Tx0-sbBvBRy3DY",
    demoLink: "https://tls-posture-analyzer.netlify.app/",
    reportFile: "team7.pdf",
    title: "Network/TLS Posture Analyzer",
    description: "Audit defensif du transport reseau et de la configuration TLS pour identifier les faiblesses.",
    tags: ["Network", "TLS", "Transport"]
  }),
  buildTeam({
    id: 8,
    teamName: "Team 8",
    members: ["Amira EZBIRI", "Houda SAS", "Omayma EL YAMANI", "Soukaina BACHIR"],
    youtubeLink: "https://www.youtube.com/watch?v=R1jc7OPFb_w",
    demoLink: "https://evidence-collector-kappa.vercel.app/",
    reportFile: "team8.pdf",
    title: "Evidence Collector & Compliance Pack",
    description: "Collecte de preuves et generation d'un pack de conformite pour les activites de verification.",
    tags: ["Evidence", "Compliance", "Audit"]
  }),
  buildTeam({
    id: 9,
    teamName: "Team 9",
    members: ["Hidaya Benchelha", "Asma Bensassi Nour", "Ikram Laabouki", "Halima Badr"],
    youtubeLink: "https://youtu.be/RL0NJkLnpu8",
    demoLink: "https://secure-hunter.netlify.app/",
    reportFile: "team9.pdf",
    title: "SecretHunter Android",
    description: "Detection de secrets, tokens et endpoints sensibles dans les projets Android.",
    tags: ["Secrets", "Android", "Detection"]
  }),
  buildTeam({
    id: 10,
    teamName: "Team 10",
    members: ["Amal Sab", "Najwa Saber", "Noussair Bouanani", "Hiba Sidinou"],
    youtubeLink: "https://youtu.be/DOJTwgZXNm8?si=WM3k1m2Sj87UxKuo",
    demoLink: "https://v0-attack-surface-mapper-chi.vercel.app/",
    reportFile: "team10.pdf",
    title: "Attack Surface Mapper",
    description: "Cartographie des composants exportes et visualisation de la surface d'attaque via un graphe.",
    tags: ["Attack Surface", "Graph", "Components"]
  }),
  buildTeam({
    id: 11,
    teamName: "Team 11",
    members: ["YASSER CHETTOUR", "ZAKARIA AOUINATI", "MOHAMED AIT OURAJLI", "ABDELJALIL FAJRI"],
    youtubeLink: "https://www.youtube.com/watch?v=bqXhGGuVgG8",
    demoLink: "https://android-behavior-analysis.vercel.app",
    reportFile: "team11.pdf",
    title: "Dynamic Behavior Profiler",
    description: "Profilage runtime et detection d'anomalies pour observer le comportement dynamique des applications.",
    tags: ["Runtime", "Behavior", "Anomaly Detection"]
  }),
  buildTeam({
    id: 12,
    teamName: "Team 12",
    members: ["KHADIJA LAKBITA", "KAOUTAR EL KISSANY", "SARA ESSAIDI", "CHAIMAA ELGADAOUI"],
    youtubeLink: "https://youtu.be/u_lIBwILBZw",
    demoLink: "https://api-abuuse-detector.netlify.app/",
    reportFile: "team12.pdf",
    title: "Mobile API Misuse Detector",
    description: "Detection d'usages non conformes ou abusifs des API dans les applications mobiles.",
    tags: ["API", "Misuse", "Mobile"]
  }),
  buildTeam({
    id: 13,
    teamName: "Team 13",
    members: ["ANAS AOURIK", "ZEINEDDINE", "LAHSEN AIT OIHMANE", "ABDELHAKIM AMHIRAQ"],
    youtubeLink: "https://youtu.be/3PD2LviaP1w",
    demoLink: "https://vaultdex-web.vercel.app/",
    reportFile: "team13.pdf",
    title: "Secure Storage Inspector",
    description: "Inspection de SharedPrefs, Room, fichiers et cache pour evaluer la securite du stockage local.",
    tags: ["Storage", "Android", "Inspector"]
  }),
  buildTeam({
    id: 14,
    teamName: "Team 14",
    members: ["Hafssa CHAOULID", "Iliass CHBANI", "Jihad DAHOUAS", "Sayf Eddine LAAMRI"],
    youtubeLink: "https://www.youtube.com/watch?v=TpiOdGZplV0",
    demoLink: "https://mobile-sec-analyser.vercel.app/",
    reportFile: "team14.pdf",
    title: "Auth & Session Security Analyzer",
    description: "Analyse des tokens, du refresh et des mecanismes de logout pour verifier la securite de session.",
    tags: ["Auth", "Session", "Tokens"]
  }),
  buildTeam({
    id: 15,
    teamName: "Team 15",
    members: ["Kenza MADILI", "Hajar CHATBAOUI", "Sanae ASSEKENOUR", "Noha MOUSSADDAK"],
    youtubeLink: "https://www.youtube.com/watch?v=NlfvDwxJh_8",
    demoLink: "https://cryptolintai.vercel.app/",
    reportFile: "team15.pdf",
    title: "CryptoLint AI",
    description: "Detection des mauvais usages cryptographiques avec suggestions de correctifs actionnables.",
    tags: ["Crypto", "Lint", "Remediation"]
  }),
  buildTeam({
    id: 16,
    teamName: "Team 16",
    members: ["Houda OUBANE", "Niama NAFTAOUI", "Fatima Ezzahra KASRAOUI", "Fatima Ezzahra EL BOUDHIRI"],
    youtubeLink: "https://youtu.be/s8VMxRk6Zlk?si=CXaXVO-2A6Kr9tz2",
    demoLink: "https://landing-page-zeta-snowy-28.vercel.app/",
    reportFile: "team16.pdf",
    title: "Device Integrity Risk Scorer",
    description: "Scoring du risque d'integrite de l'appareil via des indices root, debug et hooking.",
    tags: ["Integrity", "Root", "Hooking"]
  }),
  buildTeam({
    id: 17,
    teamName: "Team 17",
    members: ["Hiba CHAGDALY", "Fatimaezzahra ENNASSIRI", "Malak LAHNINE", "Sara JAMIRI"],
    youtubeLink: "https://youtu.be/Z19cGqsbdOs",
    demoLink: "https://willowy-genie-13ad09.netlify.app/",
    reportFile: "team17.pdf",
    title: "Security Regression Test Generator",
    description: "Generation automatique de tests de regression pour fiabiliser les controles de securite.",
    tags: ["Regression", "Testing", "Automation"]
  }),
  buildTeam({
    id: 18,
    teamName: "Team 18",
    members: ["Salma Ait Zidane", "Abdelhamid El Hachimi", "Mourad El Ouatik"],
    youtubeLink: "https://youtu.be/5JhOt-H7Kdo",
    demoLink: "https://comforting-haupia-88623e.netlify.app/",
    reportFile: "team18.pdf",
    title: "Secure Storage Inspector",
    description: "Analyse du stockage local Android pour identifier les risques autour de SharedPrefs, Room et cache.",
    tags: ["Storage", "Android", "SharedPrefs"]
  })
];
