       // Load saved preferences
        function loadPreferences() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
            }
            updatePrefsDisplay();
        }

        // Toggle theme and save preference
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            updatePrefsDisplay();
        }

        // Trigger animation
        function triggerAnimation() {
            const target = document.getElementById('animation-target');
            target.style.backgroundColor = getRandomColor();
            target.style.transform = 'scale(1.2)';
            setTimeout(() => {
                target.style.transform = 'scale(1)';
            }, 500);
        }

        // Update preferences display
        function updatePrefsDisplay() {
            const prefs = {
                theme: localStorage.getItem('theme') || 'light',
                lastUpdated: new Date().toLocaleString()
            };
            document.getElementById('prefs-display').innerHTML = `
                <p>Current Theme: ${prefs.theme}</p>
                <p>Last Updated: ${prefs.lastUpdated}</p>
            `;
        }

        // Helper function for random colors
        function getRandomColor() {
            return `hsl(${Math.random() * 360}, 70%, 60%)`;
        }

        // Initialize on load
        window.onload = loadPreferences;
      