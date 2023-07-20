import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const validator = new JustValidate('#basic_form');

const slider1 = new Swiper('.swiper', {
	effect:'fade',
	fadeEffect:{
		crossFade:true
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const slider2 = new Swiper('.swiper-2', {
	effect:'fade',
	fadeEffect:{
		crossFade:true
	},
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	scrollbar: {
		el: '.swiper-scrollbar',
	},
    });

let titleContainer = document.getElementById('swiper-title-1');
let titleElement = document.createTextNode('スライド' + slider1.realIndex + 'を表示しています。');
titleContainer.appendChild(titleElement);

slider1.on('slideChange', function(){
	console.log(slider1.realIndex);
	titleElement.remove();
	titleElement = document.createTextNode('スライド' + slider1.realIndex + 'を表示しています。');
	titleContainer.appendChild(titleElement);
});

	let titles = [
		"ハムスターねこ","片目","紙コップ１","紙コップ２"
	];

let titleContainer2 = document.getElementById('swiper-title-2');
let titleElement2 = document.createTextNode(titles[slider2.realIndex]);
titleContainer2.appendChild(titleElement2);
    
slider2.on('slideChange', function () {
	titleElement2.remove();
	titleElement2 = document.createTextNode(titles[slider2.realIndex])
	titleContainer2.appendChild(titleElement2);
});

validator
.addField('#basic_name', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'minLength',
		value: 3,
		errorMessage: '3文字以上で入力してください。',
	},
	{
		rule: 'maxLength',
		value: 15,
		errorMessage: '最大入力文字数は15文字です。',
	},
])
.addField('#basic_email', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'email',
		errorMessage: '形式が正しくありません。',
	},
])
.addField('#basic_password', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'password',
		errorMessage: 'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
	},
])
.addField('#basic_age', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
	{
		rule: 'number',
		errorMessage: '数字で入力してください。',
	},
	{
		rule: 'minNumber',
		value: 18,
		errorMessage: '18以上の数字を入力してください。',
	},
	{
		rule: 'maxNumber',
		value: 150,
		errorMessage: '150以下の数字を入力してください。',
	},
])
.addField('#basic_address', [
	{
		rule: 'required',
		errorMessage: '必須入力項目です。',
	},
])
.onSuccess(onSuccess);

function onSuccess(event){
	let formDate = new FormData(event.target);
	console.log(formDate.get("username"));
	console.log(formDate.get("email"));
	console.log(formDate.get("password"));
	console.log(formDate.get("age"));
	console.log(formDate.get("address"));
}