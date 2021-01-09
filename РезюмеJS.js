const VK = document.getElementById('VK');
const Cloud = document.getElementById('Облако');
const MyNumber = document.getElementById('НомерТелефона');
const Data = document.getElementById('БлокДанных');
const Scrins = document.getElementById('БлокСкринов');
const Exit = document.getElementById('Exit');
const BlockHelper = document.getElementById('BlockHelper');

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

VK.onmouseover = () => {
    VK.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 100%), #FFFFFF';
    VK.style.width = '74px';
    VK.style.height = '74px';
    VK.style.left = '1346px';
    VK.style.top = '1px';
}
VK.onmouseout = () => {
    VK.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 80%), #FFFFFF';
    VK.style.width = '72px';
    VK.style.height = '72px';
    VK.style.left = '1347px';
    VK.style.top = '2px';
}
VK.onclick = () => {
    window.open('https://vk.com/poofigator');
}

Cloud.onmouseover = () => {
    Cloud.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 100%), #FFFFFF';
    Cloud.style.width = '74px';
    Cloud.style.height = '74px';
    Cloud.style.left = '1051px';
    Cloud.style.top = '27px';
}
Cloud.onmouseout = () => {
    Cloud.style.background = 'linear-gradient(180deg, #23B516 0%, #57FF49 80%), #FFFFFF';
    Cloud.style.width = '72px';
    Cloud.style.height = '72px';
    Cloud.style.left = '1052px';
    Cloud.style.top = '28px';
}
Cloud.onclick = () => {
    window.open('https://vk.com/poofigator'); // Поменять на ссылку облака
}

MyNumber.onmouseover = () => {
    MyNumber.style.color = 'rgba(0, 0, 0, 0.7)';
}
MyNumber.onmouseout = () => {
    MyNumber.style.color = 'rgba(0, 0, 0, 0.4)';
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
    RemoveData()
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
    RemoveData()
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
    RemoveData()
    SlideShow3()
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
    RemoveData()
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
    RemoveData()
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
    RemoveData()
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
    while (n > 0){
        n--
        Block3Screen[n].style.width = '0px';
        Block3Screen[n].style.height = '0px';
        Block3Screen[n].style.left = '258px';
        Block3Screen[n].style.top = '214px';
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
    window.SwipeRight();
}
LeftArrow.onmouseover = () => {
    LeftArrow.style.opacity = .6;
}
LeftArrow.onmouseout = () => {
    LeftArrow.style.opacity = .3;
}
LeftArrow.onclick = () => {
    window.SwipeLeft();
}
const Block3Screen = [document.getElementById('Block3Screen1'), 
document.getElementById('Block3Screen2'), document.getElementById('Block3Screen3'), 
document.getElementById('Block3Screen4'), document.getElementById('Block3Screen5'), 
document.getElementById('Block3Screen6'), document.getElementById('Block3Screen7'), 
document.getElementById('Block3Screen8')];
var n;
var counter;

function SlideShow3(){
    counter = 0;
    n = 8;
    BlockHelper.style.width = '420px';
    BlockHelper.style.height = '236px';
    Block3Screen[0].style.width = '426px';
    Block3Screen[0].style.height = '240px';
    Block3Screen[0].style.left = '537px';
    Block3Screen[0].style.top = '161px';

    Block3Screen[1].style.width = '239px';
    Block3Screen[1].style.height = '134px';
}

function SwipeRight(){
    if (counter < (n - 1)){
        Block3Screen[counter].style.left = '1003px';
        Block3Screen[counter].style.top = '214px';
        Block3Screen[counter].style.width = '239px';
        Block3Screen[counter].style.height = '134px';
        counter ++;
        Block3Screen[counter].style.width = '426px';
        Block3Screen[counter].style.height = '240px';
        Block3Screen[counter].style.left = '537px';
        Block3Screen[counter].style.top = '161px';

        Block3Screen[counter + 1].style.width = '239px';
        Block3Screen[counter + 1].style.height = '134px';

        Block3Screen[counter - 2].style.width = '0px';
        Block3Screen[counter - 2].style.height = '0px';
        Block3Screen[counter - 2].style.left = '1242px';
    }
}
function SwipeLeft(){
    if (counter >= 1){
        Block3Screen[counter].style.left = '258px';
        Block3Screen[counter].style.top = '214px';
        Block3Screen[counter].style.width = '239px';
        Block3Screen[counter].style.height = '134px';
        counter --;
        Block3Screen[counter].style.width = '426px';
        Block3Screen[counter].style.height = '240px';
        Block3Screen[counter].style.left = '537px';
        Block3Screen[counter].style.top = '161px';

        Block3Screen[counter + 2].style.width = '0px';
        Block3Screen[counter + 2].style.height = '0px';
    }
}

BlockHelper.onclick = () => {
    Block3Screen[counter].style.width = '852px';
    Block3Screen[counter].style.height = '480px';
    Block3Screen[counter].style.left = '324px';
    Block3Screen[counter].style.top = '41px';
    Block3Screen[counter].style.zIndex = '100';
    BlockHelper.style.width = '848px'
    BlockHelper.style.height = '476px'
    BlockHelper.style.left = '324px'
    BlockHelper.style.top = '41px'
}
BlockHelper.onmouseout = () => {
    Block3Screen[counter].style.width = '426px';
    Block3Screen[counter].style.height = '240px';
    Block3Screen[counter].style.left = '537px';
    Block3Screen[counter].style.top = '161px';
    Block3Screen[counter].style.zIndex = '1';
    BlockHelper.style.width = '420px'
    BlockHelper.style.height = '236px'
    BlockHelper.style.left = '537px'
    BlockHelper.style.top = '161px'
}
