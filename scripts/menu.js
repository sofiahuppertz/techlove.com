    let closeMenuTimeout;

document.addEventListener('DOMContentLoaded', (event) => {
        const menuButton = document.getElementById('menu-button');
        const menuText = document.getElementById('menu-text');
        const sideMenu = document.getElementById('side-menu');

        menuButton.addEventListener('click', function() {
            event.stopPropagation();
            clearTimeout(closeMenuTimeout);
            if (sideMenu.style.right === '0px') {
                closeMenu();
            } else {
                openMenu();
            }
        });

        document.addEventListener('click', function(event) {
            if (!menuButton.contains(event.target)
            && (!sideMenu.contains(event.target))
            && sideMenu.style.right === '0px'){
                closeMenu();
            }
        })

        function openMenu() {
            sideMenu.style.right = '0px';
            menuButton.style.backgroundColor = '#00008B';
            menuButton.style.color = 'white';
            menuText.textContent = 'Close';

            closeMenuTimeout = setTimeout(closeMenu, 5000);
        }

        function closeMenu() {
            sideMenu.style.right = '-200px';
            menuButton.style.backgroundColor = 'white';
            menuButton.style.color = 'black';
            menuText.textContent = 'Menu';
            menuText.style.transform = 'rotate(0deg)';
        }
    });
