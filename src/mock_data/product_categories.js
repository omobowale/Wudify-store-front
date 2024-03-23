export const product_categories = [
    {
        id: 1,
        name: "Shop Furniture",
    },
    {
        id: 2,
        name: "Decor & More",
    },
    {
        id: 3,
        name: "Lighting",
    },

]


export const products = [
    {
        id: 1,
        name: "Tayen Side Table",
        prod_sub_cat: 1,
        imagePath: "/assets/featured_product_1.png",
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true,
        price: "2000",
        color: "Red",
    },
    {
        id: 2,
        name: "Around Coffee Table",
        prod_sub_cat: 2,
        imagePath: "/assets/featured_product_2.png",
        isFeatured: true,
        isBestSeller: true,
        isNewArrival: false,
        price: "2000",
        color: "Blue"
    },
    {
        id: 3,
        name: "CH24 Wishbone Chair",
        prod_sub_cat: 1,
        imagePath: "/assets/featured_product_3.png",
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true,
        price: "2000",
        color: "Green"

    },
    {
        id: 4,
        name: "Nikari April Table Low",
        prod_sub_cat: 3,
        imagePath: "/assets/featured_product_4.png",
        isFeatured: true,
        isBestSeller: false,
        isNewArrival: true,
        price: "2000",
        color: "Red"

    },
    {
        id: 5,
        name: "Delphine Cane Velvet Chair",
        prod_sub_cat: 1,
        imagePath: "/assets/best_seller_product_1.png",
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: false,
        price: "2000",
        color: "Red"
    },
    {
        id: 6,
        name: "Freistil 141 Sofa 2 Seater",
        prod_sub_cat: 2,
        imagePath: "/assets/best_seller_product_2.png",
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: true,
        price: "2000",
        color: "Red"

    },
    {
        id: 7,
        name: "Linea Sohva Sofa",
        prod_sub_cat: 3,
        imagePath: "/assets/best_seller_product_3.png",
        isFeatured: false,
        isBestSeller: true,
        isNewArrival: false,
        price: "2000",
        color: "Red"
    },

]


export const product_sub_categories = [
    {
        id: 1,
        name: "Living Room",
        thumbnailImagePath: "/assets/living_room.png",
        prod_category: 1,
        products: [
            {
                id: 1,
                name: "Sofa & Couches"
            },
            {
                id: 2,
                name: "Chairs & Recliners"
            },
            {
                id: 3,
                name: "Console Tables"
            },
            {
                id: 4,
                name: "Coffee Tables"
            },
            {
                id: 5,
                name: "Side Table Stools"
            },
            {
                id: 6,
                name: "Ottomans"
            },
            {
                id: 7,
                name: "Bookcases & Shelves"
            },
        ]
    },
    {
        id: 2,
        name: "Bedroom Furniture",
        thumbnailImagePath: "/assets/bedroom_furniture.png",
        prod_category: 1,
        products: [
            {
                id: 1,
                name: "Beds"
            },
            {
                id: 2,
                name: "Bedframes & Headboards"
            },
            {
                id: 3,
                name: "Bedside Tables"
            },
            {
                id: 4,
                name: "Wardrobes & Armoires"
            },
            {
                id: 5,
                name: "Dressers & Chests"
            },
            {
                id: 6,
                name: "Mattresses"
            },
        ]
    },
    {
        id: 3,
        name: "Office",
        prod_category: 1,
        thumbnailImagePath: "/assets/office.png",
        products: [
            {
                id: 1,
                name: "Desks"
            },
            {
                id: 2,
                name: "Chairs"
            },
            {
                id: 3,
                name: "Bookcases"
            },
            {
                id: 4,
                name: "Cabinets"
            },
            {
                id: 5,
                name: "Accessories"
            },

        ]
    },
    {
        id: 4,
        name: "Kitchen & Dining",
        thumbnailImagePath: "/assets/kitchen_and_dining.png",
        prod_category: 1,
        products: [
            {
                id: 1,
                name: "Dining Set"
            },
            {
                id: 2,
                name: "Dining Tables"
            },
            {
                id: 3,
                name: "Dining Chairs"
            },
            {
                id: 4,
                name: "Dining Console Table"
            },

        ]
    },
    {
        id: 5,
        name: "Kids & Babies",
        thumbnailImagePath: "/assets/office.png",
        prod_category: 1,
        products: [
            {
                id: 1,
                name: "Bunk Beds"
            },
            {
                id: 2,
                name: "Chairs"
            },
            {
                id: 3,
                name: "Desks"
            },
            {
                id: 4,
                name: "Dressers & Chests"
            },

        ]
    }
    ,
    {
        id: 6,
        name: "Home Decor",
        thumbnailImagePath: "/assets/office.png",
        prod_category: 2,
        products: [
            {
                id: 1,
                name: "Mirrors"
            },
            {
                id: 2,
                name: "Clocks"
            },
            {
                id: 3,
                name: "Throw Pillows"
            },
            {
                id: 4,
                name: "Plants & Vases"
            },

        ]
    },
    {
        id: 7,
        name: "Beddings",
        thumbnailImagePath: "/assets/office.png",
        prod_category: 2,
        products: [
            {
                id: 1,
                name: "Blankets"
            },
            {
                id: 2,
                name: "Duvets"
            },
            {
                id: 3,
                name: "Pillows"
            },
            {
                id: 4,
                name: "Pillow Cases"
            },

        ]
    },
    {
        id: 8,
        name: "Ceiling Lights",
        thumbnailImagePath: "/assets/office.png",
        prod_category: 3,
        products: [
            {
                id: 1,
                name: "Downlights"
            },
            {
                id: 2,
                name: "Pendant Lights"
            },
            {
                id: 3,
                name: "Spot Lights"
            },
            {
                id: 4,
                name: "Chandeliers"
            },

        ]
    },
    {
        id: 8,
        name: "Lamps",
        thumbnailImagePath: "/assets/office.png",
        prod_category: 3,
        products: [
            {
                id: 1,
                name: "Table"
            },
            {
                id: 2,
                name: "Floor"
            },
            {
                id: 3,
                name: "Bedside"
            },
            {
                id: 4,
                name: "Desk"
            },
            {
                id: 5,
                name: "Cordless"
            },

        ]
    }

]