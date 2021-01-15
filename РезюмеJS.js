const VK = document.getElementById('VK');
const Cloud = document.getElementById('Облако');
const Data = document.getElementById('БлокДанных');
const Scrins = document.getElementById('БлокСкринов');
const Exit = document.getElementById('Exit');
const BlockHelper = document.getElementById('BlockHelper');
const Visitka = document.getElementById('СайтВизитка');
const Info = document.getElementById('Образование');
const MyNumber = document.getElementById('НомерТелефона');
var x = document.documentElement.clientWidth;

const IMG1 = document.getElementById('IMG1');
const Lang1 = document.getElementById('Lang1');
const PingPong = document.getElementById('PingPongICO');

const IMG2 = document.getElementById('IMG2');
const Lang2 = document.getElementById('Lang2');
const Oak = document.getElementById('OakICO');

const IMG3 = document.getElementById('IMG3');
const Lang3 = document.getElementById('Lang3');
const Cmd = document.getElementById('CmdICO');

const IMG4 = document.getElementById('IMG4');
const Lang4 = document.getElementById('Lang4');
const Mine = document.getElementById('MineICO');

const IMG5 = document.getElementById('IMG5');
const Lang5 = document.getElementById('Lang5');
const Calc = document.getElementById('CalcICO');

const IMG6 = document.getElementById('IMG6');
const Lang6 = document.getElementById('Lang6');
const Pol = document.getElementById('PolibICO');

function RightArow(){
    if (x < 1200){
        RightArrow.style.display = 'none';
        LeftArrow.style.display = 'none';
        Visitka.style.fontSize = '34px';
        Info.style.top = '590px'
        MyNumber.style.fontSize = '26px'
    }
}

VK.onmouseover = () => {
    VK.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 100%), #FFFFFF';
    VK.style.width = '74px';
    VK.style.height = '74px';
    VK.style.left = 'calc(87.5% - 1px)';
    VK.style.top = '1px';
}
VK.onmouseout = () => {
    VK.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 80%), #FFFFFF';
    VK.style.width = '72px';
    VK.style.height = '72px';
    VK.style.left = '87.5%';
    VK.style.top = '2px';
}
VK.onclick = () => {
    window.open('https://vk.com/poofigator');
}

Cloud.onmouseover = () => {
    Cloud.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 100%), #FFFFFF';
    Cloud.style.width = '74px';
    Cloud.style.height = '74px';
    Cloud.style.left = 'calc(80% - 1px)';
    Cloud.style.top = '27px';
}
Cloud.onmouseout = () => {
    Cloud.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 80%), #FFFFFF';
    Cloud.style.width = '72px';
    Cloud.style.height = '72px';
    Cloud.style.left = '80%';
    Cloud.style.top = '28px';
}
Cloud.onclick = () => {
    window.open('https://cloud.mail.ru/public/vYfe/6rHkyFqGX'); // Поменять на ссылку облака
}

IMG1.onmouseover = () => {
    PingPong.style.opacity = .05
    Lang1.style.opacity = .8
}
IMG1.onmouseout = () => {
    PingPong.style.opacity = 1
    Lang1.style.opacity = .05
}
IMG1.onclick = () => {
    if (x >='1200'){
        RemoveData()
        SlideshowStop()
        SlideShow1()}
}

IMG2.onmouseover = () => {
    Oak.style.opacity = .05
    Lang2.style.opacity = .8
}
IMG2.onmouseout = () => {
    Oak.style.opacity = 1
    Lang2.style.opacity = .05
}
IMG2.onclick = () => {
    if (x >='1200'){
        RemoveData()
        SlideshowStop()
        SlideShow2()}
}

IMG3.onmouseover = () => {
    Cmd.style.opacity = .05
    Lang3.style.opacity = 0.8
}
IMG3.onmouseout = () => {
    Cmd.style.opacity = 1
    Lang3.style.opacity = .05
}
IMG3.onclick = () => {
    if (x >='1200'){
        RemoveData()
        SlideshowStop()
        SlideShow3()}
}

IMG4.onmouseover = () => {
    Mine.style.opacity = .05
    Lang4.style.opacity = 0.8
}
IMG4.onmouseout = () => {
    Mine.style.opacity = 1
    Lang4.style.opacity = .05
}
IMG4.onclick = () => {
    if (x >='1200'){
    RemoveData()
    SlideshowStop()
    SlideShow4()}
}

