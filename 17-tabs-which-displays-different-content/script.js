let breakfastContent = `Indian breakfast is a vibrant reflection of the country's diverse culinary traditions. In South India, dishes like idli and dosa made from fermented rice and lentils are popular, often served with coconut chutney and sambar. North India favors parathas stuffed with potatoes or paneer, paired with yogurt and pickles. In the West, dishes like poha and upma are common, while street food options like vada pav and bhaji highlight the region's flavors. Breakfast is not just a meal; it's a celebration of family and culture, emphasizing wholesome ingredients and the joy of sharing. Each region's unique offerings showcase India's rich gastronomic heritage.`;
let lunchContent = `Indian lunch is a vibrant and diverse affair, reflecting regional tastes and traditions. In North India, thalis often feature a variety of curries, dal, roti, and rice, accompanied by pickles and raita. South Indian meals include rice served with sambar, rasam, and a variety of vegetable sides. In the West, dishes like dhokla and puri bhaji are popular, while the East favors fish curries and rice. Meals are typically enjoyed communally, emphasizing the importance of family and sharing. Spices play a crucial role, enhancing flavors and aromas, making lunch a nourishing and flavorful experience that nourishes both body and soul.`;
let dinnerContent = `Indian dinner showcases a rich array of flavors and regional specialties, often served family-style. In North India, meals may include rich curries, naan, and biryani, complemented by cooling raita and salads. South Indian dinners often feature rice with sambar, rasam, and various vegetable preparations. In the West, dishes like dal baati and khichdi are common, while the East favors fish curry and mustard oil-based dishes. Street food favorites can also make an appearance, adding a casual touch. Dinner is a time for connection, storytelling, and savoring a variety of tastes, reflecting the warmth and hospitality that defines Indian culture.`;
let breakfastBtn = document.getElementById('breakfast');
let lunchBtn = document.getElementById('lunch');
let dinnerBtn = document.getElementById('dinner');
let contentArea = document.querySelector('.content');
let frame = document.getElementById('img');

function onLoad(){
    breakfastBtn.classList.toggle('active');
}
onLoad()

breakfastBtn.addEventListener('click', e=>{
    breakfastBtn.classList.add('active')
    lunchBtn.classList.remove('active')
    dinnerBtn.classList.remove('active')
    frame.attributes.src.value = `./assets/breakfast.jpg`;
    
    contentArea.textContent = breakfastContent
})

lunchBtn.addEventListener('click', e=>{
    breakfastBtn.classList.remove('active');
    lunchBtn.classList.add('active');
    dinnerBtn.classList.remove('active');
    frame.attributes.src.value = `./assets/lunch.jpg`;
    contentArea.textContent = lunchContent
})

dinnerBtn.addEventListener('click', e=>{
    breakfastBtn.classList.remove('active');
    lunchBtn.classList.remove('active');
    dinnerBtn.classList.add('active');
    frame.attributes.src.value = `./assets/dinner.jpg`;
    contentArea.textContent = dinnerContent
})