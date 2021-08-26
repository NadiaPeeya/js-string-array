function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'sabbir']
const myBigBuddy = megaFriend(1256);
// console.log(myBigBuddy);

//way 1 
if (friends.indexOf('lion') != -1) {
    // console.log('Lion exists');
}
//way 2
if (friends.includes('lion')) {
    console.log('lion exists using includes');
}

//concate
const first = [1, 3, 5];
const second = [4, 6, 8, 8];
const combined = first.concat(second);
console.log(combined);

