var Tank = function (country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun) {
    this.country = country;
    this.tankName = tankName;
    this.topSpeed = topSpeed;
    this.units = units;
    this.ammoCount = ammoCount;
    this.year = year;
    this.enginePower = enginePower;
    this.traverse = traverse;
    this.pivot = pivot;
    this.hullArmor = hullArmor;
    this.shells = shells;
    this.penetration = penetration;
    this.rateOfFire = rateOfFire;
    this.accuracy = accuracy;
    this.aimTime = aimTime;
    this.gunTraversSpeed = gunTraverseSpeed;
    this.gunArc = gunArc;
    this.elevationArc = elevationArc;
    this.viewRange = viewRange;
    this.radio = radio;
    this.suspension = suspension;
    this.engine = engine;
    this.gun = gun;

};

//this creates the object and calls it from Tank
function Tank1 (country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun, tankType) {
    //Call the parent constructor
    //This sets the inherited properties for the subclass
    Tank.call(this, country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun);
    // Sets the specific subclass properties
    this.tankType = tankType;
}

// This creates it as an object via prototyping
Tank1.prototype.constructor = Tank1;

Tank1.prototype.displayVehicle = function() {
    document.write("<h2>" + "Tank Name: " + this.tankName + "</h2>" + "<p>" + "Tank Type: " + this.tankType + "<br>" + "Country: " + this.country + "<br>" + "Year: " + this.year + "<br>" + "Top Speed: " + this.topSpeed + " " + this.units + "<br>" + "Ammo Count: " + this.ammoCount + " rounds" + "<br>" + "Engine: " + this.engine + "<br>" + "Engine Power: " + this.enginePower + " hp" + "<br>" + "Traverse: " + this.traverse + " deg/s" + "<br>" + "Pivot: " + this.pivot + "<br>" + "Hull Armor: " + this.hullArmor + " mm" + "<br>" + "Shells: " + this.shells + "<br>" + "Penetration: " + this.penetration + " mm" + "<br>" + "Rate of Fire: " + this.rateOfFire + "r/m" + "<br>" + "Accuracy: " + this.accuracy + " m" + "<br>" + "Aim Time: " + this.aimTime + " s" + "<br>" + "Gun Traverse Speed: " + this.gunTraversSpeed + " deg/s" + "<br>" + "Gun Arc: " + this.gunArc + " degrees" + "<br>" + "Elevation Arc: " + this.elevationArc + " degrees" + "<br>" + "View Range: " + this.viewRange + " m" + "<br>" + "Radio: " + this.radio + "<br>" + "Suspension: " + this.suspension + "<br>" + "Engine: " + this.engine + "<br>" + "Gun: " + this.gun + + "<br>" + "</p> <br><br>");
    this.launchVehicle();
};

//this creates a function that illustrates what the tank is doing on startup.
Tank1.prototype.launchVehicle = function() {
    document.write("<p id=\'" + this.tankName + "\'>" + this.tankName + " is loading...<br>" + this.ammoCount + " rounds have been loaded. <br>" + this.tankName + " is accelerating to a max speed of " + this.topSpeed + " km/h. <br>" + this.tankName + " is cruising at max speed." + "</p><br><br>");
};

//this creates the object and calls it from Tank
function DummyTank (country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun, tankType) {
    //Call the parent constructor
    //This sets the inherited properties for the subclass
    Tank.call(this, country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun);
    // Sets the specific subclass properties
    this.tankType = tankType;
}

// This creates it as an object via prototyping
DummyTank.prototype.constructor = DummyTank;

DummyTank.prototype.displayVehicle = function() {
    document.write("<h2>" + "Tank Name: " + this.tankName + "</h2>" + "<p>" + "Tank Type: " + this.tankType + "<br>" + "Country: " + this.country + "<br>" + "Year: " + this.year + "<br>" + "Top Speed: " + this.topSpeed + " " + this.units + "<br>" + "Ammo Count: " + this.ammoCount + " rounds" + "<br>" + "Engine: " + this.engine + "<br>" + "Engine Power: " + this.enginePower + " hp" + "<br>" + "Traverse: " + this.traverse + " deg/s" + "<br>" + "Pivot: " + this.pivot + "<br>" + "Hull Armor: " + this.hullArmor + " mm" + "<br>" + "Shells: " + this.shells + "<br>" + "Penetration: " + this.penetration + " mm" + "<br>" + "Rate of Fire: " + this.rateOfFire + "r/m" + "<br>" + "Accuracy: " + this.accuracy + " m" + "<br>" + "Aim Time: " + this.aimTime + " s" + "<br>" + "Gun Traverse Speed: " + this.gunTraversSpeed + " deg/s" + "<br>" + "Gun Arc: " + this.gunArc + " degrees" + "<br>" + "Elevation Arc: " + this.elevationArc + " degrees" + "<br>" + "View Range: " + this.viewRange + " m" + "<br>" + "Radio: " + this.radio + "<br>" + "Suspension: " + this.suspension + "<br>" + "Engine: " + this.engine + "<br>" + "Gun: " + this.gun + + "<br>" + "</p> <br><br>");
    this.launchVehicle();
};

