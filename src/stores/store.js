import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        /* Navigation for main menu*/
        menuItems: [
            { label: 'Réalisations', number: '01', link: '/realisations'},
            { label: 'Compétences', number: '02', link: '/skills'},
            { label: 'Documentation', number: '03', link: '/documentation'}
        ],
        /* Navigation for documentation page */
        menuItemsDocumentation: [
            { label: 'Accueil', link: '/' },
            { label: 'Documentation', link: '/documentation' },
            {
                label: 'Vue',
                link: '/documentation/vue',
                icon: 'vuejs',
                color: 'text-green-500',
                buttonBg: 'hover:bg-green-200',
                subMenus: [
                    {
                        label: 'Installation',
                        link: '/documentation/vue/install'
                    },
                    {
                        label: 'Fontawesome',
                        link: '/documentation/vue/fontawesome'
                    }
                ]
            },
            {
                label: 'Symfony',
                link: '/documentation/symfony',
                icon: 'symfony',
                color: 'text-black',
                buttonBg: 'hover:bg-yellow-200',
                subMenus: [
                    {
                        label: 'Installation',
                        link: '/documentation/symfony/install'
                    }
                ]
            }
        ],
    }),
    // Pour obtenir les éléments du menu
    getters:{
        getMenuItemsDocumentation: (state) => state.menuItemsDocumentation
    },

    // Ajouter un nouvel élément au menu
    actions: {
        addMenuItem(item) {
            this.menuItemsDocumentation.push(item);
        }
    }
})