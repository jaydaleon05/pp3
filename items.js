const items = [
    {
        product_no: 1,
        product_name: "Pardon",
        product_price: 10000,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem numquam deserunt aliquam porro nesciunt est distinctio commodi laborum quisquam sit beatae vero, labore in dolore consequatur culpa nam tenetur.",
        product_image: "img/n1.webp"
    

    },
    {
        product_no: 2,
        product_name: "Narcotic",
        product_price: 8000,
        product_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae in laboriosam a vero at ipsa reprehenderit? Rerum dicta quos delectus praesentium, laudantium ad veniam quaerat, hic minima nihil laboriosam culpa?",
        product_image: "img/n2.webp"
    

    },
    {
        product_no: 3,
        product_name: "Duro",
        product_price: 8500,
        product_desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos provident est aliquam dolorem placeat aspernatur unde sunt aliquid a voluptas laboriosam fugiat itaque doloribus, odit quidem quisquam earum officiis harum..",
        product_image: "img/n3.webp"
    

    },
    {
        product_no: 4,
        product_name: "Alexandria III",
        product_price: 16000,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/x2.webp"
    

    },
    {
        product_no: 5,
        product_name: "Amber Aoud parfum",
        product_price: 25000,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/r1.webp"
    

    },
    {
        product_no: 6,
        product_name: "Vetiver",
        product_price: 25000,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/r3.webp"
    

    },
    {
        product_no: 7,
        product_name: "Alexandria II",
        product_price: 25000,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/x3.webp"
    

    },
    {
        product_no: 8,
        product_name: "Journeyman",
        product_price: 25000,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/a6.webp"
    

    },
];

let cartItems = [];
if(localStorage.getItem("shopping_cart")){
    cartItems = JSON.parse(localStorage.getItem("shopping_cart"));
}

const amouageItem = [
    {
        product_no: 1,
        product_name: " AMOUAGE DIA MAN",
        product_price: 14800,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "Img/a1.webp"
    

    },
    {
        product_no: 2,
        product_name: " AMOUAGE EPIC WOMAN",
        product_price: 15500,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/a2.webp"
    

    },
    {
        product_no: 3,
        product_name: " AMOUAGE FATE MAN",
        product_price: 15500,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/a3.webp"
    

    },
    {
        product_no: 4,
        product_name: " FIGMENT MAN",
        product_price: 16400,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/a4.webp"
    

    },
    {
        product_no: 5,
        product_name: "  INTERLUDE WOMAN",
        product_price: 15500,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/a5.webp"
    

    },
    {
        product_no: 6,
        product_name: " JOURNEY MAN",
        product_price: 15400,
        product_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto incidunt minima quibusdam voluptas quae dolor explicabo tenetur rerum in molestiae necessitatibus molestias vitae expedita obcaecati repellat aliquam, dolores quod!",
        product_image: "img/a6.webp"
    

    },

];
