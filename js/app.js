// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Add project cards dynamically
    const projects = [
        { title: "API Gateway", description: "Scalable microservices architecture" },
        { title: "Dashboard UI", description: "Real-time analytics interface" }
    ];

    const grid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        `;
        grid.appendChild(card);
    });
});
