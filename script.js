function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const { useState } = React;

const sizes = [6, 6.5, 7, 7.5, 8, 9, 9.5, 10];
const data = [
{
  key: 1,
  title: 'Asics',
  image:
  '4.jpg',
  alt: 'a pair of blue and red ASICS sneakers',
  a : 10,             
  copyright: 'Maksim Larin',
  price: '$65 USD',
  description:
  'Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.',
  freeShipping: true,


  quantitiyAvailable: 5,
 },

{
  key: 2,
  title: 'پرسیل',
  a : 30,
  image:
  '2.jpg',
  alt: 'a pair of white Adidas sneakers with red and blue trim',
  copyright: 'Daniel Storek',

  price: '30_000_000 ريال',
  description: `Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design. Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek.`,
  colors: [
  {
    background:
    'linear-gradient(135deg, #A1B986 0%, #95AB7C 49%, #32352F 51%, #000 100%)',
    name: 'olive & black' },

  {
    background:
    'linear-gradient(135deg, #1DB0FE 0%, #1DB0FE 49%, #32352F 51%, #000 100%)',
    name: 'blue & black' },

  {
    background:
    'linear-gradient(135deg, #f55a94 0%, #f55a94 49%, #32352F 51%, #000 100%)',
    name: 'pink & black' }],


  quantitiyAvailable: 5,
 },
 {
  key: 3,
  title: 'جام',
  a : 90,
  image:
  '4.jpg',
  alt: 'a pair of white Adidas sneakers with red and blue trim',
  copyright: 'Daniel Storek',

  price: '3_000_000 ريال',
  description: `Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design. Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Effortless comfortable full leather lining eye-catching unique detail to the toe low 'cut-away' sides clean and sleek.`,
  colors: [
  {
    background:
    'linear-gradient(135deg, #A1B986 0%, #95AB7C 49%, #32352F 51%, #000 100%)',
    name: 'olive & black' },

  {
    background:
    'linear-gradient(135deg, #1DB0FE 0%, #1DB0FE 49%, #32352F 51%, #000 100%)',
    name: 'blue & black' },

  {
    background:
    'linear-gradient(135deg, #f55a94 0%, #f55a94 49%, #32352F 51%, #000 100%)',
    name: 'pink & black' }],


  quantitiyAvailable: 5,
 },

{
  key: 3,
  title: 'New Balance',
  a : 9,
  image:
  '5.jpg',
  alt: 'a New Balance sneaker in olive drab with a black logo',
  copyright: 'felipepelaquim',
  price: '$45 USD',
  description: `Suede fabric pointed toe stylish cut front low heel sharp on-trend toe point raised heel drop sides unique silhouette. Bow detail metallic eyelets leather lining luxurious finish classic courts formal slingback square toe contrasting cap. Lace up fastening bow detailing high stiletto heel leather lining beautiful lace upper elegant peep toe t-bar strap. Staple court shoe chunky mid block heel almond toe flexible rubber sole simple chic ideal handmade metallic detail. Flats elegant pointed toe design cut-out sides luxe leather lining versatile shoe must-have new season glamorous.`,
  colors: [
  {
    background:
    'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 15%, #7079C8 30%, #FFFFFF 45%, #FFFFFF 55%, #BC3F3F 70%, #FFFFFF 85%, #FFFFFF 100%)',
    name: 'white with red and blue trim' },


  {
    background:
    'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 35%, #000 50%, #FFFFFF 65%, #FFFFFF 100%)',
    name: 'white with black trim' }],


  quantitiyAvailable: 1,
  oneLeft: true }];



function App() {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 mt-4" }, /*#__PURE__*/
    React.createElement(Description, null)), /*#__PURE__*/

    React.createElement("div", { className: "container mx-auto " }, /*#__PURE__*/
    React.createElement("div", { className: "flex mt-10 flex-wrap  pb-5 " },
    data.map((shoeDetails) => /*#__PURE__*/
    React.createElement(Item, _extends({}, shoeDetails, { key: shoeDetails.key })))))));





}

