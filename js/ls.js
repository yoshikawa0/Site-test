/*
* author: yoshikawa0
* responsible for loading / adding / deleting items to the cart
*/
const storageName="cart";
/**
 * save item to cart
 * @param {string} item - The value of the item.
 */
function save(item) {
	let itemsArray = getStoreArray();
	itemsArray.push(item);
	localStorage.setItem(storageName, JSON.stringify(itemsArray));
}
/**
 * load cart items array from localStorage.
 * create li element for each item in cart
 * set onclick to delete li element on click
 * and append each li to parent ul element.
 */
function loadItems() {
	itemsArray = getStoreArray();
	if (itemsArray.length!=0) {
		for (let i = 0; i < itemsArray.length; i++) {
			let ul = document.getElementById(storageName);
			let li = document.createElement("li");
			li.textContent = itemsArray[i];
			li.onclick = function() {
				ul.removeChild(li);
				clearItem(itemsArray[i]);
			};
			ul.appendChild(li);
		}
	}	
}
/**
 * remove item with given value from localStorage cart items array
 * @param {string} item - value of item to remove
 */
function clearItem(item){
	let itemsArray = getStoreArray();
	for(let i=0;i<itemsArray.length;i++){
		if(itemsArray[i]===item){
			itemsArray.splice(i,1);
			localStorage.setItem(storageName, JSON.stringify(itemsArray));
			return;
		}
	}
}
/**
 * clear all items in localStorage cart items array
 */
function clearCart() {
	localStorage.removeItem(storageName);
}
/**
 * delete all items from ul element on page
 */
function clearCartUl(){
	let ul = document.getElementById(storageName);
	while (ul.firstChild) {
    	ul.removeChild(ul.firstChild);
	}
}
/**
 * return locaStorage cart items array
 * if array don't exist yet - return empty array
 * @param {string} key - cart items array key
 */
function getStoreArray() {
	let itemsArray = localStorage.getItem(storageName);
	if (itemsArray == null || itemsArray =="") {
		itemsArray = new Array();
	}
	else {
		itemsArray = JSON.parse(itemsArray);
	}
	return itemsArray;
}
/**
 * set new cart items array
 * @param {Array} newArray - new cart array 
 */
function setStoreArray(newArray){
	localStorage.setItem(storageName, JSON.stringify(newArray));
}
