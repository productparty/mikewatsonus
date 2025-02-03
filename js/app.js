// Career Timeline Data
const timelineData = [
    {
      position: "Senior Product Owner",
      company: "Credit Acceptance Corporation",
      period: "2022-Present",
      achievements: [
        "Piloted 'Test Drive' process (+33% enrollment)",
        "Modernized Oracle CRM (+10% satisfaction)",
        "Transitioned 3 teams to Agile"
      ]
    },
    {
      position: "Senior Product Manager",
      company: "Auto Approve",
      period: "2021-2022",
      achievements: [
        "Launched Intercom platforms (-2500+ calls)",
        "+3000% e-notary adoption",
        "Unified vendor backlogs"
      ]
    }
  ];
  
  // Impact Metrics
  const impactMetrics = [
    { metric: "10%", label: "Lead Conversion Increase" },
    { metric: "33%", label: "BBB Complaint Reduction" },
    { metric: "300%", label: "Spanish Lead Identification" }
  ];
  
  // Skills Matrix
  const skillsData = {
    "Product Leadership": ["Roadmapping", "Stakeholder Mgmt", "Agile Transformation"],
    "Technical Execution": ["JIRA Administration", "API Design", "System Integrations"],
    "Data Insights": ["Fullstory Analytics", "A/B Testing", "KPI Tracking"]
  };
  
  // Initialize Components
  document.addEventListener('DOMContentLoaded', () => {
    // Load Timeline
    const timeline = document.getElementById('timelineContainer');
    timelineData.forEach(entry => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <h3>${entry.position} @ ${entry.company}</h3>
        <p class="period">${entry.period}</p>
        <ul>
          ${entry.achievements.map(a => `<li>${a}</li>`).join('')}
        </ul>
      `;
      timeline.appendChild(item);
    });
  
    // Load Impact Metrics
    const impactGrid = document.getElementById('impactGrid');
    impactMetrics.forEach(metric => {
      const card = document.createElement('div');
      card.className = 'impact-card';
      card.innerHTML = `
        <div class="metric">${metric.metric}</div>
        <div class="label">${metric.label}</div>
      `;
      impactGrid.appendChild(card);
    });
  
    // Load Skills
    const skillsGrid = document.getElementById('skillsGrid');
    Object.keys(skillsData).forEach(category => {
      const skills = skillsData[category];
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'skill-category';
      categoryDiv.innerHTML = `
        <h3>${category}</h3>
        <ul>
          ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
      `;
      skillsGrid.appendChild(categoryDiv);
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