IMG5.onmouseover = () => {
    Calc.style.opacity = .05
    Lang5.style.opacity = 0.8
}
IMG5.onmouseout = () => {
    Calc.style.opacity = 1
    Lang5.style.opacity = .05
}
IMG5.onclick = () => {
    if (x >='1200'){
    RemoveData()
    SlideshowStop()
    SlideShow5()}
}

IMG6.onmouseover = () => {
    Pol.style.opacity = .05
    Lang6.style.opacity = 0.8
}
IMG6.onmouseout = () => {
    Pol.style.opacity = 1
    Lang6.style.opacity = .05
}
IMG6.onclick = () => {
    if (x >='1200'){
    RemoveData()
    SlideshowStop()
    SlideShow6()}
}

function RemoveData(){
    Data.style.opacity = 0;
    Scrins.style.opacity = 1;
    Exit.style.cursor = 'pointer';
}
function ShowData(){
    Data.style.opacity = 1;
    Scrins.style.opacity = 0;
    Exit.style.cursor = 'default'
}

Exit.onmouseover = () => {
    Exit.style.opacity = .6;
}
Exit.onmouseout = () => {
    Exit.style.opacity = .3;
}
Exit.onclick = () => {
    ShowData()
    SlideshowStop()
}

function SlideshowStop(){
    while (n > 0){
        n--
        Blocks[m][n].style.width = '0px';
        Blocks[m][n].style.height = '0px';
        Blocks[m][n].style.left = '19%';
        Blocks[m][n].style.top = '214px';

        BlockHelper.style.width = '0px';
        BlockHelper.style.height = '0px';
    }
}

const RightArrow = document.getElementById('RightArrow')
const LeftArrow = document.getElementById('LeftArrow')
RightArrow.onmouseover = () => {
    RightArrow.style.opacity = .6;
}
RightArrow.onmouseout = () => {
    RightArrow.style.opacity = .3;
}
RightArrow.onclick = () => {
    SwipeRight();
}
LeftArrow.onmouseover = () => {
    LeftArrow.style.opacity = .6;
}
LeftArrow.onmouseout = () => {
    LeftArrow.style.opacity = .3;
}
LeftArrow.onclick = () => {
    SwipeLeft();
}
const Block1Screen = [document.getElementById('Block1Screen1'), 
document.getElementById('Block1Screen2'), document.getElementById('Block1Screen3'), 
document.getElementById('Block1Screen4')];
const Block2Screen = [document.getElementById('Block2Screen1'), 
document.getElementById('Block2Screen2'), document.getElementById('Block2Screen3'), 
document.getElementById('Block2Screen4'), document.getElementById('Block2Screen5'), 
document.getElementById('Block2Screen6'), document.getElementById('Block2Screen7'), 
document.getElementById('Block2Screen8')];
const Block3Screen = [document.getElementById('Block3Screen1'), 
document.getElementById('Block3Screen2'), document.getElementById('Block3Screen3'), 
document.getElementById('Block3Screen4'), document.getElementById('Block3Screen5'), 
document.getElementById('Block3Screen6'), document.getElementById('Block3Screen7'), 
document.getElementById('Block3Screen8')];
const Block4Screen = [document.getElementById('Block4Screen1'), 
document.getElementById('Block4Screen2'), document.getElementById('Block4Screen3'), 
document.getElementById('Block4Screen4'), document.getElementById('Block4Screen5'), 
document.getElementById('Block4Screen6'), document.getElementById('Block4Screen7'), 
document.getElementById('Block4Screen8'), document.getElementById('Block4Screen9'), 
document.getElementById('Block4Screen10'), document.getElementById('Block4Screen11'), 
document.getElementById('Block4Screen12'), document.getElementById('Block4Screen13')];
const Block5Screen = [document.getElementById('Block5Screen1'), 
document.getElementById('Block5Screen2'), document.getElementById('Block5Screen3'), 
document.getElementById('Block5Screen4')];
const Block6Screen = [document.getElementById('Block6Screen1'), 
document.getElementById('Block6Screen2'), document.getElementById('Block6Screen3'), 
document.getElementById('Block6Screen4')];
const Blocks = [Block1Screen, Block2Screen, Block3Screen, Block4Screen, Block5Screen, Block6Screen]
var n, m;
var counter;

