export function changeHeaderColor(header) {
    header.style.transition = 'background-color 0.3s '; // Añadir transición suave

    const handleScroll = () => {
        if (window.scrollY > 600) {
            header.style.backgroundColor = '#d68e88'; // Azul semi-transparente
        } else {
            header.style.backgroundColor = 'white'; // Lightblue semi-transparente
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}