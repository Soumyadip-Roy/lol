
                    const accordians = document.querySelectorAll('.accordian');

    accordians.forEach(accordian => {
        const icon = accordian.querySelector('.icon');
        const answer = accordian.querySelector('.answer');

        accordian.addEventListener('click', () => {
            
            if(icon.classList.contains('active')) {
                icon.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                icon.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
            
        })
    })
               
        document.addEventListener('DOMContentLoaded', function () {
        const fetchLinks = document.querySelectorAll('.fetch-link');
        let selectedLink = document.querySelector('.fetch-link.active'); // Set initially active link
    
        fetchLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
    
                // Remove styles from the previously selected link
                if (selectedLink) {
                    selectedLink.classList.remove('active');
                }
    
                // Apply styles to the clicked link
                link.classList.add('active');
                selectedLink = link;
    
                const url = link.getAttribute('data-url');
                const targetContainerId = link.getAttribute('data-target-container');
    
                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    })
                    .then(data => {
                        // Create a temporary container to hold the fetched content
                        const tempContainer = document.createElement('div');
                        tempContainer.innerHTML = data;
    
                        // Extract the specific content from the fetched page based on its unique identifier
                        const fetchedContent = tempContainer.querySelector('#specificContent');
    
                        // Get the container to replace on the main page
                        const mainContainer = document.getElementById(targetContainerId);
    
                        // Extract and append stylesheets
                        const stylesheets = tempContainer.querySelectorAll('link[rel="stylesheet"]');
                        stylesheets.forEach(stylesheet => {
                            const clonedStylesheet = stylesheet.cloneNode(true);
                            document.head.appendChild(clonedStylesheet);
                        });
    
                        // Replace the content in the main container with the fetched content
                        mainContainer.innerHTML = '';
                        mainContainer.appendChild(fetchedContent);
    
                        // Log to check if the stylesheets are loaded
                        console.log('Stylesheets loaded:', stylesheets);
                    })
                    .catch(error => {
                        console.error('Error fetching content:', error);
                    });
            });
        });
    });
    
    