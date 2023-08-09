import 'dayjs/locale/ja';
import dayjs, { locale, extend } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

// import Chart from 'chart.js/auto';

locale('ja');
extend(duration);
extend(relativeTime);
(()=>{
	window.addEventListener('DOMContentLoaded',()=> {
		let date = document.getElementById('date');
		let clock = document.getElementById('clock');

		let nowDate = dayjs().format('DD');

		setInterval( ()=>{
			// 現在の日時を取得
			const now = new dayjs();
			// 日付が変わったら日付を再表示
			if( nowDate !== now ) {
			    nowDate = now;
			    date.innerText = now.format('YYYY年:MMMMDD日:dddd');
			}

			// 時間を再表示
			clock.innerText = now.format('HH時mm分ss秒');
		  },1000);
	    });
})();