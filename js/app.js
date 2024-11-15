let visual = $('.container').bxSlider({
    // options를 객체형식으로 작성 키 : 값;
    mode:'horizontal', //vertical face 도 있음
    speed: 1000,
    auto:true, //auto를 킬때는 true   
    pager:false,
    controls:false,
    // auto:false,
});
let vs04Slide = $('.slide').slick({
    autoplay: true,
    dot:false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth:true,
    arrows:false,
});

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.586319, 127.150832), //지도의 중심좌표.
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.586319, 127.150832); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);