function Header() {
  return /*#__PURE__*/(
    React.createElement("header", { className: "py-3 w-full" }, /*#__PURE__*/
    React.createElement("div", { className: "container mx-auto px-4 flex items-center" }, /*#__PURE__*/
    React.createElement("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 74 74",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("circle", { cx: "37", cy: "37", r: "35.5", stroke: "#8B7474", strokeWidth: "3" }), /*#__PURE__*/
    React.createElement("path", {
      d: "M26.1147 39.9659L27.9076 38.8943L23.6213 31.723L21.8285 32.7946C19.848 33.9783 19.2022 36.5429 20.3859 38.5234C21.5697 40.5039 24.1342 41.1497 26.1147 39.9659ZM23.9303 60.738C25.114 62.7185 27.6785 63.3642 29.6591 62.1805L31.4519 61.1089L27.1656 53.9376L25.3728 55.0092C23.3923 56.1929 22.7465 58.7574 23.9303 60.738ZM38.5505 42.2663C36.5947 43.4353 34.7229 45.5517 33.7545 47.5662C32.9141 49.314 32.3318 50.8498 28.9585 52.866L33.2447 60.0374L37.0027 59.0056C38.7149 58.5358 40.412 57.9656 42.0061 57.1595C43.9149 56.1943 45.7038 55.0003 47.2655 53.5446C52.6116 48.5607 53.0583 44.3336 51.544 41.8001C49.4009 38.2144 43.613 39.2405 38.5505 42.2663ZM37.773 21.3781C35.7512 22.0641 33.8521 23.0737 32.0983 24.2983C30.6335 25.3206 29.3275 26.5453 28.1025 27.8302L25.4141 30.6515L29.7004 37.8228C33.0732 35.8069 34.7022 36.021 36.6396 36.1086C38.8725 36.2096 41.6229 35.5634 43.5787 34.3944C48.6412 31.3685 52.2859 26.7568 50.1428 23.1712C48.6286 20.6377 44.694 19.0292 37.773 21.3781Z",
      fill: "#AAA28C" })), /*#__PURE__*/



    React.createElement("h1", { className: "ml-4 font-extrabold text-3xl logo-text" }, "ستاره شیمی یاقوت"))));



}

function Description() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "flex flex-col text-center w-full mb-20 mt-14" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-xs tracking-widest font-medium title-font mb-1 italic tagline" }, "به عمده فروشی ستاره شیمی یاقوت خوش امدید"), /*#__PURE__*/


    React.createElement("h1", { className: "sm:text-3xl text-2xl font-medium title-font mb-4 font-bold" }, "انواع مایع های لباسی و ظرف شویی"), /*#__PURE__*/


    React.createElement("p", { className: "lg:w-2/3 mx-auto leading-relaxed text-base category-description" }, "Gently used floor model sneakers and discontinued styles at our lowest prices of the year. Get 'em before they're gone!")));





}

