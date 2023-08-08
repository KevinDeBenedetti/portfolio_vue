import { defineStore } from "pinia";

export const useMenuStore = defineStore('menu', {
    state: () => ({
        menuItems: [
            { label: 'Vue', link: '/vue' },
            { label: 'Symfony', link: '/symfony' }
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