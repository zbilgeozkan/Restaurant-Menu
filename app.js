const menu = [
  {
    id: 1,
    title: "Spicy Lobster",
    category: "APPETIZERS",
    price: 19.00,
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/02/05/KC2312_lobster-scampi_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580923140032.jpeg",
    desc: `Ounce lobster tails, white wine, san marzano, red chile, olive oil. `,
  },
  {
    id: 2,
    title: "Baked Escargot",
    category: "APPETIZERS",
    price: 16.00,
    img:
      "https://assets.epicurious.com/photos/57a8adfbb10b4fb03f234f37/master/w_1000,h_667,c_limit/escargots-a-la-bourguignonne.jpg",
    desc: `White wine, escargots, parmesan cheese, butter, olive. `,
  },
  {
    id: 3,
    title: "Seared Ahi Tuna",
    category: "APPETIZERS",
    price: 17.50,
    img:
      "https://hips.hearstapps.com/hmg-prod/images/190226-seared-tuna-435-1552085484.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    desc: `Ahi tuna, soy sauce, honey, toasted sesame oil, toasted sesame honey marinade. `,
  },
  {
    id: 4,
    title: "Prosciutto Wrapped Mozarella",
    category: "APPETIZERS",
    price: 14.00,
    img:
      "https://www.sweetashoney.co/wp-content/uploads/Proscuitto-Wrapped-Mozzarella-7.jpg",
    desc: `Balsamic vinegar, fresh mozzarella balls, grape tomatoes. `,
  },
  {
    id: 5,
    title: "Filet Mignon, 8 ounce",
    category: "STEAKS",
    price: 38.00,
    img:
      "https://qvc.scene7.com/is/image/QVC/m/98/m66298.001",
    desc: `Filet mignon, rosemary, butter, olive oil, black pepper. `,
  },
  {
    id: 6,
    title: "Filet Mignon, 12 ounce",
    category: "STEAKS",
    price: 49.00,
    img:
      "https://i0.wp.com/peteandsams.com/wp-content/uploads/2018/08/HC-Filet-1_small-1024x688.jpg?fit=1024%2C688&ssl=1",
    desc: `Filet mignon steaks, garlic, sea salt, fresh rosemary, black pepper. `,
  },
  {
    id: 7,
    title: "Rib Eye Steak, 18 ounce",
    category: "STEAKS",
    price: 39.00,
    img:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61xeljO9CiL.jpg",
    desc: `Kansas City Steak Company signature cut Bone-in Ribeye Steak. `,
  },
  {
    id: 8,
    title: "Stuffed Lobster Tail",
    category: "SEAFOOD",
    price: 18.50,
    img:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/07/18/QK706-kardea-brown-crab-stuffed-lobster-tails-with-blender-bernaise.jpg.rend.hgtvcom.616.462.suffix/1658176726805.jpeg",
    desc: `Lobster tails, jumbo lump crabmeat, lemon juice, garlic. `,
  },
  {
    id: 9,
    title: "Maryland Crab Cake Dinner",
    category: "SEAFOOD",
    price: 16.00,
    img:
      "https://happilyunprocessed.com/wp-content/uploads/2019/01/killer-maryland-crab-cakes.jpg",
    desc: `Old bay seasoning, lump crab meat, dijon mustard. `,
  },
  {
    id: 10,
    title: "Whole Lobster",
    category: "SEAFOOD",
    price: 19.00,
    img:
      "https://www.foodrepublic.com/wp-content/uploads/2012/05/Grilled_Lobster.jpg",
    desc: `Live maine lobster, butter, sea salt, lemon. `,
  },
  {
    id: 11,
    title: "Spinach Salad",
    category: "SALADS",
    price: 9.50,
    img:
      "https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2016/4/13/0/CCTIF213H_Warm-Spinach-Salad_s4x3.jpg",
    desc: `Additional ingredients include tomatoes, eggs, cheese, slivered almonds, walnuts and/or fresh or dried berries, such as cranberry, or strawberry. `,
  },
  {
    id: 12,
    title: "Caprese Salad",
    category: "SALADS",
    price: 10.50,
    img:
      "https://www.thespruceeats.com/thmb/2pjgFA7_nbZtlXr68BECvf6fO48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-salad-tomato-salad-2217097-hero-03-75a0b89b30aa4a52b10fe4fdd9abfeb5.jpg",
    desc: `An Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil, seasoned with salt, and olive oil. `,
  },
  {
    id: 13,
    title: "Apple Crisp",
    category: "DESSERTS",
    price: 8.50,
    img:
      "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/17651-cinnamon-apple-crisp-760x580.jpg?ext=.jpg",
    desc: `Warm apple cinnamon filling topped with a crunchy oat crumble, vanilla ice cream and caramel sauce. `,
  },
  {
    id: 14,
    title: "Twin Cannoli",
    category: "DESSERTS",
    price: 7.00,
    img:
      "https://www.mystoryinrecipes.com/uploads/4/4/9/3/44938739/5321015_orig.jpg",
    desc: `Two crisp cannoli shells filled with our house made chocolate chip ricotta cannoli cream. `,
  },
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
(values, item) => {
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
},
["ALL"]
);

const categoryList = () => {
const categoryBtns = categories
  .map((category) => {
    return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
  })
  .join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = document.querySelectorAll(".btn-item");


filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "ALL") {
      menuList(menu);
    } else {
      menuList(menuCategory);
    }
  });
});
};

const menuList = (menuItems) => {
let displayMenu = menuItems.map((item) => {
  return `<div class="menu-items col-lg-6 col-sm-12">
          <img
            src=${item.img}
            alt=${item.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
          </div>
        </div>
  `;
});
displayMenu = displayMenu.join("");
section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();