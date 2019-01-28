var img;
var fryImg;
var kirinImg;
var yesImg;
var noImg;
var count=0;
var wid;
var hei;
var premiumFlg;

/** 画像読み込みなど */
function preload(){

  premiumFlg = isPremiumFriday();
  if(premiumFlg){
    //プレミアムフライデー用の画像読み込み
    //使用素材
    //http://commons.nicovideo.jp/material/nc90716
    img = loadImage("./image/nc90716.png");

    //使用素材
    //https://www.photo-ac.com/main/detail/636194?title=%E3%82%A8%E3%83%93%E3%83%95%E3%83%A9%E3%82%A4&selected_size=s
    fryImg = loadImage("./image/fry.png");

    //作成元
    //https://ja.cooltext.com/
    yesImg = loadImage("./image/yes.png");
  }else{
    //プレミアムフライデーじゃない日用の画像読み込み
    //使用素材
    //https://www.photo-ac.com/main/detail/375303?title=%E9%A0%AD%E3%82%92%E6%8A%B1%E3%81%88%E3%82%8B%E3%82%AD%E3%83%AA%E3%83%B3&selected_size=s
    kirinImg = loadImage("./image/kirin.png");

    //作成元
    //https://ja.cooltext.com/
    noImg = loadImage("./image/no.png");
  }
  imageMode(CENTER);


}

/** キャンバス初期化 */
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cnv");

  if(windowWidth > windowHeight){
    wid=windowWidth;
    hei=windowWidth;
  }else{
    wid=windowHeight;
    hei=windowHeight;
  }
}
function draw(){


  if(premiumFlg){
    //プレミアムフライデー時の処理
    background(255,255,128);

    count++;
    if(count>=360){
      count=0;
    }



    //エビフライを表示
    if(fryImg.width > windowWidth*0.6){
      image( fryImg, windowWidth/2, windowHeight/2,windowWidth*0.6,fryImg.height/fryImg.width * windowWidth*0.6);
    }else{
      image( fryImg, windowWidth/2, windowHeight/2,windowHeight*0.6,windowHeight*0.6);
    }


    push();
    //回転の中心をキャンバスの中心にする
    translate( windowWidth/2, windowHeight/2 );
    //角度を算出
    rotate(radians( count ));
    //集中線を描画
    image( img, 0, 0,wid*1.414,hei*1.414 );
    pop();

    //YESを表示
    if(yesImg.width > windowWidth*0.8){
      image( yesImg, windowWidth/2, windowHeight/5,windowWidth*0.8,yesImg.height/yesImg.width * windowWidth*0.8);
    }else{
      image( yesImg, windowWidth/2, windowHeight/5,yesImg.width,yesImg.height);
    }
  }else{
    //プレミアムフライデーじゃない時の処理
    background(0,0,0);

    //キリンを表示
    if(kirinImg.width > windowWidth*0.6){
      image( kirinImg, windowWidth/2, windowHeight/2,windowWidth*0.6,kirinImg.height/kirinImg.width * windowWidth*0.6);
    }else{
      image( kirinImg, windowWidth/2, windowHeight/2,windowHeight*0.6,windowHeight*0.6);
    }


    //NOを表示
    if(noImg.width > windowWidth*0.8){
      image( noImg, windowWidth/2, windowHeight/5,windowWidth*0.8,noImg.height/noImg.width * windowWidth*0.8);
    }else{
      image( noImg, windowWidth/2, windowHeight/5,noImg.width,noImg.height);
    }
  }

}
