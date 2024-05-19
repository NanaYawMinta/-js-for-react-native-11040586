function createUserProfiles(names, modifiedNames){
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

const names = ["Hello", "JavaScript", "you", "are", "welcome"];
const modifiedNames = [ 'hello', 'JAVASCRIPT', 'you', 'ARE', 'welcome' ]
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);
