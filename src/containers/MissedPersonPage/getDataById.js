export default function getDataById(id, docs) {

    const person = docs.find(item => item.id === id);
    console.log('person', person)
    return person;
}