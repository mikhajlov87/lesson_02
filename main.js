'use strict';

function Horse(name) {
    this.name = name;
    this.mileage = 0;
    this.tiredCount = 0;
}

Horse.prototype._totalMileage = 0;

Horse.prototype._maxTiredCount = 10;

Horse.prototype._timeToRest = 5;

Horse.prototype.run = function (distance) {//debugger;
    var MAX_TIRED_COUNT = this._maxTiredCount;
    var mileage = distance;
    var tired = this.tiredCount;
    var differ = 0;

    if (mileage) {
        differ = MAX_TIRED_COUNT - tired;
        if ( !this.isTired(mileage) ) {
            differ = mileage;
        }
        this.mileage += differ;
        this.constructor.prototype._totalMileage += differ;
        this.tiredCount += differ;
        mileage -= differ;
    }

    if (this.tiredCount === MAX_TIRED_COUNT) {
        this.takeRest(mileage);
    }
};

Horse.prototype.isTired = function (distance) {
    return (this.tiredCount + distance > this._maxTiredCount);
};

Horse.prototype.getTotalMileage = function () {
    return this._totalMileage;
};

Horse.prototype.takeRest = function (mileage) {
    this.tiredCount = 0;
    setTimeout(this.run(mileage), this._timeToRest);
};