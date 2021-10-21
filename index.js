let elem = document.getElementById('robot-animation');
let params = { width: 1700, height: 800 };
let two = new Two(params).appendTo(elem);
let cassetteHolder = new Array(25);
let widthOfGroup = two.width / 2;
let heightOfGroup = two.height / 2;
let scaleOfGroup = 0.5;
let perimeter = Math.PI * 2;
let receiveCassette = [];
let receiveStation = [];
// Make Robot, Circle and Fork.
let robot = two.makePolygon(0, 0, 100, 6);
let circle1 = two.makeCircle(30, -150, 30);
let circle2 = two.makeCircle(-30, -150, 30);
let fork1 = two.makeRectangle(30, -100, 10, 100);
let fork2 = two.makeRectangle(-30, -100, 10, 100);
robot.fill = 'rgb(149, 165, 166)';
circle1.fill = 'rgb(189, 195, 199)';
circle2.fill = 'rgb(189, 195, 199)';
fork1.fill = 'rgb(127, 140, 141)';
fork2.fill = 'rgb(127, 140, 141)';
// Make extend Circle and Fork.
let extendCircle1 = two.makeCircle(30, -240, 30);
let extendCircle2 = two.makeCircle(-30, -240, 30);
let extendFork1 = two.makeRectangle(30, -170, 10, 140);
let extendFork2 = two.makeRectangle(-30, -170, 10, 140);
extendCircle1.fill = 'rgb(46, 204, 113)';
extendCircle2.fill = 'rgb(46, 204, 113)';
extendFork1.fill = 'rgb(127, 140, 141)';
extendFork2.fill = 'rgb(127, 140, 141)';
// Make Cassette Holder.
cassetteHolder[0] = two.makeRectangle(0, -210, 50, 10);
cassetteHolder[1] = two.makeRectangle(-50, -220, 50, 10);
cassetteHolder[2] = two.makeRectangle(0, -220, 50, 10);
cassetteHolder[3] = two.makeRectangle(50, -220, 50, 10);
cassetteHolder[4] = two.makeRectangle(-50, -230, 50, 10);
cassetteHolder[5] = two.makeRectangle(0, -230, 50, 10);
cassetteHolder[6] = two.makeRectangle(50, -230, 50, 10);
cassetteHolder[7] = two.makeRectangle(-50, -240, 50, 10);
cassetteHolder[8] = two.makeRectangle(0, -240, 50, 10);
cassetteHolder[9] = two.makeRectangle(50, -240, 50, 10);
cassetteHolder[10] = two.makeRectangle(-50, -250, 50, 10);
cassetteHolder[11] = two.makeRectangle(0, -250, 50, 10);
cassetteHolder[12] = two.makeRectangle(50, -250, 50, 10);
cassetteHolder[13] = two.makeRectangle(-50, -260, 50, 10);
cassetteHolder[14] = two.makeRectangle(0, -260, 50, 10);
cassetteHolder[15] = two.makeRectangle(50, -260, 50, 10);
cassetteHolder[16] = two.makeRectangle(-50, -270, 50, 10);
cassetteHolder[17] = two.makeRectangle(0, -270, 50, 10);
cassetteHolder[18] = two.makeRectangle(50, -270, 50, 10);
cassetteHolder[19] = two.makeRectangle(-50, -280, 50, 10);
cassetteHolder[20] = two.makeRectangle(0, -280, 50, 10);
cassetteHolder[21] = two.makeRectangle(50, -280, 50, 10);
cassetteHolder[22] = two.makeRectangle(-50, -290, 50, 10);
cassetteHolder[23] = two.makeRectangle(0, -290, 50, 10);
cassetteHolder[24] = two.makeRectangle(50, -290, 50, 10);
// Make stations.
let station1 = two.makeCircle(228, -74, 60);
let station2 = two.makeCircle(141, 194, 60);
let station3 = two.makeCircle(-141, 194, 60);
let station4 = two.makeCircle(-228, -74, 60);
// Make group of robot.
let robotGroup = two.makeGroup(fork1, fork2, robot, circle1, circle2);
robotGroup.translation.set(widthOfGroup, heightOfGroup);
robotGroup.scale = scaleOfGroup;
robotGroup.noStroke();
// Make group of cassette.
let cassettesGroup = two.makeGroup(cassetteHolder);
cassettesGroup.translation.set(widthOfGroup, heightOfGroup);
cassettesGroup.fill = 'rgb(46, 204, 113)';
cassettesGroup.scale = scaleOfGroup;
// Make group of stations.
let stationGroup = two.makeGroup(station1, station2, station3, station4);
stationGroup.translation.set(widthOfGroup, heightOfGroup);
stationGroup.fill = 'rgb(189, 195, 199)';
stationGroup.scale = scaleOfGroup;
// Make delay time.
function delay(s) {
    return new Promise(resolve => {
        setTimeout(resolve, s)
    })
}
// Make ID in Circle and Stations. 
function textOfCircle1(num) {
    let str = String(num);
    let textCircle1 = new Two.Text(str, 30, -150);
    textCircle1.fill = 'rgb(44, 62, 80)';
    textCircle1.size = 20;
    return textCircle1;
}
function textOfCircle2(num) {
    let str = String(num);
    let textCircle2 = new Two.Text(str, -30, -150);
    textCircle2.fill = 'rgb(44, 62, 80)';
    textCircle2.size = 20;
    return textCircle2;
}
function textOfStation1(str) {
    let textStation1 = new Two.Text(str, 228, -74);
    textStation1.fill = 'rgb(44, 62, 80)';
    textStation1.size = 20;
    return textStation1;
}
function textOfStation2(str) {
    let textStation2 = new Two.Text(str, 141, 194);
    textStation2.fill = 'rgb(44, 62, 80)';
    textStation2.size = 20;
    return textStation2;
}
function textOfStation3(str) {
    let textStation3 = new Two.Text(str, -141, 194);
    textStation3.fill = 'rgb(44, 62, 80)';
    textStation3.size = 20;
    return textStation3;
}
function textOfStation4(str) {
    let textStation4 = new Two.Text(str, -228, -74);
    textStation4.fill = 'rgb(44, 62, 80)';
    textStation4.size = 20;
    return textStation4;
}
// Fork action function.
async function fork1Get(arm01) {
    await delay(200);
    robotGroup.remove(circle1).add(extendFork1, extendCircle1).noStroke();
    circle1.fill = 'rgb(46, 204, 113)';
    await delay(200);
    robotGroup.remove(extendFork1, extendCircle1).add(circle1, textOfCircle1(arm01)).noStroke();
    await delay(200);
}
async function fork1Release(arm01) {
    await delay(200);
    robotGroup.remove(circle1, textOfCircle1(arm01)).add(extendFork1, extendCircle1).noStroke();
    circle1.fill = 'rgb(189, 195, 199)';
    await delay(200);
    robotGroup.remove(extendFork1, extendCircle1).add(circle1).noStroke();
    await delay(200);
}
async function fork2Get(arm02) {
    await delay(200);
    robotGroup.remove(circle2).add(extendFork2, extendCircle2).noStroke();
    circle2.fill = 'rgb(46, 204, 113)';
    await delay(200);
    robotGroup.remove(extendFork2, extendCircle2).add(circle2, textOfCircle2(arm02)).noStroke();
    await delay(200);
}
async function fork2Release(arm02) {
    await delay(200);
    robotGroup.remove(circle2, textOfCircle2(arm02)).add(extendFork2, extendCircle2).noStroke();
    circle2.fill = 'rgb(189, 195, 199)';
    await delay(200);
    robotGroup.remove(extendFork2, extendCircle2).add(circle2).noStroke();
    await delay(200);
}
async function updateTwo(target, cassette, arm01, arm02, station) {
    receiveCassette = cassette;
    receiveStation = station;
    // Fork action by each ID.
    let splitOfTarget = target.split(" ");
    switch (splitOfTarget[0]) {
        case 'origin':
            robotGroup.rotation = perimeter * 0;
            break;
        case 'station':
            let stationNum = parseInt(splitOfTarget[1]);
            switch (stationNum) {
                case 1:
                    robotGroup.rotation = perimeter * 1 / 5;
                    if (receiveStation[0] == '0') {
                        await fork1Release();
                        station1.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation1(arm01));
                    } else {
                        await fork2Get(receiveStation[0]);
                        station1.fill = 'rgb(189, 195, 199)';
                        stationGroup.remove(station1, textOfStation1(receiveStation[0])).add(station1);
                        await fork1Release(arm01);
                        station1.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation1(arm01));
                    }
                    break;
                case 2:
                    robotGroup.rotation = perimeter * 2 / 5;
                    if (receiveStation[1] == '0') {
                        await fork2Release(arm02);
                        station2.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation2(arm02));
                    } else {
                        await fork1Get(receiveStation[1]);
                        station2.fill = 'rgb(189, 195, 199)';
                        stationGroup.remove(station2, textOfStation2(receiveStation[1])).add(station2);
                        await fork2Release(arm02);
                        station2.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation2(arm02));
                    }
                    break;
                case 3:
                    robotGroup.rotation = perimeter * 3 / 5;
                    if (receiveStation[2] == '0') {
                        await fork1Release(arm01);
                        station3.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation3(arm01));
                    } else {
                        await fork2Get(receiveStation[2]);
                        station3.fill = 'rgb(189, 195, 199)';
                        stationGroup.remove(station3, textOfStation3(receiveStation[2])).add(station3);
                        await fork1Release(arm01);
                        station3.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation3(arm01));
                    }
                    break;
                case 4:
                    robotGroup.rotation = perimeter * 4 / 5;
                    if (receiveStation[3] == '0') {
                        await fork2Release(arm02);
                        station4.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation4(arm02));
                    } else {
                        await fork1Get(receiveStation[3]);
                        station4.fill = 'rgb(189, 195, 199)';
                        stationGroup.remove(station4, textOfStation4(receiveStation[3])).add(station4);
                        await fork2Release(arm02);
                        station4.fill = 'rgb(46, 204, 113)';
                        stationGroup.add(textOfStation4(arm02));
                    }
                    break;
            }
            break;
        default:
            robotGroup.rotation = perimeter * 0;
            let cassetteID = target.replace('cassette', '');
            let cassetteNum = parseInt(cassetteID);
            let cassetteStatus = receiveCassette[cassetteNum - 1];
            if (cassetteStatus == '0') {
                await fork1Release(arm01);
                cassetteHolder[cassetteNum - 1].fill = 'rgb(46, 204, 113)';
            } else {
                await fork1Get(cassetteStatus);
                cassetteHolder[cassetteNum - 1].fill = 'rgb(189, 195, 199)';
            }
    }
    //switch (target) {
    //    case 'origin':
    //        robotGroup.rotation = perimeter * 0;
    //        break;
    //    case 'station 01':
    //        robotGroup.rotation = perimeter * 1 / 5;
    //        if (station[0] == '0') {
    //            await fork1Release();
    //            station1.fill = 'rgb(46, 204, 113)';
    //        } else {
    //            await fork2Get();
    //            station1.fill = 'rgb(189, 195, 199)';
    //            await fork1Release();
    //            station1.fill = 'rgb(46, 204, 113)';
    //        }
    //        break;
    //    case 'station 02':
    //        robotGroup.rotation = perimeter * 2 / 5;
    //        if (station[1] == '0') {
    //            await fork2Release();
    //            station2.fill = 'rgb(46, 204, 113)';
    //        } else {
    //            await fork1Get();
    //            station2.fill = 'rgb(189, 195, 199)';
    //            await fork2Release();
    //            station2.fill = 'rgb(46, 204, 113)';
    //        }
    //        break;
    //    case 'station 03':
    //        robotGroup.rotation = perimeter * 3 / 5;
    //        if (station[2] == '0') {
    //            await fork1Release();
    //            station3.fill = 'rgb(46, 204, 113)';
    //        } else {
    //            await fork2Get();
    //            station3.fill = 'rgb(189, 195, 199)';
    //            await fork1Release();
    //            station3.fill = 'rgb(46, 204, 113)';
    //        }
    //        break;
    //    case 'station 04':
    //        robotGroup.rotation = perimeter * 4 / 5;
    //        if (station[3] == '0') {
    //            await fork2Release();
    //            station4.fill = 'rgb(46, 204, 113)';
    //        } else {
    //            await fork1Get();
    //            station4.fill = 'rgb(189, 195, 199)';
    //            await fork2Release();
    //            station4.fill = 'rgb(46, 204, 113)';
    //        }
    //        break;
    //    default:
    //        robotGroup.rotation = perimeter * 0;
    //        var cassetteID = target.replace('cassette', '');
    //        cassetteID1 = cassetteID;
    //        var cassetteNum = parseInt(cassetteID);
    //        cassetteNum1 = cassetteNum;
    //        if (originalCassette[cassetteNum - 1] == '0') {
    //            await fork1Get();
    //            cassetteHolder[cassetteNum - 1].fill = 'rgb(236, 240, 241)';
    //        } else {
    //            await fork1Release();
    //            cassetteHolder[cassetteNum - 1].fill = 'rgb(189, 195, 199)';
    //        }
    //        break;
    //}
}
// Bind a function to scale and rotate the rect to the animation loop.
two.bind('update', function () {
    // This code is called every time two.update() is called. Effectively 60 times per second.
    updateTwo;
}).play();
