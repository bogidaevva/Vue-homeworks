"use strict";

// 2
let services = [
    {
        title: "Женская стрижка на длинные волосы",
        price: 2000
    },
    {
        title: "Стрижка челки",
        price: 300
    },
    {
        title: "Детская стрижка (до 7 лет)",
        price: 700
    },
    {
        title: "Мужская стрижка",
        price: 1000
    },
    {
        title: "Коррекция бороды",
        price: 1200
    },
    {
        title: "Тонирование мужских волос",
        price: 1500
    },
    {
        title: "Окрашивание волос",
        price: 5000
    },
    {
        title: "Женский маникюр",
        price: 1500
    },
    {
        title: "Мужской маникюр",
        price: 1700
    },
    {
        title: "Педикюр",
        price: 2500
    },
    {
        title: "Покрытие гель-лаком",
        price: 1500
    },
];

Vue.createApp({
    data(){
        return{
            services,
            selectedServices: []
        }
    },
    methods: {
        addService(service){
            if (!(this.selectedServices.includes(service))) this.selectedServices.push(service);
            else alert("Вы уже добавили данную услугу.")
        },
        calculateTotalCost(arr){
            let cost = 0;
            for (let obj of arr){
                cost += obj.price;
            }
            return cost;
        },
        deleteService(service){
            this.selectedServices.splice(this.selectedServices.indexOf(service, 0), 1);
        }
    },
    computed: {
        totalCost(){
            return this.calculateTotalCost(this.selectedServices);
        }
    }
}).mount("#services");