function StartSlideShow(){
    counter = 0;
    BlockHelper.style.width = '426px';
    BlockHelper.style.height = '236px';
    Blocks[m][0].style.width = '426px';
    Blocks[m][0].style.height = '240px';
    Blocks[m][0].style.left = 'calc(50% - 213px)';
    Blocks[m][0].style.top = '161px';

    Blocks[m][1].style.width = '239px';
    Blocks[m][1].style.height = '134px';
}
function SlideShow1(){
    n = 4;
    m = 0;
    StartSlideShow()
}

function SlideShow2(){
    n = 8;
    m = 1;
    StartSlideShow()
}

function SlideShow3(){
    n = 8;
    m = 2;
    StartSlideShow()
}

function SlideShow4(){
    n = 13;
    m = 3;
    StartSlideShow()
}

function SlideShow5(){
    n = 4;
    m = 4;
    StartSlideShow()
}

function SlideShow6(){
    n = 4;
    m = 5;
    StartSlideShow()
}

function SwipeRight(){
    if (counter < (n - 1)){
        Blocks[m][counter].style.left = 'calc(50% + 220px)';
        Blocks[m][counter].style.top = '214px';
        Blocks[m][counter].style.width = '239px';
        Blocks[m][counter].style.height = '134px';
        counter ++;
        Blocks[m][counter].style.width = '426px';
        Blocks[m][counter].style.height = '240px';
        Blocks[m][counter].style.left = 'calc(50% - 213px)';
        Blocks[m][counter].style.top = '161px';

        Blocks[m][counter + 1].style.width = '239px';
        Blocks[m][counter + 1].style.height = '134px';

        Blocks[m][counter - 2].style.width = '0px';
        Blocks[m][counter - 2].style.height = '0px';
        Blocks[m][counter - 2].style.left = 'calc(70% + 240px)';
        Blocks[m][counter - 2].style.top = '214px';
    }
}
function SwipeLeft(){
    if (counter >= 1){
        Blocks[m][counter].style.left = 'calc(50% - 456px)';
        Blocks[m][counter].style.top = '214px';
        Blocks[m][counter].style.width = '239px';
        Blocks[m][counter].style.height = '134px';
        counter --;
        Blocks[m][counter].style.width = '426px';
        Blocks[m][counter].style.height = '240px';
        Blocks[m][counter].style.left = 'calc(50% - 213px)';
        Blocks[m][counter].style.top = '161px';

        Blocks[m][counter - 1].style.width = '239px';
        Blocks[m][counter - 1].style.height = '134px';
        Blocks[m][counter - 1].style.left = 'calc(50% + 220px)';
        Blocks[m][counter - 1].style.top = '214px';

        Blocks[m][counter + 2].style.width = '0px';
        Blocks[m][counter + 2].style.height = '0px';
        Blocks[m][counter + 2].style.left = 'calc(50% - 456px)';
        Blocks[m][counter + 2].style.top = '214px';
    }
}

BlockHelper.onclick = () => {
    Blocks[m][counter].style.width = '852px';
    Blocks[m][counter].style.height = '480px';
    Blocks[m][counter].style.left = 'calc(50% - 426px)';
    Blocks[m][counter].style.top = '41px';
    Blocks[m][counter].style.zIndex = '100';
    BlockHelper.style.width = '848px'
    BlockHelper.style.height = '476px'
    BlockHelper.style.left = 'calc(50% - 426px)'
    BlockHelper.style.top = '41px'
}
BlockHelper.onmouseout = () => {
    Blocks[m][counter].style.width = '426px';
    Blocks[m][counter].style.height = '240px';
    Blocks[m][counter].style.left = 'calc(50% - 213px)';
    Blocks[m][counter].style.top = '161px';
    Blocks[m][counter].style.zIndex = '1';
    BlockHelper.style.width = '420px'
    BlockHelper.style.height = '236px'
    BlockHelper.style.left = 'calc(50% - 213px)'
    BlockHelper.style.top = '161px'
}
