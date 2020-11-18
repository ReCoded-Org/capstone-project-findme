export default function getDataById(id, docs) {

    const person = docs.find(item => item.id === id);
    return Promise.resolve(person);
}