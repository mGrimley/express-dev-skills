const skills = [
    {id: 125224, skill: 'Origami', yearsExp: 20},
    {id: 125225, skill: 'C++', yearsExp: 2},
    {id: 125226, skill: 'Java', yearsExp: 3},
    {id: 125227, skill: 'JavaScript', yearsExp: .5},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}