//this creates a function that illustrates what the tank is doing on startup.
DummyTank.prototype.launchVehicle = function() {
    document.write("<p id=\'" + this.tankName + "\'>" + this.tankName + " is loading...<br>" + this.ammoCount + " rounds have been loaded. <br>" + this.tankName + " is accelerating to a max speed of " + this.topSpeed + " km/h. <br>" + this.tankName + " is cruising at max speed." + "</p><br><br>");
};

//this creates the object and calls it from Tank
function Tank2 (country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun, tankType) {
    //Call the parent constructor
    //This sets the inherited properties for the subclass
    Tank.call(this, country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun);
    // Sets the specific subclass properties
    this.tankType = tankType;
}

// This creates it as an object via prototyping
Tank2.prototype.constructor = Tank2;

Tank2.prototype.displayVehicle = function() {
    document.write("<h2>" + "Tank Name: " + this.tankName + "</h2>" + "<p>" + "Tank Type: " + this.tankType + "<br>" + "Country: " + this.country + "<br>" + "Year: " + this.year + "<br>" + "Top Speed: " + this.topSpeed + " " + this.units + "<br>" + "Ammo Count: " + this.ammoCount + " rounds" + "<br>" + "Engine: " + this.engine + "<br>" + "Engine Power: " + this.enginePower + " hp" + "<br>" + "Traverse: " + this.traverse + " deg/s" + "<br>" + "Pivot: " + this.pivot + "<br>" + "Hull Armor: " + this.hullArmor + " mm" + "<br>" + "Shells: " + this.shells + "<br>" + "Penetration: " + this.penetration + " mm" + "<br>" + "Rate of Fire: " + this.rateOfFire + "r/m" + "<br>" + "Accuracy: " + this.accuracy + " m" + "<br>" + "Aim Time: " + this.aimTime + " s" + "<br>" + "Gun Traverse Speed: " + this.gunTraversSpeed + " deg/s" + "<br>" + "Gun Arc: " + this.gunArc + " degrees" + "<br>" + "Elevation Arc: " + this.elevationArc + " degrees" + "<br>" + "View Range: " + this.viewRange + " m" + "<br>" + "Radio: " + this.radio + "<br>" + "Suspension: " + this.suspension + "<br>" + "Engine: " + this.engine + "<br>" + "Gun: " + this.gun + + "<br>" + "</p> <br><br>");
    this.launchVehicle();
};

//this creates a function that illustrates what the tank is doing on startup.
Tank2.prototype.launchVehicle = function() {
    document.write("<p id=\'" + this.tankName + "\'>" + this.tankName + " is loading...<br>" + this.ammoCount + " rounds have been loaded. <br>" + this.tankName + " is accelerating to a max speed of " + this.topSpeed + " km/h. <br>" + this.tankName + " is cruising at max speed." + "</p><br><br>");
};

//this creates the object and calls it from Tank
function Tank3 (country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun, tankType) {
    //Call the parent constructor
    //This sets the inherited properties for the subclass
    Tank.call(this, country, tankName, topSpeed, units, ammoCount, year, enginePower, traverse, pivot, hullArmor, shells, penetration, rateOfFire, accuracy, aimTime, gunTraverseSpeed, gunArc, elevationArc, viewRange, radio, suspension, engine, gun);
    // Sets the specific subclass properties
    this.tankType = tankType;
}

// This creates it as an object via prototyping
Tank3.prototype.constructor = Tank3;

Tank3.prototype.displayVehicle = function() {
    document.write("<h2>" + "Tank Name: " + this.tankName + "</h2>" + "<p>" + "Tank Type: " + this.tankType + "<br>" + "Country: " + this.country + "<br>" + "Year: " + this.year + "<br>" + "Top Speed: " + this.topSpeed + " " + this.units + "<br>" + "Ammo Count: " + this.ammoCount + " rounds" + "<br>" + "Engine: " + this.engine + "<br>" + "Engine Power: " + this.enginePower + " hp" + "<br>" + "Traverse: " + this.traverse + " deg/s" + "<br>" + "Pivot: " + this.pivot + "<br>" + "Hull Armor: " + this.hullArmor + " mm" + "<br>" + "Shells: " + this.shells + "<br>" + "Penetration: " + this.penetration + " mm" + "<br>" + "Rate of Fire: " + this.rateOfFire + "r/m" + "<br>" + "Accuracy: " + this.accuracy + " m" + "<br>" + "Aim Time: " + this.aimTime + " s" + "<br>" + "Gun Traverse Speed: " + this.gunTraversSpeed + " deg/s" + "<br>" + "Gun Arc: " + this.gunArc + " degrees" + "<br>" + "Elevation Arc: " + this.elevationArc + " degrees" + "<br>" + "View Range: " + this.viewRange + " m" + "<br>" + "Radio: " + this.radio + "<br>" + "Suspension: " + this.suspension + "<br>" + "Engine: " + this.engine + "<br>" + "Gun: " + this.gun + + "<br>" + "</p> <br><br>");
    this.launchVehicle();
};

