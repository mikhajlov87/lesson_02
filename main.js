/**
 *@author Sergei Mikhailov
 */

/**
 * @return {number} the sum of a numbers coming before n
 */
function sumTo(n) {
    if (n !=0) {
        return n + sumTo(n - 1);
    } else {
        return n;
    }
}

/**
 * @return {number} factorial of a number
 */
function factorial(n) {
    if (n != 1) {
        return n * factorial(n - 1);
    } else {
        return n;
    }
}

/**
 * @return {number} value of serial number from Fibonacci sequence
 */
function fib(n) {
    var arr = [1, 1, 2],
        inner,
        i;

    for (i = arr.length; i <= n; i++) {
        inner = arr[i - 1] + arr[i - 2];
        arr.push(inner);
    }
    return arr[n - 1];
}


/* 10* */
var scheme1 = {
        name: 'gate',
        type: 'XOR',
        children: [
            {
                name: 'gate',
                type: 'AND',
                children: [
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    },
                    {
                        name: 'switch',
                        type: 'OFF',
                        state: 0
                    }
                ]
            }, {
                name: 'gate',
                type: 'NOT',
                children: [
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    }
                ]
            }
        ]
    },

    scheme2 = {
        name: 'gate',
        type: 'AND',
        children: [
            {
                name: 'gate',
                type: 'OR',
                children: [
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    },
                    {
                        name: 'gate',
                        type: 'XOR',
                        children: [
                            {
                                name: 'switch',
                                type: 'OFF',
                                state: 0
                            },
                            {
                                name: 'gate',
                                type: 'NOT',
                                children: [
                                    {
                                        name: 'switch',
                                        type: 'ON',
                                        state: 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
                name: 'gate',
                type: 'NOT',
                children: [
                    {
                        name: 'switch',
                        type: 'ON',
                        state: 1
                    }
                ]
            }
        ]
    },

    scheme3 = {
        name: 'gate',
        type: 'XOR',

        children: [
            {
                name: 'gate',
                type: 'NOT',
                children: [
                    {
                        name: 'switch',
                        type: 'OFF',
                        state: 0
                    }
                ]
            }, {
                name: 'gate',
                type: 'OR',
                children: [
                    {
                        name: 'gate',
                        type: 'OR',
                        children: [
                            {
                                name: 'switch',
                                type: 'OFF',
                                state: 0
                            },
                            {
                                name: 'gate',
                                type: 'AND',
                                children: [
                                    {
                                        name: 'switch',
                                        type: 'OFF',
                                        state: 0
                                    },
                                    {
                                        name: 'switch',
                                        type: 'ON',
                                        state: 1
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: 'switch',
                        type: 'OFF',
                        state: 0
                    }
                ]
            }
        ]
    };

    var determine = {
        actions: {
            /**
             * @return {boolean}
             */
            AND: function (a, b) {
                return !!(a && b);
            }
        ,
            /**
             * @return {boolean}
             */
            OR: function (a, b) {
                return !!(a || b);
            }
        ,
            /**
             * @return {boolean}
             */
            XOR: function (a, b) {
                return !!(a ^ b);
            }
        ,
            /**
             * @return {boolean}
             */
            NOT: function (a) {
                return !a;
            }
        },

        getType: function (obj) {
            return obj.type;
        },

        determineGates: function (obj) {
            if( obj.hasOwnProperty('children') ) {
                var first = 0,
                    last = obj.children.length - 1;

                var obj1 = obj.children[first],
                    obj2 = obj.children[last];
            }
            var type = this.getType(obj);

            var a = this.immersion(obj1);
            var b = this.immersion(obj2);

            return this.actions[type](a, b);
        },

        immersion: function (obj) {
            for (var key in obj) {
                if ( obj.hasOwnProperty(key) && obj[key] === 'gate' ) {
                    return this.determineGates(obj);
                } else if ( obj.hasOwnProperty(key) && obj[key] === 'switch' ) {
                    return !!obj.state;
                }
            }
        },

        action: function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key) && key === 'name') {
                    if (obj.name === 'gate') {
                        return this.determineGates(obj);
                    } else if (obj.name === 'switch') {
                        return !!this.state;
                    }
                }
            }
        }
    };