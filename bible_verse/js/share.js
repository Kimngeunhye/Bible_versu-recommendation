const url = 'https://flourishing-panda-3d71c9.netlify.app/';

function setShare() {
  const resultImg = document.querySelector('#resultImg');
  const resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = 'Recommendation bible verse based on my current psychology';
  const shareDesc = infoList[resultAlt].name;
  const shareImage = url+'img/image-'+resultAlt+'.png';
  const shareURL = url+'resultPage/result-'+resultAlt+'.html';

  Kakao.Link.sendDefault({
    objecType : 'feed',
    content:{
      title : shareTitle,
      description : shareDesc,
      imageUrl:
      shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl:shareURL,
      },
    },
    buttons:[
      {
        title:'Go to the see result',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      },
    ]
  });
}
