import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        /*Navigation*/
        menuItems: [
            { label: 'Accueil', link: '/' },
            {
                label: 'Vue',
                link: '/vue',
                icon: 'vuejs',
                color: 'text-green-500',
                subMenus: [
                    {
                        label: 'Installation',
                        link: '/install'
                    },
                    {
                        label: 'Fontawesome',
                        link: '/fontawesome'
                    }
                ]
            },
            {
                label: 'Symfony',
                link: '/symfony',
                icon: 'symfony',
                color: 'text-black',
                subMenus: [
                    { label: 'Installation', link: '/install'}
                ]
            }
        ],
    }),
    // Pour obtenir les éléments du menu
    getters:{
        getMenuItems: (state) => state.menuItems
    },

    // Ajouter un nouvel élément au menu
    actions: {
        addMenuItem(item) {
            this.menuItems.push(item);
        }
    }
})