function Item({
  title,
  image,
  alt,
  price,
  a,
  description,
  quantitiyAvailable,
  freeShipping,
  oneLeft })
{
  return /*#__PURE__*/(
    React.createElement("div", { className: " w-full lg:w-1/3 mt-3 px-4" }, /*#__PURE__*/
    React.createElement("div", { className: "h-full item  p-4  rounded-lg shadow-lg flex-col flex  " }, /*#__PURE__*/
    React.createElement("div", { className: "flex-grow" }, /*#__PURE__*/
    React.createElement("div", { className: "relative" },
    freeShipping && /*#__PURE__*/
    // React.createElement("div", { className: "tag-free-shipping absolute rounded-tr-lg rounded-bl-lg py-1 px-2 top-0 right-0" }, "Free Shipping!"),



    oneLeft && /*#__PURE__*/
    React.createElement("div", { className: "tag-one-left absolute rounded-tr-lg rounded-bl-lg py-1 px-2 top-0 right-0" }, "Just One Left!"), /*#__PURE__*/



    React.createElement("img", { src: image, alt: alt, className: "rounded-lg w-full" })), /*#__PURE__*/

    React.createElement("div", { className: "flex items-center justify-between my-3" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-2xl uppercase title1 font-semibold" }, title), /*#__PURE__*/
    React.createElement("p", { className: "price text-2xl font-semibold italic" }, price)), /*#__PURE__*/
    React.createElement("p", { className: "description text-sm my-4" }, description)), /*#__PURE__*/
 React.createElement('div' , { } ,
 React.createElement("i", { className: "bi bi-star-fill" }  ),  /*#__PURE__*/
 React.createElement("i", { className: "bi bi-star-fill" }  ),  /*#__PURE__*/
 React.createElement("i", { className: "bi bi-star-fill" }  ),  /*#__PURE__*/
 React.createElement("i", { className: "bi bi-star-half" }  ),  /*#__PURE__*/
/*#__PURE__*/

 
 ),
    
    React.createElement("div", { className: "mt-4 mb-2 font-bold color-red" }, `توجه!تعداد سفارش حداقل بالای${a}  عدد باشد`), /*#__PURE__*/
    React.createElement(Quantity, { quantitiyAvailable: quantitiyAvailable }), /*#__PURE__*/

    React.createElement("button", {
      type: "button",

      
      className: "add-to-cart-button py-3 text-lg font-bold mt-4" }, "Add to Cart"))));






}




function Quantity({ quantitiyAvailable }) {
  const [selected, setSelected] = useState(0);
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("svg", {
      width: "280",
      height: "45",
      viewBox: "0 0 500 45",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg" }, /*#__PURE__*/

    React.createElement("g", { id: "shoeContainer" },
    Array(quantitiyAvailable).
    fill(0).
    map((i, index) => /*#__PURE__*/
    React.createElement("g", {
      id: "shoe",
      transform: `translate(${index * 100},0)`,
      onClick: () => {
        if (selected === index && index !== 0) {
          setSelected(index - 1);
        } else {
          setSelected(index);
        }
      },
      key: index // Array is not dynamic
      , className: "cursor-pointer" }, /*#__PURE__*/

    React.createElement("rect", { x: "0", y: "0", width: "100", height: "45", fill: "#2a2f33" }), /*#__PURE__*/
    React.createElement("path", {
      id: "Vector",
      d: "M1.94189 39.1943C3.42708 42.1868 6.514 44.2497 10.0752 44.2497H75.3004C78.8616 44.2497 81.9487 42.187 83.4337 39.1943H1.94189Z",
      fill: selected >= index ? '#5067A5' : '#383E44' }), /*#__PURE__*/

    React.createElement("path", {
      id: "Vector_2",
      d: "M75.3005 26.0993H74.2101C69.3607 26.0993 64.6274 24.5304 60.742 21.6598L54.6768 27.7251L51.2223 24.2707L56.9438 18.5491L54.0884 16.1727L47.7786 22.4824L44.3242 19.028L50.3177 13.0345L47.4621 10.6579L40.8804 17.2396L37.4259 13.7852L43.6916 7.51953L38.1432 2.90169C37.4447 2.32015 36.5592 2 35.6502 2C33.5015 2 31.7534 3.74805 31.7534 5.89681V8.01839C31.7534 15.0132 26.0627 20.7039 19.0679 20.7039C14.1582 20.7039 9.64518 17.8286 7.57048 13.3787L6.97331 12.0981C6.46078 10.9989 5.34603 10.2884 4.13314 10.2884C2.4056 10.2884 1 11.694 1 13.422V34.3091H84.3333C83.8962 29.7096 80.0125 26.0993 75.3005 26.0993Z",
      fill: selected >= index ? '#5067A5' : '#383E44' })))))));







}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null),
document.getElementById("root"));
let button = document.querySelectorAll('.add-to-cart-button ')
button.forEach(btn =>{
  btn.addEventListener('click' , ()=>{
    window.location = "tel:+989219540027"
  })
})
// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   e.target.elements.name.value = '';
//   e.target.elements.email.value = '';
//   e.target.elements.message.value = '';
// });
