// Experience Data
const experiences = [
  {
    company: "Credit Acceptance Corporation",
    position: "Senior Product Owner",
    period: "2022-Present",
    achievements: [
      "Piloted 'Test Drive' process achieving 33% enrollment increase in underperforming states",
      "Modernized Oracle CRM for 450-person sales team (+10% satisfaction)",
      "Transitioned 3 teams from waterfall to Agile, optimizing sprint workflows"
    ]
  },
  {
    company: "Auto Approve",
    position: "Senior Product Manager",
    period: "2021-2022",
    achievements: [
      "Reduced 2,500+ monthly calls/emails via Intercom platforms",
      "Boosted e-notary usage by 3,000% through UI/UX improvements",
      "Unified 3 engineering vendor backlogs into single Jira system"
    ]
  },
  {
    company: "Rocket Mortgage",
    position: "Product Owner",
    period: "2013-2020",
    achievements: [
      "Identified 300% higher Spanish-preferred lead volume through LOS integration",
      "Scaled speech analytics to 10,000+ daily call hours analysis",
      "Migrated 400 users to Salesforce Financial Service Cloud in 6 months"
    ]
  }
];

// Skills Data
const skills = [
  {
    category: "Product Leadership",
    items: ["Roadmapping", "Stakeholder Management", "Agile Transformation"]
  },
  {
    category: "Technical Execution",
    items: ["JIRA Administration", "API Development", "System Integration"]
  },
  {
    category: "Data Insights",
    items: ["Fullstory Analytics", "A/B Testing", "KPI Optimization"]
  }
];

// Community Data
const community = [
  {
    organization: "Product Party",
    role: "Founder",
    contribution: "Newsletter connecting 500+ product professionals"
  },
  {
    organization: "Catchafire",
    role: "Consultant",
    contribution: "Product strategy for 15+ nonprofits"
  }
];

// Initialize Content
document.addEventListener('DOMContentLoaded', () => {
  const experienceGrid = document.getElementById('experienceGrid');
  const skillsMatrix = document.getElementById('skillsMatrix');
  const communityGrid = document.getElementById('communityGrid');

  // Load Experiences
  experiences.forEach(exp => {
    const card = document.createElement('article');
    card.className = 'experience-card';
    card.innerHTML = `
      <div class="company-header">
        <h3>${exp.company}</h3>
        <span class="period">${exp.period}</span>
      </div>
      <h4 class="position">${exp.position}</h4>
      <ul class="achievement-list">
        ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
      </ul>
    `;
    experienceGrid.appendChild(card);
  });

  // Load Skills
  skills.forEach(skillSet => {
    const category = document.createElement('div');
    category.className = 'skill-category';
    category.innerHTML = `
      <h3>${skillSet.category}</h3>
      <ul>
        ${skillSet.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    skillsMatrix.appendChild(category);
  });

  // Load Community
  community.forEach(comm => {
    const card = document.createElement('div');
    card.className = 'community-card';
    card.innerHTML = `
      <h3>${comm.organization}</h3>
      <p class="role">${comm.role}</p>
      <p>${comm.contribution}</p>
    `;
    communityGrid.appendChild(card);
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
