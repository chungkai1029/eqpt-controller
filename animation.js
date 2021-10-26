// Those parameters should be get from browser
let aniAreaWidth = 1700;
let aniAreaHeight = 800;
let globalData = FileReader;
// Define where two should draw at.
let elem = document.getElementById('robot-animation');
let params = { width: aniAreaWidth, height: aniAreaHeight };
let two = new Two(params).appendTo(elem);
let widthOfGroup = two.width / 2;
let heightOfGroup = two.height / 2;
let scaleOfGroup = 1.0;
let perimeter = Math.PI * 2;
// those parameters should be get from setting file
// let robotPosX = globalData.robot.position.x;
// let robotPosY = globalData.robot.position.y;
// Make delay time.
function delay(s) {
    return new Promise(resolve => {
        setTimeout(resolve, s)
    })
}
// Define robot group.
let robots = function (x, y) {
    // Make robot, circle and fork.
    this.robot = two.makePolygon(x, y, 100, 6);
    this.circle1 = two.makeCircle(x + 30, y - 150, 30);
    this.circle2 = two.makeCircle(x - 30, y - 150, 30);
    this.arm1 = two.makeRoundedRectangle(x + 30, y - 100, 10, 100, 5);
    this.arm2 = two.makeRoundedRectangle(x - 30, y - 100, 10, 100, 5);
    this.robot.fill = 'rgb(149, 165, 166)';
    this.circle1.fill = 'rgb(189, 195, 199)';
    this.circle2.fill = 'rgb(189, 195, 199)';
    this.arm1.fill = 'rgb(127, 140, 141)';
    this.arm2.fill = 'rgb(127, 140, 141)';
    // Make extend circle and fork.
    this.extendCircle1 = two.makeCircle(x + 30, y - 240, 30);
    this.extendCircle2 = two.makeCircle(x - 30, y - 240, 30);
    this.extendArm1 = two.makeRectangle(x + 30, y - 170, 10, 140);
    this.extendArm2 = two.makeRectangle(x - 30, y - 170, 10, 140);
    this.extendCircle1.fill = 'rgb(46, 204, 113)';
    this.extendCircle2.fill = 'rgb(46, 204, 113)';
    this.extendArm1.fill = 'rgb(127, 140, 141)';
    this.extendArm2.fill = 'rgb(127, 140, 141)';
    // Make group of robot.
    this.robotGroup = two.makeGroup(this.arm1, this.arm2, this.robot, this.circle1, this.circle2);
    this.robotGroup.translation.set(widthOfGroup, heightOfGroup);
    this.robotGroup.scale = scaleOfGroup;
    this.robotGroup.noStroke();
    // Make ID text on fork.
    this.txtOfArm = function (str1, str2) {
        this.txt1 = new Two.Text(str1, x + 30, y - 150);
        this.txt2 = new Two.Text(str2, x - 30, y - 150);
        this.txt = [this.txt1, this.txt2];
        this.fill = 'rgb(44, 62, 80)';
        this.size = 20;
        return this;
    }
    return this;
}
// // Make robot now.
// for (let robot in globalData.robot) {
//     let robotX = robot.position.x;
//     let robotY = robot.position.y;
//     let txtOfArm1 = "c" + robot.arm1.cassette.toString() + "-s" + robot.arm1.slot.toString();
//     let txtOfArm2 = "c" + robot.arm2.cassette.toString() + "-s" + robot.arm2.slot.toString();
//     robots(robotX, robotY).robotGroup.add(txtOfArm(txtOfArm1, txtOfArm2))
// }
// Define load ports group.
let loadPorts = function (x, y) {
    this.loadPort = two.makeRoundedRectangle(x, y, 70, 70, 5);
    this.loadButton = two.makeRoundedRectangle(x, y + 25, 30, 10, 5);
    //this.loadButton._renderer.elem.addEventListener('click', inputDataCreate());
    this.loadPort.fill = 'rgb(189, 195, 199)';
    this.loadButton.fill = 'rgb(192, 57, 43)';
    // Make group of load ports.
    this.loadPortGroup = two.makeGroup(this.loadPort, this.loadButton);
    this.loadPortGroup.translation.set(widthOfGroup, heightOfGroup);
    this.loadPortGroup.scale = scaleOfGroup;
    // Make cassette ID text in load ports.
    this.txtOfLoadPort = function (str) {
        this.txt = new Two.Text(str, x, y);
        this.txt.fill = 'rgb(44, 62, 80)';
        this.txt.size = 15;
        return this;
    }
    return this;
};
// Send load ports ID to Max.
function inputDataCreate(id) {

};
// // Make load ports now.
// for (let loadport in globalData.loadports) {
//     let loadportX = loadport.position.x;
//     let loadportY = loadport.position.y;
//     let cassetteID = loadport.cassette.toString();
//     let IDString = "cassetteID:" + cassetteID;
//     chambers(loadportX, loadportY).loadPortGroup.add(txtOfLoadPort(IDString, loadportX, loadportY));
// }
// Define chambers group.
let chambers = function (x, y) {
    this.chamberRect = two.makeRoundedRectangle(x, y, 70, 70, 5);
    this.chamberCircle = two.makeCircle(x, y, 30);
    this.chamberRect.fill = 'rgb(189, 195, 199)';
    this.chamberCircle.fill = 'rgb(189, 195, 199)';
    // Make group of chambers.
    this.chamberGroup = two.makeGroup(this.chamberRect, this.chamberCircle);
    this.chamberGroup.translation.set(widthOfGroup, heightOfGroup);
    this.chamberGroup.scale = scaleOfGroup;
    // Make slot ID text in chambers.
    this.txtOfChamber = function (str) {
        this.txt = new Two.Text(str, x, y);
        this.txt.fill = 'rgb(44, 62, 80)';
        this.txt.size = 15;
        return this;
    }
    return this;
};
// // Make chambers now.
// for (let chamber in globalData.chambers) {
//     let chamberX = chamber.position.x;
//     let chamberY = chamber.position.y;
//     let chamberTxt = "c" + chamber.load.cassette.toString() + "-s" + chamber.load.slot.toString();
//     chambers(chamberX, chamberY).chamberGroup.add(txtOfChamber(chamberTxt, chamberX, chamberY).txt);
// }
// Define cassettes group.
let cassetteSlot = function (x, y, width, height) {
    let slots = new Array(25);
    for (let i = 0; i < slots.length; i++) {
        slots[i] = two.makeRoundedRectangle(x, y, width, height, 5);
        slots.fill = 'rgb(189, 195, 199)';
        y += 10;
    }
    this.slotGroup = two.makeGroup(slots);
    this.slotGroup.translation.set(widthOfGroup, heightOfGroup);
    this.slotGroup.scale = scaleOfGroup;
    // this.slot = two.makeRoundedRectangle(x, y, width, height, 5);
    // this.slot.fill = 'rgb(189, 195, 199)';
    this.txtOfSlot = function (str) {
        this.txt = new Two.Text(str, x, y);
        this.txt.fill = 'rgb(44, 62, 80)';
        this.txt.size = 10;
        return this;
    }
    return this;
}
// Make cassettes now.
// for (let cassette in globalData.cassettes) {}

// Fork action function.
// async function fork1Get(arm01) {
//     await delay(200);
//     robots().robotGroup.remove(circle1).add(extendArm1, extendCircle1).noStroke();
//     circle1.fill = 'rgb(46, 204, 113)';
//     await delay(200);
//     robots.robotGroup.remove(extendArm1, extendCircle1).add(circle1, txtOfArm(arm01, null)).noStroke();
//     await delay(200);
// }

robots(0, 0).robotGroup.add(txtOfArm("c3s01", "c3s02").txt);
loadPorts(200, 200).loadPortGroup.add(txtOfLoadPort("c1").txt);
loadPorts(300, 200).loadPortGroup.add(txtOfLoadPort("c2").txt);
chambers(-200, -200).chamberGroup.add(txtOfChamber("c2s21").txt);
cassetteSlot(-300, -300, 50, 10).slotGroup.add(txtOfSlot("1").txt);

// Bind a function to scale and rotate the rect to the animation loop.
two.bind('update', function () {
    // This code is called every time two.update() is called. Effectively 60 times per second.
}).play();