//this creates a function that illustrates what the tank is doing on startup.
Tank3.prototype.launchVehicle = function() {
    document.write("<p id=\'" + this.tankName + "\'>" + this.tankName + " is loading...<br>" + this.ammoCount + " rounds have been loaded. <br>" + this.tankName + " is accelerating to a max speed of " + this.topSpeed + " km/h. <br>" + this.tankName + " is cruising at max speed." + "</p><br><br>");
};

//var Simulate = function (tank1, dummyTank, firstShot, totalHealth1, totalHealth2, tankMove, dummyMove, dpm1, dpm2, battleRange, winner, loserHealth, battleTime) {
//
//
//
//    if (Tank1.viewRange > DummyTank.viewRange) {
//        this.firstShot = Tank1.tankName;
//    }
//    else if (Tank1.viewRange < DummyTank.viewRange) {
//        this.firstShot = DummyTank.tankName;
//    }
//
//    this.totalHealth1 = Tank1.hullArmor + dummyMove;
//    this.totalHealth2 = DummyTank.hullArmor + dummyMove;
//
//    if (Tank1.pivot == "Yes") {
//        this.tankMove = 100;
//    }
//
//    else if (Tank1.pivot == "No") {
//        this.tankMove = 0;
//    }
//
//    if (DummyTank.pivot == "Yes") {
//        this.dummyMove = 100;
//    }
//
//    else if (DummyTank.pivot == "No") {
//        this.dummyMove = 0;
//    }
//
//    this.dpm1 = Tank1.penetration * Tank1.rateOfFire;
//    this.dpm2 = DummyTank.penetration * DummyTank.rateOfFire;
//
//    if (Tank1.viewRange > DummyTank.viewRange) {
//        this.battleRange = Tank1.viewRange;
//    }
//    else if (Tank1.viewRange < DummyTank.viewRange) {
//        this.battleRange = DummyTank.viewRange;
//    }
//
//    if (this.dpm1 > this.dpm2) {
//        this.winner = this.dpm1;
//    }
//    else if (this.dpm1 < this.dpm2) {
//        this.winner = this.dpm2;
//    }
//
//    if (this.dpm1 > this.dpm2) {
//        this.loserHealth = this.totalHealth2;
//    }
//    else if (this.dpm1 < this.dpm2) {
//        this.loserHealth = this.totalHealth1;
//    }
//
//    this.battleTime = this.winner/this.loserHealth;
//};
//
//Simulate.prototype.launchFight = function() {
//    document.write("<p>" + Tank1.tankName + " and " + DummyTank.tankName + " will engage in battle from " + this.battleRange + " meters away. " + this.firstShot + " fires first. " + Tank1.tankName
//        + "</p><br><br>");
//};


function tankLauncher() {
    //Instantiate an array to hold the vehicles.
    var tankArray = [];

    //Populate the vehicle array with objects and subclass objects
    tankArray[0] = new Tank1('German', 'Jagdpanzer E 100', 30, "km/h", 24, 1944, 1200, 20, "Yes", "200/120/150", "AP/HEAT/HE", "299/420/85", 2.33, 0.35, 2.7, 26, 16, "-6/+17", 390, "10WSc", "Jagdpanzer E 100", "Maybach Neues Projekt", "17 cm Pak", "Tank Destroyer");
    tankArray[1] = new DummyTank('China', "Type 59", 56, "km/h", 34, 1959, 520, 46, "No", "100/80/45", "AP/APCR/HE", "181/241/50", 6.9, 0.39, 2.9, 46, 360, "-7/+20", 380, "A-220", "Type 59", "NORINCO 12150L", "100 mm Type 59", "Medium Tank");
    tankArray[2] = new Tank2('Soviet Union', 'IS-7', 59.6, 'km/h', 30, 1945, 2150, 28, 'No', '150/150/100', 'AP/APCR/HE', '250/303/68', 4.38, 0.4, 3.1, 25, 360, '-6/+18', 400, '10RK-26', 'IS-7', 'M-50T', '130 mm S-70', 'Heavy Tank');
    tankArray[3] = new Tank3('France', 'Renault FT', 21, 'km/h', 237, 1917, 39, 60, 'No', '16/16/16', 'AP/APCR/HE', '29/46/18', 24, 0.54, 2, 34, 360, '-2/+35', 280, 'ER 52', 'M26/27', 'Renault', '13.2 mm Hotchkiss mle. 1930', 'Light Tank');

    //polymorphically exercise the methods of the objects
    for (var i = 0; i < tankArray.length; i++) {
        tankArray[i].displayVehicle();
    }

    //var simulation = new Simulate();
    //simulation.launchFight();
}