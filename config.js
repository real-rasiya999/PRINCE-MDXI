const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU25KiSBD9l3rVGJFbixEdsYBKA4rY2NCyMQ8IBZRAgVUFihv++wZ9mZmH3dlenoosyDx5zsn8C+AaUWjDHsz/Ag1BXcTgcGR9A8EcaG2aQgLGIIlYBObA3GLKN5IjnOPLsnzab9Ep1GLoSCnEkpvokPYOz55c36CP4D4GTXssUfybhKrPCZ47lYh/uixPB/hAdM6y+6m5il5XmHUjKFnUmHjXZ/UR3IeMESIIZ8smhxUkUWnD3o0Q+Rp86pY3jj/MCoV73U7ODdT33cE77F6Nl+2u3MQISd5mNmlhGX8NvqtZedNqLbchNzVQ2hkOak4K6769CLCq9C5U64DDAdl9wKcowzAxE4gZYv2XeadqLR7l3aulcy+erV1idxNv2wdbOyg1uunYEsJcbMLzZrn8GvDp1Mz26tpB4eJKDHm9Rc+n4nwbFdfQmvhe9QJPW+mGjGVW/ArcJZ9eKf4P7yNtddxNrSzfnB8mxV65WOakerFItnLEPZYCWG+Kzjv2ZpF9Db4cL6773p9yUOfFxcK3ZWJcXEI5ebc/8OtnwjEzppO145k/4UesJb9DuXgN+FvtaUdNnvgr47RQoRA4TWrkMrb6TmnDm7mcqUuDysviOBICT6tWtagVap2HRh4J157ml6dVuTlQ6pLypZOnaPf41lEBezMB8+l9DAjMEGUkYqjGbzF5DKKk82BMIHtjF/SxakvHnD37QhsEwenhmFs4MpXjrVI9N9bi7cZ+0BRzpKqPYAwaUseQUpg8Icpq0m8gpVEGKZj/+X0MMLyyd92GagI/BikilL3gtinrKPkU9fMyiuO6xczrcawPB0jAnPsZhowhnNGBxhZHJM5RB/U8YhTM06ik8EeDkMAEzBlp4Y+h1etk4F11PcN3txoYg+pND5QMjuRFecaLEicoc/EP+u0yJI2a5huGDIwBjoZvgR9h3It93cqyDMagfP9VlCROkhVO5jlO4ObiH0P8/gP0UCOBLEIlBXOgW1tZ8A+7Wuk6bnc4qJ6q2u9Efjb5aZZ3NRTbD86mOUXLaj2BrRKaZt/UU/mZXpkW33S+T/rioFnObflPScAc8A5a41QJJeM446xdGgfeEqcyPduvNg2rGXd2naV2eBlZq1tpiHLoGRvIc3XRc3kapvHaVKtSyroHmeNH1cIh4rZXs8ehWgI7FMNfi51EIdFJU1kd5xcNCZ+X2X6WzLZOeKsFw1auvA1Hqnb2IdmdW+Wp3WOH8ia8uiO3VHO7DzR5Rk9tON0upHUmy0mVnD5s/DZG5cf6Qm8OG+QbXlME37bBh1D/Iec77MFz3H38S4aP7fIvE6qlXumfke4ccgtNBNIFnr45Rw4sjpvj7nVzYRTHjaF6+/gK7vfvY9CUEUtrUg07tDpGYAxI3Q4ONnFa/6aSrpqmrmaroekyokz9ORV7VEHKoqoB8+nDjBemvCCLY1D1atN4LGKfwwTU4XHXPrj/DW/XVKFnBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
