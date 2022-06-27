function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }

    return admins;

}

const userRoles = new Map();

userRoles.set('Jeffrey', 'ADMIN');
userRoles.set('LIN', 'SUDO');
userRoles.set('ANDREW', 'ADMIN');
userRoles.set('JENN', 'SUDO');
userRoles.set('ALEX', 'USER');


console.log(getAdmins(userRoles));


