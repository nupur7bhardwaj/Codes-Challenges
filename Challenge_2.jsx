// Challenge _ 2 ( solution_1 by Split method)//
// solution_2 by Substring method//
// solution _3 for loop( with Split method)//
// solution _4 Slice method//
// solution _5 Indexing for the firts letter//

const capitalizeName = (name) => {
    console.log(name);
    const firstLetter = name[0];
    const rest = name.slice(1); // or .substring, or .substr
    const capitalizedName = firstLetter.toUpperCase () + rest.toLowerCase();
    return capitalizedName;
}
console.log(capitalizeName("alice"));
console.log(capitalizeName ("BOB"));
console.log(capitalizeName ("kiARA"));
