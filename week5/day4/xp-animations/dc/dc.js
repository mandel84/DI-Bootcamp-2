document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('libform');
    const storySpan = document.getElementById('story');
    const libButton = document.getElementById('lib-button');
    const shuffleButton = document.getElementById('shuffle-button');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (noun === '' || adjective === '' || person === '' || verb === '' || place === '') {
            alert('Please fill in all fields.');
            return;
        }

        const story = `${person} went to ${place} and ${verb} with a ${adjective} ${noun}.`;
        storySpan.textContent = story;
    });

    shuffleButton.addEventListener('click', function() {
        const stories = [
            `${person} found a ${adjective} ${noun} in ${place} and decided to ${verb}.`,
            `${person} ${verb} ${adjective} ${noun} at ${place}. It was hilarious!`,
            `${noun} at ${place} ${verb} ${adjective} ${person}. What a day!`
        ];

        const randomIndex = Math.floor(Math.random() * stories.length);
        storySpan.textContent = stories[randomIndex];
    });
});
