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

// Fetch and Display RSS Feed
const fetchRSSFeed = async () => {
  const rssUrl = 'https://www.productparty.us/feed';
  const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
  const data = await response.json();
  const feedContainer = document.getElementById('rssFeed');

  data.items.forEach(item => {
    const feedItem = document.createElement('div');
    feedItem.className = 'feed-item';
    feedItem.innerHTML = `
      <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
      <p>${item.pubDate}</p>
      <p>${item.description}</p>
    `;
    feedContainer.appendChild(feedItem);
  });
};

// Fetch and Display Newsletter Feed
const newsletterFeed = document.getElementById('news-feed');
fetch('https://productparty.us/feed.json')
  .then(response => response.json())
  .then(data => renderPosts(data.slice(0, 3)))
  .catch(error => console.error('Error fetching newsletter:', error));

function renderPosts(posts) {
  posts.forEach(post => {
    newsletterFeed.innerHTML += `
      <article class="post-card">
        <time>${new Date(post.date).toLocaleDateString()}</time>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <a href="${post.url}" class="cta-pulse">Read Analysis →</a>
      </article>
    `;
  });
}

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
      <h3>${exp.position} at ${exp.company}</h3>
      <p>${exp.period}</p>
      <ul>
        ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
      </ul>
    `;
    experienceGrid.appendChild(card);
  });

  // Load Skills
  skills.forEach(skillSet => {
    const card = document.createElement('article');
    card.className = 'skills-card skill-card';
    card.innerHTML = `
      <div class="skill-card-inner">
        <div class="skill-card-front">
          <h3>${skillSet.category}</h3>
          <ul>
            ${skillSet.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="skill-card-back">
          <h3>Certifications</h3>
          <ul>
            <li>Certification 1</li>
            <li>Certification 2</li>
          </ul>
        </div>
      </div>
    `;
    skillsMatrix.appendChild(card);
  });

  // Load Community
  community.forEach(comm => {
    const card = document.createElement('article');
    card.className = 'community-card';
    card.innerHTML = `
      <h3>${comm.role} at ${comm.organization}</h3>
      <p>${comm.contribution}</p>
    `;
    communityGrid.appendChild(card);
  });

  // Load RSS Feed
  fetchRSSFeed();

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Preconnect to analytics domains
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://www.google-analytics.com';
  document.head.appendChild(link);
});