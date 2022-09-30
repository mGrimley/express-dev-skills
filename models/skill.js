const skills = [
    {id: 125223, skill: 'Juggling', yearsExp: .5},
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
    updateOne,
};
  
function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skill.done = false
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function updateOne(id, skill) {
    const skillToUpdate = getOne(id)
    skillToUpdate.skill = skill
}