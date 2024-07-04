document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.nav-item.dropdown .nav-link');
    const dropdownMenu = document.querySelector('.dropdown-menu.dropdown-megamenu');

    if (dropdownToggle && dropdownMenu) {
        console.log("Dropdown elements found");

        // Función para mostrar el menú desplegable
        const showDropdown = () => {
            dropdownMenu.classList.add('show');
            dropdownToggle.setAttribute('aria-expanded', 'true');
        };

        // Función para ocultar el menú desplegable
        const hideDropdown = () => {
            dropdownMenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        };

        // Event listeners para mostrar el menú al pasar el cursor y ocultarlo al salir
        dropdownToggle.addEventListener('mouseenter', showDropdown);
        dropdownToggle.addEventListener('focus', showDropdown);

        dropdownToggle.addEventListener('mouseleave', (event) => {
            if (!dropdownMenu.contains(event.relatedTarget)) {
                hideDropdown();
            }
        });

        dropdownMenu.addEventListener('mouseleave', (event) => {
            if (!dropdownToggle.contains(event.relatedTarget)) {
                hideDropdown();
            }
        });

        // También puedes agregar event listeners para eventos de clic/touchstart
        dropdownToggle.addEventListener('click', (event) => {
            event.preventDefault();
            if (dropdownMenu.classList.contains('show')) {
                hideDropdown();
            } else {
                showDropdown();
            }
        });

        document.addEventListener('click', (event) => {
            if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
                hideDropdown();
            }
        });

        document.addEventListener('touchstart', (event) => {
            if (!dropdownMenu.contains(event.target) && !dropdownToggle.contains(event.target)) {
                hideDropdown();
            }
        });
    } else {
        console.log("Dropdown elements not found");
    }
});
